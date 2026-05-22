import { NextRequest, NextResponse } from 'next/server';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}

const LINEAR_URL = 'https://api.linear.app/graphql';

const STATE_NAME_MAP: Record<string, string> = {
  'In Progress': 'In Progress',
  Done: 'Done',
};

async function gql(apiKey: string, query: string, variables: Record<string, unknown>) {
  const res = await fetch(LINEAR_URL, {
    method: 'POST',
    headers: { Authorization: apiKey, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });
  return res.json();
}

export async function POST(req: NextRequest) {
  try {
    const { action, linearId, name, priority, status, owner, notes } = await req.json();

    const apiKey = process.env.LINEAR_API_KEY;
    const teamId = process.env.LINEAR_TEAM_ID;

    if (!apiKey || !teamId) {
      return NextResponse.json({ error: 'Missing Linear env vars' }, { status: 500, headers: CORS });
    }

    const statesData = await gql(
      apiKey,
      `query GetStates($teamId: String!) { team(id: $teamId) { states { nodes { id name } } } }`,
      { teamId }
    );
    const states: { id: string; name: string }[] = statesData.data?.team?.states?.nodes ?? [];
    const targetName = STATE_NAME_MAP[status] ?? 'Todo';
    const state = states.find((s) => s.name === targetName) ?? states.find((s) => s.name === 'Todo');

    const description = [
      owner && `Owner: ${owner}`,
      `Priority: ${priority}`,
      `Status: ${status}`,
      notes && `Notes: ${notes}`,
    ]
      .filter(Boolean)
      .join('\n');

    if (action === 'create') {
      const data = await gql(
        apiKey,
        `mutation IssueCreate($input: IssueCreateInput!) {
          issueCreate(input: $input) { success issue { id identifier url } }
        }`,
        { input: { teamId, title: name, description, ...(state ? { stateId: state.id } : {}) } }
      );
      const issue = data.data?.issueCreate?.issue;
      if (!issue) return NextResponse.json({ error: data }, { status: 500, headers: CORS });
      return NextResponse.json({ linearId: issue.identifier, url: issue.url }, { headers: CORS });
    }

    if (action === 'update' && linearId) {
      const issueData = await gql(
        apiKey,
        `query GetIssue($id: String!) { issue(id: $id) { id } }`,
        { id: linearId }
      );
      const issueId = issueData.data?.issue?.id;
      if (!issueId) return NextResponse.json({ error: 'Issue not found' }, { status: 404, headers: CORS });

      await gql(
        apiKey,
        `mutation IssueUpdate($id: String!, $input: IssueUpdateInput!) {
          issueUpdate(id: $id, input: $input) { success }
        }`,
        { id: issueId, input: { title: name, description, ...(state ? { stateId: state.id } : {}) } }
      );
      return NextResponse.json({ success: true }, { headers: CORS });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400, headers: CORS });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500, headers: CORS });
  }
}
