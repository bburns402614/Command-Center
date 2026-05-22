import { NextRequest, NextResponse } from 'next/server';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}

export async function POST(req: NextRequest) {
  try {
    const { channel, message } = await req.json();

    if (!channel || !message) {
      return NextResponse.json(
        { error: 'channel and message are required' },
        { status: 400, headers: CORS }
      );
    }

    const token = process.env.SLACK_BOT_TOKEN;
    if (!token) {
      return NextResponse.json({ error: 'Missing SLACK_BOT_TOKEN' }, { status: 500, headers: CORS });
    }

    const res = await fetch('https://slack.com/api/chat.postMessage', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ channel, text: message }),
    });
    const data = await res.json();

    if (!data.ok) return NextResponse.json({ error: data.error }, { status: 400, headers: CORS });
    return NextResponse.json({ success: true, ts: data.ts }, { headers: CORS });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500, headers: CORS });
  }
}
