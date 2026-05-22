'use client';

import { useState } from 'react';
import { Epic, BacklogItem, Quarter, EpicStatus, Feature } from '@/lib/types';
import { initialEpics, initialBacklog } from '@/lib/data';

const JIRA_BASE = 'https://ioufinancial.atlassian.net/browse';
const LINEAR_BASE = 'https://linear.app/ioufinancial/issue';

const QUARTERS: Quarter[] = ['Q2 2026', 'Q3 2026', 'Q4 2026'];

const QUARTER_META: Record<Quarter, { label: string; color: string; bg: string; border: string }> = {
  'Q2 2026': { label: 'Apr – Jun', color: '#c0392b', bg: '#fcebeb', border: '#f5c6c6' },
  'Q3 2026': { label: 'Jul – Sep', color: '#d4850a', bg: '#fdf3e3', border: '#f5ddb5' },
  'Q4 2026': { label: 'Oct – Dec', color: '#2d7a4f', bg: '#e4f5ec', border: '#b5dfc8' },
};

const EPIC_STATUS_COLORS: Record<EpicStatus, React.CSSProperties> = {
  Planned: { color: '#6b6560', background: '#f0ede9' },
  'In Progress': { color: '#d4850a', background: '#fdf3e3' },
  'In Review': { color: '#0052cc', background: '#e6eefb' },
  Done: { color: '#2d7a4f', background: '#e4f5ec' },
};

const pill: React.CSSProperties = {
  fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 20, whiteSpace: 'nowrap',
};

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '8px 11px', border: '1px solid #e0dbd4',
  borderRadius: 7, fontSize: 13, color: '#1a1714', background: '#fff', outline: 'none',
};

interface Props {
  onToast: (msg: string) => void;
}

