'use client';

import { useState } from 'react';
import { Epic, BacklogItem, Quarter, EpicStatus, Feature } from '@/lib/types';
import { initialEpics, initialBacklog } from '@/lib/data';

const JIRA_BASE = 'https://ioufinancial.atlassian.net/browse';
const LINEAR_BASE = 'https://linear.app/ioufinancial/issue';

const QUARTERS: Quarter[] = ['Q2 2026', 'Q3 2026', 'Q4 2026'];
const QUARTER_LABELS: Record<Quarter, string> = {
  'Q2 2026': 'Apr – Jun 2026',
  'Q3 2026': 'Jul – Sep 2026',
  'Q4 2026': 'Oct – Dec 2026',
};
const QUARTER_COLORS: Record<Quarter, { header: string; headerBg: string; border: string }> = {
  'Q2 2026': { header: '#c0392b', headerBg: '#fcebeb', border: '#f5c6c6' },
  'Q3 2026': { header: '#d4850a', headerBg: '#fdf3e3', border: '#f5ddb5' },
  'Q4 2026': { header: '#2d7a4f', headerBg: '#e4f5ec', border: '#b5dfc8' },
};

const EPIC_STATUS_COLORS: Record<EpicStatus, React.CSSProperties> = {
  Planned: { color: '#6b6560', background: '#f0ede9' },
  'In Progress': { color: '#d4850a', background: '#fdf3e3' },
  'In Review': { color: '#0052cc', background: '#e6eefb' },
  Done: { color: '#2d7a4f', background: '#e4f5ec' },
};

const pill: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  padding: '2px 8px',
  borderRadius: 20,
  whiteSpace: 'nowrap',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '8px 11px',
  border: '1px solid #e0dbd4',
  borderRadius: 7,
  fontSize: 13,
  color: '#1a1714',
  background: '#fff',
  outline: 'none',
};

const btnBase: React.CSSProperties = {
  padding: '7px 14px',
  borderRadius: 8,
  border: '1px solid #e0dbd4',
  background: '#fff',
  cursor: 'pointer',
  fontSize: 13,
  fontWeight: 500,
  color: '#1a1714',
};

interface Props {
  onToast: (msg: string) => void;
}

