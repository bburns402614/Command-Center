'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SUGGESTED_PROMPTS = [
  { label: 'Write a PRD', prompt: 'Help me write a PRD for a new feature. Start by asking me what the feature is and who it\'s for.' },
  { label: 'Plan discovery', prompt: 'Help me plan a discovery process. What should I focus on and what methods should I use?' },
  { label: 'Create OKRs', prompt: 'Help me create OKRs for my product team. Start by asking about our current goals and challenges.' },
  { label: 'Prioritize features', prompt: 'Help me prioritize my feature backlog. What framework would work best and what information do you need?' },
  { label: 'Draft a one-pager', prompt: 'Help me write a one-pager to align stakeholders on a product initiative.' },
  { label: 'Opportunity assessment', prompt: 'Walk me through an opportunity assessment for a new product idea.' },
];

export default function PMAssistantView() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const [streamingText, setStreamingText] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, streamingText]);

  const send = async (content: string) => {
    if (!content.trim() || streaming) return;

    const userMsg: Message = { role: 'user', content: content.trim() };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput('');
    setStreaming(true);
    setStreamingText('');

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    try {
      const res = await fetch('/api/pm-brain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.ok || !res.body) {
        const err = await res.json().catch(() => ({ error: 'Request failed' }));
        throw new Error(err.error || 'Request failed');
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(6).trim();
          if (data === '[DONE]') {
            setMessages((prev) => [
              ...prev,
              { role: 'assistant', content: accumulated },
            ]);
            setStreamingText('');
            setStreaming(false);
            return;
          }
          try {
            const parsed = JSON.parse(data);
            if (parsed.error) throw new Error(parsed.error);
            if (parsed.text) {
              accumulated += parsed.text;
              setStreamingText(accumulated);
            }
          } catch {
            // skip malformed lines
          }
        }
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Something went wrong';
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: `⚠️ Error: ${msg}\n\nMake sure ANTHROPIC_API_KEY is set in your environment variables.` },
      ]);
      setStreamingText('');
      setStreaming(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    // Auto-resize
    e.target.style.height = 'auto';
    e.target.style.height = Math.min(e.target.scrollHeight, 160) + 'px';
  };

  const showEmpty = messages.length === 0 && !streaming;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Dark header */}
      <div style={{ background: '#1a1714', padding: '36px 0 32px', flexShrink: 0 }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
            <span style={{ fontSize: 28 }}>🧠</span>
            <h1
              style={{
                fontFamily: 'var(--font-dm-serif)',
                fontSize: 32,
                fontWeight: 400,
                color: '#fff',
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              PM Brain
            </h1>
          </div>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
            Your AI-powered product management assistant — powered by Claude
          </p>
        </div>
      </div>

      {/* Chat area */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '32px 24px',
          background: '#faf9f7',
        }}
      >
        <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Empty state with suggested prompts */}
          {showEmpty && (
            <div style={{ padding: '20px 0 8px' }}>
              <p style={{ color: '#a8a39e', fontSize: 14, marginBottom: 16, textAlign: 'center' }}>
                Ask anything about product management, or try one of these:
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 10,
                  justifyContent: 'center',
                }}
              >
                {SUGGESTED_PROMPTS.map((p) => (
                  <button
                    key={p.label}
                    onClick={() => send(p.prompt)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: 20,
                      border: '1px solid #e0dbd4',
                      background: '#fff',
                      color: '#1a1714',
                      fontSize: 13,
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.12s',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                    }}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Message history */}
          {messages.map((msg, i) => (
            <MessageBubble key={i} message={msg} />
          ))}

          {/* Streaming response */}
          {streaming && streamingText && (
            <MessageBubble message={{ role: 'assistant', content: streamingText }} streaming />
          )}

          {/* Typing indicator */}
          {streaming && !streamingText && (
            <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  background: '#1a1714',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                🧠
              </div>
              <div
                style={{
                  background: '#fff',
                  border: '1px solid #e0dbd4',
                  borderRadius: 12,
                  borderTopLeftRadius: 4,
                  padding: '12px 16px',
                  display: 'flex',
                  gap: 4,
                  alignItems: 'center',
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#a8a39e', animation: 'pulse 1.2s infinite' }} />
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#a8a39e', animation: 'pulse 1.2s 0.2s infinite' }} />
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#a8a39e', animation: 'pulse 1.2s 0.4s infinite' }} />
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input bar */}
      <div
        style={{
          background: '#fff',
          borderTop: '1px solid #e0dbd4',
          padding: '16px 24px',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            maxWidth: 820,
            margin: '0 auto',
            display: 'flex',
            gap: 10,
            alignItems: 'flex-end',
          }}
        >
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleTextareaChange}
            onKeyDown={handleKeyDown}
            placeholder="Ask PM Brain anything… (Enter to send, Shift+Enter for newline)"
            rows={1}
            style={{
              flex: 1,
              padding: '11px 14px',
              border: '1px solid #e0dbd4',
              borderRadius: 10,
              fontSize: 14,
              color: '#1a1714',
              background: '#faf9f7',
              outline: 'none',
              resize: 'none',
              lineHeight: 1.5,
              minHeight: 44,
              maxHeight: 160,
              overflowY: 'auto',
              fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
            }}
          />
          <button
            onClick={() => send(input)}
            disabled={!input.trim() || streaming}
            style={{
              padding: '11px 20px',
              borderRadius: 10,
              border: 'none',
              background: !input.trim() || streaming ? '#e0dbd4' : '#1a1714',
              color: !input.trim() || streaming ? '#a8a39e' : '#fff',
              fontWeight: 600,
              fontSize: 14,
              cursor: !input.trim() || streaming ? 'default' : 'pointer',
              transition: 'all 0.12s',
              flexShrink: 0,
              height: 44,
            }}
          >
            {streaming ? '…' : 'Send'}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function MessageBubble({
  message,
  streaming,
}: {
  message: Message;
  streaming?: boolean;
}) {
  const isUser = message.role === 'user';

  if (isUser) {
    return (
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div
          style={{
            background: '#1a1714',
            color: '#fff',
            borderRadius: 12,
            borderBottomRightRadius: 4,
            padding: '12px 16px',
            fontSize: 14,
            lineHeight: 1.6,
            maxWidth: '75%',
            whiteSpace: 'pre-wrap',
          }}
        >
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: '#1a1714',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 14,
          flexShrink: 0,
          marginTop: 2,
        }}
      >
        🧠
      </div>
      <div
        style={{
          background: '#fff',
          border: '1px solid #e0dbd4',
          borderRadius: 12,
          borderTopLeftRadius: 4,
          padding: '14px 18px',
          fontSize: 14,
          lineHeight: 1.7,
          maxWidth: 'calc(100% - 40px)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          flex: 1,
          whiteSpace: 'pre-wrap',
          color: '#1a1714',
        }}
      >
        {message.content}
        {streaming && (
          <span
            style={{
              display: 'inline-block',
              width: 2,
              height: 14,
              background: '#1a1714',
              marginLeft: 2,
              verticalAlign: 'text-bottom',
              animation: 'pulse 0.8s infinite',
            }}
          />
        )}
      </div>
    </div>
  );
}
