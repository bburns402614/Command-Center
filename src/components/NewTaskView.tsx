'use client';

import { useState } from 'react';
import { Task, Priority, TaskStatus } from '@/lib/types';

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

interface Props {
  onCreate: (task: Omit<Task, 'id'>) => void;
  onToast: (msg: string) => void;
}

const EMPTY = {
  name: '',
  priority: '2-Important' as Priority,
  status: 'Not Started' as TaskStatus,
  owner: '',
  notes: '',
};

export default function NewTaskView({ onCreate, onToast }: Props) {
  const [form, setForm] = useState(EMPTY);
  const [dest, setDest] = useState<'jira' | 'linear' | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const set = <K extends keyof typeof EMPTY>(key: K, value: (typeof EMPTY)[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const submitLabel =
    dest === 'jira' ? 'Create in Jira' : dest === 'linear' ? 'Create in Linear' : 'Create task';

  const handleSubmit = async () => {
    if (!form.name.trim()) return;
    setSubmitting(true);
    try {
      let extra: Partial<Task> = {};

      if (dest) {
        const endpoint = dest === 'jira' ? '/api/jira' : '/api/linear';
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'create', ...form }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(JSON.stringify(data.error));
        if (data.jiraKey) extra = { jiraKey: data.jiraKey };
        else if (data.linearId) extra = { linearId: data.linearId };
      }

      onCreate({ ...form, ...extra });
      onToast(
        dest
          ? `Created ${extra.jiraKey ?? extra.linearId ?? 'task'} successfully`
          : 'Task added'
      );
      setForm(EMPTY);
      setDest(null);
    } catch (err) {
      onToast('Failed to create — check console');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const destBtn = (d: 'jira' | 'linear'): React.CSSProperties => ({
    flex: 1,
    padding: '11px 0',
    borderRadius: 8,
    border: '1.5px solid',
    borderColor: dest === d ? (d === 'jira' ? '#0052cc' : '#5e50a1') : '#e0dbd4',
    background: dest === d ? (d === 'jira' ? '#e6eefb' : '#eeedfe') : '#fff',
    color: dest === d ? (d === 'jira' ? '#0052cc' : '#5e50a1') : '#6b6560',
    fontWeight: 600,
    fontSize: 14,
    cursor: 'pointer',
  });

  return (
    <div style={{ maxWidth: 560, margin: '0 auto', padding: '48px 24px' }}>
      <h1
        style={{
          fontFamily: 'var(--font-dm-serif)',
          fontSize: 28,
          fontWeight: 400,
          color: '#1a1714',
          margin: '0 0 28px',
        }}
      >
        New Task
      </h1>

      <div
        style={{
          background: '#fff',
          border: '1px solid #e0dbd4',
          borderRadius: 14,
          padding: 28,
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
        }}
      >
        <div>
          <label style={labelStyle}>TASK NAME</label>
          <input
            value={form.name}
            onChange={(e) => set('name', e.target.value)}
            placeholder="What needs to be done?"
            style={{ ...inputStyle, fontSize: 15, fontWeight: 500 }}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <div>
            <label style={labelStyle}>PRIORITY</label>
            <select
              value={form.priority}
              onChange={(e) => set('priority', e.target.value as Priority)}
              style={inputStyle}
            >
              <option value="1-Critical">1 — Critical</option>
              <option value="2-Important">2 — Important</option>
              <option value="3-Normal">3 — Normal</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>STATUS</label>
            <select
              value={form.status}
              onChange={(e) => set('status', e.target.value as TaskStatus)}
              style={inputStyle}
            >
              {(['Not Started', 'In Progress', 'Blocked', 'Done'] as TaskStatus[]).map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label style={labelStyle}>OWNER</label>
          <input
            value={form.owner}
            onChange={(e) => set('owner', e.target.value)}
            placeholder="Who owns this?"
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>NOTES</label>
          <textarea
            value={form.notes}
            onChange={(e) => set('notes', e.target.value)}
            rows={3}
            placeholder="Additional context…"
            style={{ ...inputStyle, resize: 'vertical' }}
          />
        </div>

        <div>
          <label style={labelStyle}>SEND TO (OPTIONAL)</label>
          <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={() => setDest(dest === 'jira' ? null : 'jira')} style={destBtn('jira')}>
              Jira · ioufinancial DS
            </button>
            <button
              onClick={() => setDest(dest === 'linear' ? null : 'linear')}
              style={destBtn('linear')}
            >
              Linear · IOU Support
            </button>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={submitting || !form.name.trim()}
          style={{
            width: '100%',
            padding: '12px 0',
            borderRadius: 8,
            border: 'none',
            background:
              dest === 'jira' ? '#0052cc' : dest === 'linear' ? '#5e50a1' : '#1a1714',
            color: '#fff',
            fontWeight: 600,
            fontSize: 15,
            cursor: submitting || !form.name.trim() ? 'not-allowed' : 'pointer',
            opacity: submitting || !form.name.trim() ? 0.6 : 1,
          }}
        >
          {submitting ? 'Creating…' : submitLabel}
        </button>
      </div>
    </div>
  );
}
