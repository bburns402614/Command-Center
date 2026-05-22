'use client';

import { useState } from 'react';
import { Task, Filter, Priority, TaskStatus } from '@/lib/types';

const JIRA_BASE = 'https://ioufinancial.atlassian.net/browse';
const LINEAR_BASE = 'https://linear.app/ioufinancial/issue';

const STATUS_ORDER: TaskStatus[] = ['Not Started', 'In Progress', 'Blocked', 'Done'];

function cycleStatus(current: TaskStatus): TaskStatus {
  const idx = STATUS_ORDER.indexOf(current);
  return STATUS_ORDER[(idx + 1) % STATUS_ORDER.length];
}

function priorityColor(p: Priority): React.CSSProperties {
  if (p === '1-Critical') return { color: '#c0392b', background: '#fcebeb' };
  if (p === '2-Important') return { color: '#d4850a', background: '#fdf3e3' };
  return { color: '#6b6560', background: '#f0ede9' };
}

function priorityDotColor(p: Priority): string {
  if (p === '1-Critical') return '#c0392b';
  if (p === '2-Important') return '#d4850a';
  return '#a8a39e';
}

function statusColor(s: TaskStatus): React.CSSProperties {
  if (s === 'Done') return { color: '#2d7a4f', background: '#e4f5ec' };
  if (s === 'Blocked') return { color: '#c0392b', background: '#fcebeb' };
  if (s === 'In Progress') return { color: '#d4850a', background: '#fdf3e3' };
  return { color: '#6b6560', background: '#f0ede9' };
}

function priorityLabel(p: Priority) {
  if (p === '1-Critical') return 'Critical';
  if (p === '2-Important') return 'Important';
  return 'Normal';
}

const pill: React.CSSProperties = {
  display: 'inline-block',
  fontSize: 11,
  fontWeight: 600,
  padding: '3px 9px',
  borderRadius: 20,
  whiteSpace: 'nowrap',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '8px 12px',
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
  tasks: Task[];
  onUpdate: (t: Task) => void;
  onToast: (msg: string) => void;
}

