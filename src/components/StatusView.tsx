'use client';

import { useState } from 'react';
import { StatusUpdate } from '@/lib/types';

type OverallStatus = 'On Track' | 'At Risk' | 'Blocked';

const STATUS_COLORS: Record<OverallStatus, { color: string; background: string; emoji: string }> = {
  'On Track': { color: '#2d7a4f', background: '#e4f5ec', emoji: '✅' },
  'At Risk':  { color: '#d4850a', background: '#fdf3e3', emoji: '⚠️' },
  'Blocked':  { color: '#c0392b', background: '#fcebeb', emoji: '🚫' },
};

const pill: React.CSSProperties = {
  display: 'inline-block',
  fontSize: 11,
  fontWeight: 700,
  padding: '3px 10px',
  borderRadius: 20,
  whiteSpace: 'nowrap',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '9px 12px',
  border: '1px solid #e0dbd4',
  borderRadius: 7,
  fontSize: 14,
  color: '#1a1714',
  background: '#fff',
  outline: 'none',
};

const labelStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  color: '#6b6560',
  letterSpacing: '0.05em',
  display: 'block',
  marginBottom: 5,
};

const btnBase: React.CSSProperties = {
  padding: '9px 18px',
  borderRadius: 8,
  border: '1px solid #e0dbd4',
  background: '#fff',
  cursor: 'pointer',
  fontSize: 13,
  fontWeight: 600,
  color: '#1a1714',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function currentWeekTitle() {
  const d = new Date();
  return `Week of ${d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;
}

const SEED_UPDATES: StatusUpdate[] = [
  {
    id: 1,
    title: 'Week of May 15, 2026',
    overallStatus: 'On Track',
    done: 'Completed ECOA/FCRA process design and handed off to engineering. DS-1268 confirmation screen spec approved.',
    upNext: 'Finish NJ state rules configuration. Begin Lendflow PIF routing logic.',
    blockers: '',
    slackChannel: '#product',
    sentToSlack: true,
    createdAt: '2026-05-15T09:00:00Z',
  },
  {
    id: 2,
    title: 'Week of May 8, 2026',
    overallStatus: 'At Risk',
    done: 'DS-1268 confirmation screen spec drafted. Sentilink integration reviewed.',
    upNext: 'ECOA/FCRA process sign-off. DS-1141 institution_id Plaid work.',
    blockers: 'Waiting on Lendflow API docs before PIF routing can start.',
    slackChannel: '#product',
    sentToSlack: false,
    createdAt: '2026-05-08T09:00:00Z',
  },
];

const EMPTY_FORM = {
  title: '',
  overallStatus: 'On Track' as OverallStatus,
  done: '',
  upNext: '',
  blockers: '',
  slackChannel: '#product',
};

interface Props {
  onToast: (msg: string) => void;
}

export default function StatusView({ onToast }: Props) {
  const [updates, setUpdates] = useState<StatusUpdate[]>(SEED_UPDATES);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ ...EMPTY_FORM, title: currentWeekTitle() });
  const [sending, setSending] = useState(false);

  const set = <K extends keyof typeof EMPTY_FORM>(key: K, value: (typeof EMPTY_FORM)[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const buildSlackMessage = (f: typeof form) => {
    const { emoji } = STATUS_COLORS[f.overallStatus];
    return [
      `*Status Update — ${f.title}*`,
      `Status: ${emoji} ${f.overallStatus}`,
      '',
      `*✅ Done this week:*`,
      f.done,
      '',
      `*🔜 Up next:*`,
      f.upNext,
      ...(f.blockers ? ['', `*🚧 Blockers:*`, f.blockers] : []),
    ].join('\n');
  };

  const postUpdate = (sendToSlack = false) => {
    const newUpdate: StatusUpdate = {
      id: Date.now(),
      ...form,
      sentToSlack: false,
      createdAt: new Date().toISOString(),
    };
    setUpdates((prev) => [newUpdate, ...prev]);
    setShowForm(false);
    setForm({ ...EMPTY_FORM, title: currentWeekTitle() });

    if (sendToSlack) {
      sendSlack(newUpdate);
    } else {
      onToast('Update posted');
    }
  };

  const sendSlack = async (update: StatusUpdate) => {
    setSending(true);
    try {
      const message = buildSlackMessage({
        title: update.title,
        overallStatus: update.overallStatus,
        done: update.done,
        upNext: update.upNext,
        blockers: update.blockers,
        slackChannel: update.slackChannel,
      });
      const res = await fetch('/api/slack', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ channel: update.slackChannel, message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setUpdates((prev) =>
        prev.map((u) => (u.id === update.id ? { ...u, sentToSlack: true } : u))
      );
      onToast(`Sent to ${update.slackChannel}`);
    } catch (err) {
      onToast('Slack send failed — check SLACK_BOT_TOKEN env var');
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Dark header */}
      <div style={{ background: '#1a1714', padding: '36px 0 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div>
            <h1 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 32, fontWeight: 400, color: '#fff', margin: 0, lineHeight: 1.2 }}>
              Status Updates
            </h1>
            <p style={{ margin: '6px 0 0', color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
              Track weekly team health — IOU Financial
            </p>
          </div>
          <button
            onClick={() => setShowForm((v) => !v)}
            style={{ ...btnBase, background: showForm ? '#fff' : 'rgba(255,255,255,0.12)', color: showForm ? '#1a1714' : '#fff', border: '1px solid rgba(255,255,255,0.25)' }}
          >
            {showForm ? '✕ Cancel' : '+ New Update'}
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 820, margin: '0 auto', padding: '36px 24px 64px' }}>
        {/* Inline form */}
        {showForm && (
          <div style={{ background: '#fff', border: '1px solid #e0dbd4', borderRadius: 14, padding: 28, marginBottom: 32, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 18 }}>
              <div>
                <label style={labelStyle}>WEEK TITLE</label>
                <input value={form.title} onChange={(e) => set('title', e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>OVERALL STATUS</label>
                <select
                  value={form.overallStatus}
                  onChange={(e) => set('overallStatus', e.target.value as OverallStatus)}
                  style={inputStyle}
                >
                  {(['On Track', 'At Risk', 'Blocked'] as OverallStatus[]).map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 18 }}>
              <div>
                <label style={labelStyle}>✅ DONE THIS WEEK</label>
                <textarea
                  value={form.done}
                  onChange={(e) => set('done', e.target.value)}
                  rows={3}
                  placeholder="What was completed…"
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>
              <div>
                <label style={labelStyle}>🔜 UP NEXT</label>
                <textarea
                  value={form.upNext}
                  onChange={(e) => set('upNext', e.target.value)}
                  rows={3}
                  placeholder="What's coming up…"
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>
              <div>
                <label style={labelStyle}>🚧 BLOCKERS <span style={{ fontWeight: 400, color: '#a8a39e' }}>(optional)</span></label>
                <textarea
                  value={form.blockers}
                  onChange={(e) => set('blockers', e.target.value)}
                  rows={2}
                  placeholder="Any blockers or risks…"
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>
              <div>
                <label style={labelStyle}>SLACK CHANNEL</label>
                <input
                  value={form.slackChannel}
                  onChange={(e) => set('slackChannel', e.target.value)}
                  placeholder="#product"
                  style={{ ...inputStyle, maxWidth: 200 }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
              <button
                onClick={() => postUpdate(false)}
                disabled={!form.done.trim() || !form.upNext.trim()}
                style={{ ...btnBase, opacity: !form.done.trim() || !form.upNext.trim() ? 0.5 : 1 }}
              >
                Post update
              </button>
              <button
                onClick={() => postUpdate(true)}
                disabled={!form.done.trim() || !form.upNext.trim() || sending}
                style={{ ...btnBase, background: '#2d7a4f', color: '#fff', border: 'none', opacity: !form.done.trim() || !form.upNext.trim() ? 0.5 : 1 }}
              >
                {sending ? 'Sending…' : 'Send to Slack + Post'}
              </button>
            </div>
          </div>
        )}

        {/* Update history */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {updates.map((u) => {
            const sc = STATUS_COLORS[u.overallStatus];
            return (
              <div
                key={u.id}
                style={{ background: '#fff', border: '1px solid #e0dbd4', borderRadius: 14, padding: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 16, color: '#1a1714', marginBottom: 2 }}>{u.title}</div>
                    <div style={{ fontSize: 12, color: '#a8a39e' }}>{formatDate(u.createdAt)}</div>
                  </div>
                  <span style={{ ...pill, color: sc.color, background: sc.background }}>
                    {sc.emoji} {u.overallStatus}
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#a8a39e', letterSpacing: '0.05em', marginBottom: 4 }}>✅ DONE</div>
                    <div style={{ fontSize: 14, color: '#1a1714', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{u.done}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#a8a39e', letterSpacing: '0.05em', marginBottom: 4 }}>🔜 UP NEXT</div>
                    <div style={{ fontSize: 14, color: '#1a1714', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{u.upNext}</div>
                  </div>
                  {u.blockers && (
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: '#a8a39e', letterSpacing: '0.05em', marginBottom: 4 }}>🚧 BLOCKERS</div>
                      <div style={{ fontSize: 14, color: '#c0392b', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{u.blockers}</div>
                    </div>
                  )}
                </div>

                <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid #f0ede9', display: 'flex', justifyContent: 'flex-end' }}>
                  {u.sentToSlack ? (
                    <span style={{ fontSize: 12, fontWeight: 600, color: '#2d7a4f', display: 'flex', alignItems: 'center', gap: 5 }}>
                      ✓ Sent to {u.slackChannel}
                    </span>
                  ) : (
                    <button
                      onClick={() => sendSlack(u)}
                      disabled={sending}
                      style={{ ...btnBase, fontSize: 12, padding: '6px 14px', color: '#2d7a4f', borderColor: '#b5dfc8', background: '#e4f5ec' }}
                    >
                      Send to Slack →
                    </button>
                  )}
                </div>
              </div>
            );
          })}

          {updates.length === 0 && (
            <div style={{ textAlign: 'center', padding: '56px 0', color: '#a8a39e', fontSize: 14 }}>
              No updates yet — post your first one above
            </div>
          )}
        </div>
      </div>
    </>
  );
}
