'use client';

import { useState } from 'react';
import { Task, Filter, Priority, TaskStatus } from '@/lib/types';

const JIRA_BASE = 'https://ioufinancial.atlassian.net/browse';
const LINEAR_BASE = 'https://linear.app/ioufinancial/issue';

function priorityColor(p: Priority) {
  if (p === '1-Critical') return { color: '#c0392b', background: '#fcebeb' };
  if (p === '2-Important') return { color: '#d4850a', background: '#fdf3e3' };
  return { color: '#6b6560', background: '#f0ede9' };
}

function priorityLabel(p: Priority) {
  if (p === '1-Critical') return 'Critical';
  if (p === '2-Important') return 'Important';
  return 'Normal';
}

function statusColor(s: TaskStatus) {
  if (s === 'Done') return { color: '#2d7a4f', background: '#e4f5ec' };
  if (s === 'Blocked') return { color: '#c0392b', background: '#fcebeb' };
  if (s === 'In Progress') return { color: '#d4850a', background: '#fdf3e3' };
  return { color: '#6b6560', background: '#f0ede9' };
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
  const [filter, setFilter] = useState<Filter>('all');
  const [search, setSearch] = useState('');
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

  const counts = {
    all: tasks.length,
    active: tasks.filter((t) => t.status !== 'Done').length,
    done: tasks.filter((t) => t.status === 'Done').length,
  };

  const filtered = tasks
    .filter((t) => {
      if (filter === 'active') return t.status !== 'Done';
      if (filter === 'done') return t.status === 'Done';
      return true;
    })
    .filter((t) => t.name.toLowerCase().includes(search.toLowerCase()));

  const thStyle: React.CSSProperties = {
    fontSize: 11,
    fontWeight: 600,
    color: '#a8a39e',
    padding: '10px 16px',
    textAlign: 'left',
    borderBottom: '1px solid #e0dbd4',
    whiteSpace: 'nowrap',
    letterSpacing: '0.04em',
  };

  return (
    <div style={{ maxWidth: 960, margin: '32px auto', padding: '0 24px 48px' }}>
      <div
        style={{
          background: '#fff',
          borderRadius: 16,
          border: '1px solid #e0dbd4',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          overflow: 'hidden',
        }}
      >
        {/* Card header */}
        <div style={{ padding: '20px 24px 0' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              marginBottom: 14,
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#1a1714' }}>
                  Tasks
                </h2>
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
                  {tasks.length}
                </span>
              </div>
              <p style={{ margin: 0, fontSize: 13, color: '#a8a39e' }}>
                Manage all tasks within Command Center
              </p>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{ position: 'relative' }}>
                <span
                  style={{
                    position: 'absolute',
                    left: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#a8a39e',
                    fontSize: 13,
                    pointerEvents: 'none',
                  }}
                >
                  ⌕
                </span>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search tasks…"
                  style={{
                    padding: '7px 12px 7px 28px',
                    border: '1px solid #e0dbd4',
                    borderRadius: 8,
                    fontSize: 13,
                    color: '#1a1714',
                    background: '#faf9f7',
                    outline: 'none',
                    width: 180,
                  }}
                />
              </div>
              <button
                style={{
                  padding: '7px 14px',
                  border: '1px solid #e0dbd4',
                  borderRadius: 8,
                  background: '#faf9f7',
                  fontSize: 12,
                  fontWeight: 500,
                  color: '#6b6560',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                }}
              >
                ⚙ Filters
              </button>
            </div>
          </div>

          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: 2 }}>
            {(['all', 'active', 'done'] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '7px 14px',
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  fontSize: 13,
                  fontWeight: 500,
                  color: filter === f ? '#1a1714' : '#6b6560',
                  borderBottom: filter === f ? '2px solid #1a1714' : '2px solid transparent',
                  marginBottom: -1,
                }}
              >
                {f === 'all' ? 'All' : f === 'active' ? 'Active' : 'Done'}
                <span
                  style={{
                    marginLeft: 5,
                    fontSize: 11,
                    padding: '1px 6px',
                    borderRadius: 10,
                    background: '#f0ede9',
                    color: '#6b6560',
                  }}
                >
                  {counts[f]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ ...thStyle, width: '40%' }}>Task Name</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Priority</th>
              <th style={thStyle}>Owner</th>
              <th style={thStyle}>Ticket</th>
              <th style={{ ...thStyle, width: 48 }}></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((task) => (
              <tr
                key={task.id}
                onClick={() => setSelectedId(task.id)}
                style={{ cursor: 'pointer', borderBottom: '1px solid #f0ede9' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#faf9f7')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '')}
              >
                <td style={{ padding: '13px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span
                      style={{
                        display: 'inline-block',
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: priorityColor(task.priority).color,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: '#1a1714',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        maxWidth: 340,
                        display: 'block',
                      }}
                    >
                      {task.name}
                    </span>
                  </div>
                </td>
                <td style={{ padding: '13px 16px' }}>
                  <span style={{ ...pill, ...statusColor(task.status) }}>{task.status}</span>
                </td>
                <td style={{ padding: '13px 16px' }}>
                  <span style={{ ...pill, ...priorityColor(task.priority) }}>
                    {priorityLabel(task.priority)}
                  </span>
                </td>
                <td style={{ padding: '13px 16px', fontSize: 13, color: '#6b6560' }}>
                  {task.owner || '—'}
                </td>
                <td style={{ padding: '13px 16px' }}>
                  {task.jiraKey ? (
                    <a
                      href={`${JIRA_BASE}/${task.jiraKey}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{ ...pill, background: '#e6eefb', color: '#0052cc', textDecoration: 'none' }}
                    >
                      {task.jiraKey}
                    </a>
                  ) : task.linearId ? (
                    <a
                      href={`${LINEAR_BASE}/${task.linearId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{ ...pill, background: '#eeedfe', color: '#5e50a1', textDecoration: 'none' }}
                    >
                      {task.linearId}
                    </a>
                  ) : (
                    <span style={{ color: '#e0dbd4', fontSize: 13 }}>—</span>
                  )}
                </td>
                <td style={{ padding: '13px 12px', textAlign: 'center' }}>
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelectedId(task.id); }}
                    style={{
                      border: 'none',
                      background: 'transparent',
                      cursor: 'pointer',
                      color: '#a8a39e',
                      fontSize: 16,
                      letterSpacing: 1,
                      padding: '2px 4px',
                      borderRadius: 4,
                    }}
                  >
                    ···
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '48px 0', color: '#a8a39e', fontSize: 14 }}>
                  {search ? `No tasks matching "${search}"` : 'No tasks'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
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
    <div style={{ maxWidth: 880, margin: '0 auto', padding: '36px 24px' }}>
      <button
        onClick={onBack}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          padding: '6px 14px',
          marginBottom: 28,
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
        ← All tasks
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 20 }}>
        <div
          style={{
            background: '#fff',
            border: '1px solid #e0dbd4',
            borderRadius: 14,
            padding: 28,
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          }}
        >
          <div>
            <label style={labelStyle}>TASK NAME</label>
            <input value={edited.name} onChange={(e) => set('name', e.target.value)} style={{ ...inputStyle, fontSize: 15, fontWeight: 500 }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div>
              <label style={labelStyle}>STATUS</label>
              <select value={edited.status} onChange={(e) => set('status', e.target.value as TaskStatus)} style={inputStyle}>
                {(['Not Started', 'In Progress', 'Blocked', 'Done'] as TaskStatus[]).map((s) => <option key={s}>{s}</option>)}
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
            padding: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
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
          <div style={{ padding: '14px 0', borderTop: '1px solid #e0dbd4', borderBottom: '1px solid #e0dbd4', display: 'flex', flexDirection: 'column', gap: 10 }}>
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