export default function TasksView({ tasks, onUpdate, onToast }: Props) {
  const [filter, setFilter] = useState<Filter>('active');
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selected = selectedId != null ? (tasks.find((t) => t.id === selectedId) ?? null) : null;

  if (selected) {
    return (
      <TaskDetail
        task={selected}
        onBack={() => setSelectedId(null)}
        onUpdate={onUpdate}
        onToast={onToast}
      />
    );
  }

  const filtered = tasks.filter((t) => {
    if (filter === 'active') return t.status !== 'Done';
    if (filter === 'done') return t.status === 'Done';
    return true;
  });

  const activeCount = tasks.filter((t) => t.status !== 'Done').length;

  return (
    <div style={{ maxWidth: 820, margin: '32px auto', padding: '0 24px 64px' }}>
      <div
        style={{
          background: '#fff',
          borderRadius: 14,
          border: '1px solid #e0dbd4',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '16px 20px',
            borderBottom: '1px solid #e0dbd4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontWeight: 700, fontSize: 16, color: '#1a1714' }}>Tasks</span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: '#a8a39e',
                background: '#f0ede9',
                padding: '1px 7px',
                borderRadius: 10,
              }}
            >
              {activeCount} active
            </span>
          </div>

          {/* Active / All toggle */}
          <div
            style={{
              display: 'flex',
              gap: 2,
              background: '#f0ede9',
              borderRadius: 8,
              padding: 3,
            }}
          >
            {(['active', 'all', 'done'] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '5px 12px',
                  borderRadius: 6,
                  border: 'none',
                  background: filter === f ? '#fff' : 'transparent',
                  color: filter === f ? '#1a1714' : '#6b6560',
                  fontWeight: filter === f ? 600 : 500,
                  fontSize: 12,
                  cursor: 'pointer',
                  boxShadow: filter === f ? '0 1px 2px rgba(0,0,0,0.08)' : 'none',
                  transition: 'all 0.1s',
                }}
              >
                {f === 'active' ? 'Active' : f === 'all' ? 'All' : 'Done'}
              </button>
            ))}
          </div>
        </div>

        {/* Task rows */}
        <div>
          {filtered.map((task) => (
            <TaskRow
              key={task.id}
              task={task}
              onOpen={() => setSelectedId(task.id)}
              onCycleStatus={() => {
                const updated = { ...task, status: cycleStatus(task.status) };
                onUpdate(updated);
              }}
            />
          ))}

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '48px 0', color: '#a8a39e', fontSize: 14 }}>
              {filter === 'done' ? 'Nothing done yet' : 'No active tasks'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TaskRow({
  task,
  onOpen,
  onCycleStatus,
}: {
  task: Task;
  onOpen: () => void;
  onCycleStatus: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '13px 20px',
        borderBottom: '1px solid #f0ede9',
        background: hovered ? '#faf9f7' : '#fff',
        cursor: 'pointer',
        transition: 'background 0.08s',
      }}
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Priority dot */}
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: priorityDotColor(task.priority),
          flexShrink: 0,
        }}
        title={priorityLabel(task.priority)}
      />

      {/* Task name */}
      <span
        style={{
          flex: 1,
          fontSize: 14,
          fontWeight: 500,
          color: task.status === 'Done' ? '#a8a39e' : '#1a1714',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          textDecoration: task.status === 'Done' ? 'line-through' : 'none',
        }}
      >
        {task.name}
      </span>

      {/* Owner */}
      {task.owner && (
        <span style={{ fontSize: 12, color: '#a8a39e', flexShrink: 0 }}>{task.owner}</span>
      )}

      {/* Ticket badge */}
      {task.jiraKey && (
        <a
          href={`${JIRA_BASE}/${task.jiraKey}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          style={{ ...pill, background: '#e6eefb', color: '#0052cc', textDecoration: 'none', flexShrink: 0 }}
        >
          {task.jiraKey}
        </a>
      )}
      {!task.jiraKey && task.linearId && (
        <a
          href={`${LINEAR_BASE}/${task.linearId}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          style={{ ...pill, background: '#eeedfe', color: '#5e50a1', textDecoration: 'none', flexShrink: 0 }}
        >
          {task.linearId}
        </a>
      )}

      {/* Status pill — click to cycle */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onCycleStatus();
        }}
        title="Click to change status"
        style={{
          ...pill,
          ...statusColor(task.status),
          border: 'none',
          cursor: 'pointer',
          flexShrink: 0,
        }}
      >
        {task.status}
      </button>
    </div>
  );
}