export default function RoadmapView({ onToast }: Props) {
  const [epics, setEpics] = useState<Epic[]>(initialEpics);
  const [backlog, setBacklog] = useState<BacklogItem[]>(initialBacklog);

  // Which quarter's inline form is open (null = none)
  const [addingToQuarter, setAddingToQuarter] = useState<Quarter | null>(null);
  const [epicName, setEpicName] = useState('');
  const [epicStatus, setEpicStatus] = useState<EpicStatus>('Planned');

  const [showIdeaForm, setShowIdeaForm] = useState(false);
  const [ideaForm, setIdeaForm] = useState({ name: '', detail: '' });

  const saveEpic = (quarter: Quarter) => {
    if (!epicName.trim()) return;
    setEpics((prev) => [
      ...prev,
      { id: Date.now(), name: epicName.trim(), status: epicStatus, quarter, features: [] },
    ]);
    setAddingToQuarter(null);
    setEpicName('');
    setEpicStatus('Planned');
    onToast('Epic added');
  };

  const saveIdea = () => {
    if (!ideaForm.name.trim()) return;
    setBacklog((prev) => [...prev, { id: Date.now(), ...ideaForm }]);
    setIdeaForm({ name: '', detail: '' });
    setShowIdeaForm(false);
  };

  const promoteToRoadmap = (item: BacklogItem) => {
    setBacklog((prev) => prev.filter((b) => b.id !== item.id));
    setEpicName(item.name);
    setEpicStatus('Planned');
    setAddingToQuarter('Q2 2026');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Dark header */}
      <div style={{ background: '#1a1714', padding: '36px 0 32px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 24px' }}>
          <h1 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 32, fontWeight: 400, color: '#fff', margin: 0, lineHeight: 1.2 }}>
            Product Roadmap
          </h1>
          <p style={{ margin: '6px 0 0', color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
            Quarterly epics and features — IOU Financial
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '36px 24px 64px' }}>

        {/* 3-column quarter grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginBottom: 48 }}>
          {QUARTERS.map((q) => {
            const meta = QUARTER_META[q];
            const qEpics = epics.filter((e) => e.quarter === q);
            const isAdding = addingToQuarter === q;

            return (
              <div key={q}>
                {/* Column header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: 12,
                        fontWeight: 700,
                        color: meta.color,
                        background: meta.bg,
                        border: `1px solid ${meta.border}`,
                        borderRadius: 6,
                        padding: '3px 9px',
                      }}
                    >
                      {q}
                    </span>
                    <span style={{ fontSize: 12, color: '#a8a39e' }}>{meta.label}</span>
                  </div>
                  <button
                    onClick={() => {
                      if (isAdding) {
                        setAddingToQuarter(null);
                      } else {
                        setAddingToQuarter(q);
                        setEpicName('');
                        setEpicStatus('Planned');
                      }
                    }}
                    style={{
                      padding: '3px 10px',
                      border: '1px solid #e0dbd4',
                      borderRadius: 6,
                      background: isAdding ? '#f0ede9' : '#fff',
                      color: '#6b6560',
                      fontSize: 13,
                      cursor: 'pointer',
                      fontWeight: 500,
                    }}
                  >
                    {isAdding ? '✕' : '+'}
                  </button>
                </div>

                {/* Inline add form */}
                {isAdding && (
                  <div
                    style={{
                      background: '#fff',
                      border: '1px solid #e0dbd4',
                      borderRadius: 10,
                      padding: 14,
                      marginBottom: 10,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    }}
                  >
                    <input
                      autoFocus
                      value={epicName}
                      onChange={(e) => setEpicName(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') saveEpic(q);
                        if (e.key === 'Escape') setAddingToQuarter(null);
                      }}
                      placeholder="Epic name…"
                      style={{ ...inputStyle, marginBottom: 8 }}
                    />
                    <select
                      value={epicStatus}
                      onChange={(e) => setEpicStatus(e.target.value as EpicStatus)}
                      style={{ ...inputStyle, marginBottom: 10 }}
                    >
                      {(['Planned', 'In Progress', 'In Review', 'Done'] as EpicStatus[]).map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button
                        onClick={() => saveEpic(q)}
                        disabled={!epicName.trim()}
                        style={{
                          flex: 1,
                          padding: '8px 0',
                          borderRadius: 7,
                          border: 'none',
                          background: '#1a1714',
                          color: '#fff',
                          fontWeight: 600,
                          fontSize: 13,
                          cursor: epicName.trim() ? 'pointer' : 'not-allowed',
                          opacity: epicName.trim() ? 1 : 0.4,
                        }}
                      >
                        Add epic
                      </button>
                      <button
                        onClick={() => setAddingToQuarter(null)}
                        style={{
                          padding: '8px 12px',
                          borderRadius: 7,
                          border: '1px solid #e0dbd4',
                          background: '#fff',
                          color: '#6b6560',
                          fontSize: 13,
                          cursor: 'pointer',
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {/* Epic cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {qEpics.map((epic) => (
                    <EpicCard key={epic.id} epic={epic} />
                  ))}
                  {qEpics.length === 0 && !isAdding && (
                    <div
                      style={{
                        padding: '28px 0',
                        textAlign: 'center',
                        color: '#a8a39e',
                        fontSize: 13,
                        border: '1.5px dashed #e0dbd4',
                        borderRadius: 10,
                      }}
                    >
                      No epics yet
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Backlog */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <div>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: '#1a1714', margin: 0 }}>Backlog</h2>
              <p style={{ margin: '3px 0 0', color: '#a8a39e', fontSize: 13 }}>Ideas not yet scheduled</p>
            </div>
            <button
              onClick={() => setShowIdeaForm((v) => !v)}
              style={{
                padding: '6px 14px',
                border: '1px solid #e0dbd4',
                borderRadius: 8,
                background: showIdeaForm ? '#f0ede9' : '#fff',
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: 500,
                color: '#1a1714',
              }}
            >
              {showIdeaForm ? '✕ Cancel' : '+ Add idea'}
            </button>
          </div>

          {showIdeaForm && (
            <div style={{ background: '#fff', border: '1px solid #e0dbd4', borderRadius: 10, padding: 14, marginBottom: 10, display: 'flex', gap: 10, alignItems: 'flex-end', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ flex: 1, display: 'flex', gap: 8 }}>
                <input
                  autoFocus
                  value={ideaForm.name}
                  onChange={(e) => setIdeaForm((f) => ({ ...f, name: e.target.value }))}
                  onKeyDown={(e) => e.key === 'Enter' && saveIdea()}
                  placeholder="Idea name"
                  style={{ ...inputStyle, flex: 1 }}
                />
                <input
                  value={ideaForm.detail}
                  onChange={(e) => setIdeaForm((f) => ({ ...f, detail: e.target.value }))}
                  placeholder="One-line detail (optional)"
                  style={{ ...inputStyle, flex: 1.5 }}
                />
              </div>
              <button
                onClick={saveIdea}
                style={{
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: 8,
                  background: '#1a1714',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 13,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                Save
              </button>
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {backlog.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '11px 16px',
                  background: '#fff',
                  border: '1px solid #e0dbd4',
                  borderRadius: 9,
                  gap: 12,
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ fontWeight: 500, color: '#1a1714', fontSize: 14 }}>{item.name}</span>
                  {item.detail && <span style={{ color: '#a8a39e', fontSize: 13, marginLeft: 8 }}>· {item.detail}</span>}
                </div>
                <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
                  <button
                    onClick={() => promoteToRoadmap(item)}
                    style={{
                      padding: '5px 12px',
                      border: '1px solid #b5dfc8',
                      borderRadius: 7,
                      background: '#e4f5ec',
                      color: '#2d7a4f',
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    → Roadmap
                  </button>
                  <button
                    onClick={() => setBacklog((prev) => prev.filter((b) => b.id !== item.id))}
                    style={{
                      padding: '5px 9px',
                      border: '1px solid #e0dbd4',
                      borderRadius: 7,
                      background: '#fff',
                      color: '#a8a39e',
                      fontSize: 14,
                      cursor: 'pointer',
                    }}
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
            {backlog.length === 0 && (
              <div style={{ textAlign: 'center', padding: '28px 0', color: '#a8a39e', fontSize: 14 }}>
                Backlog is empty
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function EpicCard({ epic }: { epic: Epic }) {
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #e0dbd4',
        borderRadius: 10,
        padding: '12px 14px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, marginBottom: epic.features.length ? 8 : 0 }}>
        <span style={{ fontWeight: 600, fontSize: 13, color: '#1a1714', lineHeight: 1.35 }}>{epic.name}</span>
        <span style={{ ...pill, ...EPIC_STATUS_COLORS[epic.status], flexShrink: 0 }}>{epic.status}</span>
      </div>
      {epic.features.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {epic.features.map((f: Feature, i: number) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{ color: '#a8a39e', fontSize: 11, flexShrink: 0 }}>·</span>
              <span style={{ fontSize: 12, color: '#6b6560', flex: 1, lineHeight: 1.4 }}>
                {f.name}{f.detail ? ` · ${f.detail}` : ''}
              </span>
              {f.jiraKey && (
                <a href={`${JIRA_BASE}/${f.jiraKey}`} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 10, fontWeight: 700, padding: '1px 5px', borderRadius: 20, background: '#e6eefb', color: '#0052cc', textDecoration: 'none', flexShrink: 0 }}>
                  {f.jiraKey}
                </a>
              )}
              {f.linearId && (
                <a href={`${LINEAR_BASE}/${f.linearId}`} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 10, fontWeight: 700, padding: '1px 5px', borderRadius: 20, background: '#eeedfe', color: '#5e50a1', textDecoration: 'none', flexShrink: 0 }}>
                  {f.linearId}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
