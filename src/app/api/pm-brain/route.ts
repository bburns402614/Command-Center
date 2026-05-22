import Anthropic from '@anthropic-ai/sdk';
import { PM_BRAIN_CONTEXT } from '@/lib/pm-brain-context';

const client = new Anthropic();

const SYSTEM_PROMPT = `You are PM Brain — an expert AI product management assistant for IOU Financial, a fintech company. You have deep knowledge of PM frameworks, methods, and the company's specific context.

You help with:
- Writing PRDs, opportunity assessments, and strategy documents
- Creating and evaluating OKRs
- Planning roadmaps and prioritizing features
- Running discovery (user interviews, JTBD analysis, opportunity mapping)
- Drafting stakeholder communications, one-pagers, and newsletters
- Thinking through prioritization frameworks
- Applying mental models to PM decisions

Always produce actionable, specific outputs — not generic advice. When writing documents, use the templates and frameworks from the knowledge base. Be concise and direct; avoid unnecessary preamble.

Here is your knowledge base:

${PM_BRAIN_CONTEXT}`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: 'messages array required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const stream = client.messages.stream({
      model: 'claude-opus-4-7',
      max_tokens: 8192,
      thinking: { type: 'adaptive' },
      system: SYSTEM_PROMPT,
      messages,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === 'content_block_delta' &&
              event.delta.type === 'text_delta'
            ) {
              const chunk = JSON.stringify({ text: event.delta.text });
              controller.enqueue(encoder.encode(`data: ${chunk}\n\n`));
            }
          }
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
        } catch (err) {
          const msg = err instanceof Error ? err.message : 'Stream error';
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ error: msg })}\n\n`)
          );
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