function TaskDetail({
  task,
  onBack,
  onUpdate,
  onToast,
}: {
  task: Task;
  onBack: () => void;
  onUpdate: (t: Task) => void;
  onToast: (msg: string) => void;
}) {
  const [edited, setEdited] = useState<Task>(task);
  const [syncDest, setSyncDest] = useState<'jira' | 'linear'>('jira');
  const [syncing, setSyncing] = useState(false);

  const set = <K extends keyof Task>(key: K, value: Task[K]) => {
    const updated = { ...edited, [key]: value };
    setEdited(updated);
    onUpdate(updated);
  };

  const hasJira = Boolean(edited.jiraKey);
  const hasLinear = Boolean(edited.linearId);
  const ticketLabel =
    syncDest === 'jira'
      ? hasJira ? `Update ${edited.jiraKey}` : 'Create · DS'
      : hasLinear ? `Update ${edited.linearId}` : 'Create · IOU';

  const handleSync = async () => {
    setSyncing(true);
    try {
      const endpoint = syncDest === 'jira' ? '/api/jira' : '/api/linear';
      const hasTicket = syncDest === 'jira' ? hasJira : hasLinear;
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: hasTicket ? 'update' : 'create',
          ...(syncDest === 'jira' ? { issueKey: edited.jiraKey } : { linearId: edited.linearId }),
          name: edited.name,
          priority: edited.priority,
          status: edited.status,
          owner: edited.owner,
          notes: edited.notes,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(JSON.stringify(data.error));
      if (data.jiraKey) { const u = { ...edited, jiraKey: data.jiraKey as string }; setEdited(u); onUpdate(u); }
      else if (data.linearId) { const u = { ...edited, linearId: data.linearId as string }; setEdited(u); onUpdate(u); }
      onToast(hasTicket ? 'Synced successfully' : `Created ${data.jiraKey ?? data.linearId}`);
    } catch (err) {
      onToast('Sync failed — check console');
      console.error(err);
    } finally {
      setSyncing(false);
    }
  };

  const syncBtnStyle = (dest: 'jira' | 'linear'): React.CSSProperties => ({
    flex: 1,
    padding: '9px 0',
    borderRadius: 8,
    border: '1.5px solid',
    borderColor: syncDest === dest ? (dest === 'jira' ? '#0052cc' : '#5e50a1') : '#e0dbd4',
    background: syncDest === dest ? (dest === 'jira' ? '#e6eefb' : '#eeedfe') : '#fff',
    color: syncDest === dest ? (dest === 'jira' ? '#0052cc' : '#5e50a1') : '#6b6560',
    fontWeight: 600,
    fontSize: 13,
    cursor: 'pointer',
  });

  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '28px 24px' }}>
      <button
        onClick={onBack}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          padding: '6px 14px',
          marginBottom: 24,
          background: '#fff',
          border: '1px solid #e0dbd4',
          borderRadius: 8,
          cursor: 'pointer',
          color: '#6b6560',
          fontSize: 13,
          fontWeight: 500,
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        }}
      >
        ← Tasks
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 16 }}>
        <div
          style={{
            background: '#fff',
            border: '1px solid #e0dbd4',
            borderRadius: 14,
            padding: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          }}
        >
          <div>
            <label style={labelStyle}>TASK NAME</label>
            <input value={edited.name} onChange={(e) => set('name', e.target.value)} style={{ ...inputStyle, fontSize: 15, fontWeight: 500 }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div>
              <label style={labelStyle}>STATUS</label>
              <select value={edited.status} onChange={(e) => set('status', e.target.value as TaskStatus)} style={inputStyle}>
                {STATUS_ORDER.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>PRIORITY</label>
              <select value={edited.priority} onChange={(e) => set('priority', e.target.value as Priority)} style={inputStyle}>
                <option value="1-Critical">Critical</option>
                <option value="2-Important">Important</option>
                <option value="3-Normal">Normal</option>
              </select>
            </div>
          </div>
          <div>
            <label style={labelStyle}>OWNER</label>
            <input value={edited.owner} onChange={(e) => set('owner', e.target.value)} placeholder="Unassigned" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>NOTES</label>
            <textarea value={edited.notes} onChange={(e) => set('notes', e.target.value)} rows={4} placeholder="Add notes…" style={{ ...inputStyle, resize: 'vertical' }} />
          </div>
        </div>

        <div
          style={{
            background: '#fff',
            border: '1px solid #e0dbd4',
            borderRadius: 14,
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          }}
        >
          <div>
            <label style={labelStyle}>SYNC TO</label>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => setSyncDest('jira')} style={syncBtnStyle('jira')}>Jira</button>
              <button onClick={() => setSyncDest('linear')} style={syncBtnStyle('linear')}>Linear</button>
            </div>
          </div>
          <div style={{ paddingTop: 12, borderTop: '1px solid #e0dbd4', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 13, color: '#6b6560', fontWeight: 500 }}>{ticketLabel}</div>
            <button
              onClick={handleSync}
              disabled={syncing}
              style={{
                width: '100%', padding: '10px 0', borderRadius: 8, border: 'none',
                background: syncDest === 'jira' ? '#0052cc' : '#5e50a1',
                color: '#fff', fontWeight: 600, fontSize: 14,
                cursor: syncing ? 'not-allowed' : 'pointer', opacity: syncing ? 0.7 : 1,
              }}
            >
              {syncing ? 'Syncing…' : 'Sync now'}
            </button>
          </div>
          {(edited.jiraKey || edited.linearId) && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={labelStyle}>EXTERNAL LINKS</label>
              {edited.jiraKey && (
                <a href={`${JIRA_BASE}/${edited.jiraKey}`} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', borderRadius: 8, background: '#e6eefb', color: '#0052cc', textDecoration: 'none', fontSize: 13, fontWeight: 600 }}>
                  <span>{edited.jiraKey}</span><span>↗</span>
                </a>
              )}
              {edited.linearId && (
                <a href={`${LINEAR_BASE}/${edited.linearId}`} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', borderRadius: 8, background: '#eeedfe', color: '#5e50a1', textDecoration: 'none', fontSize: 13, fontWeight: 600 }}>
                  <span>{edited.linearId}</span><span>↗</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
