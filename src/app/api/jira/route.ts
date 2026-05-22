import { NextRequest, NextResponse } from 'next/server';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}

const PRIORITY_MAP: Record<string, string> = {
  '1-Critical': 'Highest',
  '2-Important': 'High',
  '3-Normal': 'Medium',
};

function buildDescription(owner: string, priority: string, status: string, notes: string) {
  return {
    version: 1,
    type: 'doc',
    content: [
      ...(owner ? [{ type: 'paragraph', content: [{ type: 'text', text: `Owner: ${owner}` }] }] : []),
      { type: 'paragraph', content: [{ type: 'text', text: `Priority: ${priority}` }] },
      { type: 'paragraph', content: [{ type: 'text', text: `Status: ${status}` }] },
      ...(notes ? [{ type: 'paragraph', content: [{ type: 'text', text: `Notes: ${notes}` }] }] : []),
    ],
  };
}

export async function POST(req: NextRequest) {
  try {
    const { action, issueKey, name, priority, status, owner, notes } = await req.json();

    const domain = process.env.JIRA_DOMAIN;
    const email = process.env.JIRA_EMAIL;
    const token = process.env.JIRA_API_TOKEN;
    const project = process.env.JIRA_PROJECT;

    if (!domain || !email || !token || !project) {
      return NextResponse.json({ error: 'Missing Jira env vars' }, { status: 500, headers: CORS });
    }

    const auth = Buffer.from(`${email}:${token}`).toString('base64');
    const headers: Record<string, string> = {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const description = buildDescription(owner, priority, status, notes);

    if (action === 'create') {
      const res = await fetch(`https://${domain}/rest/api/3/issue`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          fields: {
            project: { key: project },
            summary: name,
            issuetype: { name: 'Task' },
            priority: { name: PRIORITY_MAP[priority] ?? 'Medium' },
            description,
          },
        }),
      });
      const data = await res.json();
      if (!res.ok) return NextResponse.json({ error: data }, { status: res.status, headers: CORS });
      return NextResponse.json(
        { jiraKey: data.key, url: `https://${domain}/browse/${data.key}` },
        { headers: CORS }
      );
    }

    if (action === 'update' && issueKey) {
      const res = await fetch(`https://${domain}/rest/api/3/issue/${issueKey}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify({
          fields: {
            summary: name,
            priority: { name: PRIORITY_MAP[priority] ?? 'Medium' },
            description,
          },
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        return NextResponse.json({ error: data }, { status: res.status, headers: CORS });
      }
      return NextResponse.json({ success: true }, { headers: CORS });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400, headers: CORS });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500, headers: CORS });
  }
}