export default function RoadmapView({ onToast }: Props) {
  const [epics, setEpics] = useState<Epic[]>(initialEpics);
  const [backlog, setBacklog] = useState<BacklogItem[]>(initialBacklog);
  const [showEpicForm, setShowEpicForm] = useState(false);
  const [showIdeaForm, setShowIdeaForm] = useState(false);

  const [epicForm, setEpicForm] = useState({
    quarter: 'Q2 2026' as Quarter,
    name: '',
    status: 'Planned' as EpicStatus,
    features: [{ name: '', detail: '' }] as { name: string; detail: string }[],
  });

  const [ideaForm, setIdeaForm] = useState({ name: '', detail: '' });

  const saveEpic = () => {
    if (!epicForm.name.trim()) return;
    setEpics((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: epicForm.name,
        status: epicForm.status,
        quarter: epicForm.quarter,
        features: epicForm.features.filter((f) => f.name.trim()),
      },
    ]);
    setEpicForm({ quarter: 'Q2 2026', name: '', status: 'Planned', features: [{ name: '', detail: '' }] });
    setShowEpicForm(false);
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
    setEpicForm({
      quarter: 'Q2 2026',
      name: item.name,
      status: 'Planned',
      features: [{ name: item.name, detail: item.detail }],
    });
    setShowEpicForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addFeatureRow = () =>
    setEpicForm((f) => ({ ...f, features: [...f.features, { name: '', detail: '' }] }));

  const updateFeature = (i: number, key: 'name' | 'detail', val: string) =>
    setEpicForm((f) => ({
      ...f,
      features: f.features.map((feat, idx) => (idx === i ? { ...feat, [key]: val } : feat)),
    }));

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '36px 24px 64px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 32 }}>
        <div>
          <h1
            style={{
              fontFamily: 'var(--font-dm-serif)',
              fontSize: 32,
              fontWeight: 400,
              color: '#1a1714',
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Product Roadmap
          </h1>
          <p style={{ margin: '6px 0 0', color: '#6b6560', fontSize: 14 }}>
            Quarterly epics and features — IOU Financial
          </p>
        </div>
        <button
          onClick={() => setShowEpicForm((v) => !v)}
          style={{
            ...btnBase,
            background: showEpicForm ? '#1a1714' : '#fff',
            color: showEpicForm ? '#fff' : '#1a1714',
            border: '1px solid #1a1714',
            fontWeight: 600,
          }}
        >
          {showEpicForm ? '✕ Cancel' : '+ Add epic'}
        </button>
      </div>

      {/* Epic form */}
      {showEpicForm && (
        <div
          style={{
            background: '#fff',
            border: '1px solid #e0dbd4',
            borderRadius: 14,
            padding: 24,
            marginBottom: 28,
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, marginBottom: 16 }}>
            <div>
              <label style={{ fontSize: 11, fontWeight: 600, color: '#6b6560', letterSpacing: '0.05em', display: 'block', marginBottom: 5 }}>QUARTER</label>
              <select
                value={epicForm.quarter}
                onChange={(e) => setEpicForm((f) => ({ ...f, quarter: e.target.value as Quarter }))}
                style={inputStyle}
              >
                {QUARTERS.map((q) => <option key={q}>{q}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: 11, fontWeight: 600, color: '#6b6560', letterSpacing: '0.05em', display: 'block', marginBottom: 5 }}>EPIC NAME</label>
              <input
                value={epicForm.name}
                onChange={(e) => setEpicForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="Epic name"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={{ fontSize: 11, fontWeight: 600, color: '#6b6560', letterSpacing: '0.05em', display: 'block', marginBottom: 5 }}>STATUS</label>
              <select
                value={epicForm.status}
                onChange={(e) => setEpicForm((f) => ({ ...f, status: e.target.value as EpicStatus }))}
                style={inputStyle}
              >
                {(['Planned', 'In Progress', 'In Review', 'Done'] as EpicStatus[]).map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ marginBottom: 12 }}>
            <label style={{ fontSize: 11, fontWeight: 600, color: '#6b6560', letterSpacing: '0.05em', display: 'block', marginBottom: 8 }}>FEATURES</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {epicForm.features.map((feat, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  <input
                    value={feat.name}
                    onChange={(e) => updateFeature(i, 'name', e.target.value)}
                    placeholder="Feature name"
                    style={inputStyle}
                  />
                  <input
                    value={feat.detail}
                    onChange={(e) => updateFeature(i, 'detail', e.target.value)}
                    placeholder="One-line detail"
                    style={inputStyle}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={addFeatureRow}
              style={{ ...btnBase, marginTop: 8, fontSize: 12, color: '#6b6560' }}
            >
              + Add feature
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={saveEpic}
              style={{ ...btnBase, background: '#1a1714', color: '#fff', border: 'none', fontWeight: 600 }}
            >
              Save epic
            </button>
          </div>
        </div>
      )}

      {/* Quarter columns */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginBottom: 48 }}>
        {QUARTERS.map((q) => {
          const { header, headerBg, border } = QUARTER_COLORS[q];
          const qEpics = epics.filter((e) => e.quarter === q);
          return (
            <div key={q} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div
                style={{
                  padding: '10px 14px',
                  borderRadius: 10,
                  background: headerBg,
                  border: `1px solid ${border}`,
                }}
              >
                <div style={{ fontWeight: 700, fontSize: 14, color: header }}>{q}</div>
                <div style={{ fontSize: 12, color: header, opacity: 0.8, marginTop: 1 }}>
                  {QUARTER_LABELS[q]}
                </div>
              </div>

              {qEpics.map((epic) => (
                <EpicCard key={epic.id} epic={epic} />
              ))}

              {qEpics.length === 0 && (
                <div style={{ textAlign: 'center', padding: '24px 0', color: '#a8a39e', fontSize: 13 }}>
                  No epics
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Backlog */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 600, color: '#1a1714', margin: 0 }}>Backlog</h2>
            <p style={{ margin: '4px 0 0', color: '#6b6560', fontSize: 13 }}>
              Ideas and future work — not yet scheduled
            </p>
          </div>
          <button
            onClick={() => setShowIdeaForm((v) => !v)}
            style={{ ...btnBase, fontWeight: 600 }}
          >
            {showIdeaForm ? '✕ Cancel' : '+ Add idea'}
          </button>
        </div>

        {showIdeaForm && (
          <div
            style={{
              background: '#fff',
              border: '1px solid #e0dbd4',
              borderRadius: 10,
              padding: 16,
              marginBottom: 12,
              display: 'flex',
              gap: 10,
              alignItems: 'flex-end',
            }}
          >
            <div style={{ flex: 1 }}>
              <input
                value={ideaForm.name}
                onChange={(e) => setIdeaForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="Idea name"
                style={{ ...inputStyle, marginBottom: 8 }}
              />
              <input
                value={ideaForm.detail}
                onChange={(e) => setIdeaForm((f) => ({ ...f, detail: e.target.value }))}
                placeholder="One-line detail"
                style={inputStyle}
              />
            </div>
            <button
              onClick={saveIdea}
              style={{ ...btnBase, background: '#1a1714', color: '#fff', border: 'none', fontWeight: 600, whiteSpace: 'nowrap' }}
            >
              Save idea
            </button>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {backlog.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                background: '#fff',
                border: '1px solid #e0dbd4',
                borderRadius: 10,
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                gap: 12,
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 500, color: '#1a1714', fontSize: 14 }}>• {item.name}</div>
                {item.detail && (
                  <div style={{ color: '#6b6560', fontSize: 13, marginTop: 2 }}>{item.detail}</div>
                )}
              </div>
              <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                <button
                  onClick={() => promoteToRoadmap(item)}
                  style={{ ...btnBase, fontSize: 12, color: '#2d7a4f', borderColor: '#b5dfc8', background: '#e4f5ec' }}
                >
                  → Roadmap
                </button>
                <button
                  onClick={() => setBacklog((prev) => prev.filter((b) => b.id !== item.id))}
                  style={{ ...btnBase, fontSize: 13, color: '#a8a39e', padding: '7px 10px' }}
                >
                  ×
                </button>
              </div>
            </div>
          ))}
          {backlog.length === 0 && (
            <div style={{ textAlign: 'center', padding: '32px 0', color: '#a8a39e', fontSize: 14 }}>
              Backlog is empty
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function EpicCard({ epic }: { epic: Epic }) {
  const JIRA_BASE_URL = JIRA_BASE;
  const LINEAR_BASE_URL = LINEAR_BASE;

  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #e0dbd4',
        borderRadius: 10,
        padding: '14px 16px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <span style={{ fontWeight: 600, fontSize: 13, color: '#1a1714' }}>{epic.name}</span>
        <span style={{ ...pill, ...EPIC_STATUS_COLORS[epic.status] }}>{epic.status}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {epic.features.map((f: Feature, i: number) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, paddingLeft: 8 }}>
            <span style={{ color: '#a8a39e', fontSize: 12, flexShrink: 0 }}>·</span>
            <span style={{ fontSize: 12, color: '#6b6560', flex: 1 }}>
              {f.name}
              {f.detail ? ` · ${f.detail}` : ''}
            </span>
            {f.jiraKey && (
              <a
                href={`${JIRA_BASE_URL}/${f.jiraKey}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  padding: '1px 6px',
                  borderRadius: 20,
                  background: '#e6eefb',
                  color: '#0052cc',
                  textDecoration: 'none',
                  flexShrink: 0,
                }}
              >
                {f.jiraKey}
              </a>
            )}
            {f.linearId && (
              <a
                href={`${LINEAR_BASE_URL}/${f.linearId}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  padding: '1px 6px',
                  borderRadius: 20,
                  background: '#eeedfe',
                  color: '#5e50a1',
                  textDecoration: 'none',
                  flexShrink: 0,
                }}
              >
                {f.linearId}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
