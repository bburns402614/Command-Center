'use client';

import { useState } from 'react';
import { Task, Priority, TaskStatus } from '@/lib/types';

const JIRA_BASE   = 'https://ioufinancial.atlassian.net/browse';
const LINEAR_BASE = 'https://linear.app/ioufinancial/issue';

const STATUS_ORDER: TaskStatus[] = ['Not Started', 'In Progress', 'Blocked', 'Done'];

function cycleStatus(current: TaskStatus): TaskStatus {
  const idx = STATUS_ORDER.indexOf(current);
  return STATUS_ORDER[(idx + 1) % STATUS_ORDER.length];
}

function priorityColor(p: Priority) {
  if (p === '1-Critical') return { dot: '#e03131', pill: '#fff0f0', text: '#c92a2a' };
  if (p === '2-Important') return { dot: '#f08c00', pill: '#fff9db', text: '#e67700' };
  return { dot: '#adb5bd', pill: '#f1f3f5', text: '#868e96' };
}

function priorityLabel(p: Priority) {
  if (p === '1-Critical') return 'Critical';
  if (p === '2-Important') return 'Important';
  return 'Normal';
}

function statusColor(s: TaskStatus) {
  if (s === 'Done')        return { color: '#2f9e44', bg: '#ebfbee' };
  if (s === 'In Progress') return { color: '#e67700', bg: '#fff9db' };
  if (s === 'Blocked')     return { color: '#c92a2a', bg: '#fff0f0' };
  return                          { color: '#868e96', bg: '#f1f3f5' };
}

const SECTIONS: { id: string; label: string; filter: (t: Task) => boolean }[] = [
  { id: 'in-progress', label: 'In Progress', filter: (t) => t.status === 'In Progress' },
  { id: 'blocked',     label: 'Blocked',     filter: (t) => t.status === 'Blocked' },
  { id: 'not-started', label: 'Not Started', filter: (t) => t.status === 'Not Started' },
  { id: 'done',        label: 'Done',        filter: (t) => t.status === 'Done' },
];

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '8px 12px',
  border: '1px solid #e9ecef', borderRadius: 7,
  fontSize: 14, color: '#1a1714', background: '#fff', outline: 'none',
};

const labelStyle: React.CSSProperties = {
  fontSize: 11, fontWeight: 600, color: '#868e96',
  letterSpacing: '0.05em', display: 'block', marginBottom: 5, textTransform: 'uppercase',
};

interface Props {
  tasks: Task[];
  onUpdate: (t: Task) => void;
  onToast: (msg: string) => void;
}

export default function TasksView({ tasks, onUpdate, onToast }: Props) {
  const [selectedId, setSelectedId]   = useState<number | null>(null);
  const [collapsed, setCollapsed]     = useState<Set<string>>(new Set(['done']));
  const [search, setSearch]           = useState('');

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

  const filtered = search
    ? tasks.filter((t) => t.name.toLowerCase().includes(search.toLowerCase()))
    : tasks;

  const activeCount = tasks.filter((t) => t.status !== 'Done').length;

  const toggleCollapse = (id: string) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div style={{ padding: '36px 40px 80px', maxWidth: 900 }}>

      {/* Page header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: '#1a1714', letterSpacing: '-0.01em' }}>
            My Tasks
          </h1>
          <p style={{ margin: '3px 0 0', fontSize: 13, color: '#868e96' }}>
            {activeCount} active task{activeCount !== 1 ? 's' : ''}
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* Search */}
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#adb5bd', fontSize: 13, pointerEvents: 'none' }}>⌕</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search…"
              style={{
                padding: '7px 12px 7px 28px',
                border: '1px solid #e9ecef', borderRadius: 8,
                fontSize: 13, color: '#1a1714', background: '#fff',
                outline: 'none', width: 180,
              }}
            />
          </div>
        </div>
      </div>

      {/* Sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {SECTIONS.map((section) => {
          const sectionTasks = filtered.filter(section.filter);
          if (sectionTasks.length === 0) return null;
          const isCollapsed = collapsed.has(section.id);

          return (
            <div key={section.id} style={{ marginBottom: 8 }}>
              {/* Section header */}
              <button
                onClick={() => toggleCollapse(section.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  width: '100%', background: 'transparent', border: 'none',
                  padding: '6px 4px', cursor: 'pointer',
                  marginBottom: isCollapsed ? 0 : 2,
                }}
              >
                <span style={{
                  fontSize: 10, color: '#adb5bd',
                  transition: 'transform 0.15s',
                  display: 'inline-block',
                  transform: isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)',
                }}>▾</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: '#868e96', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  {section.label}
                </span>
                <span style={{
                  fontSize: 11, fontWeight: 600, color: '#adb5bd',
                  background: '#f1f3f5', borderRadius: 10, padding: '1px 6px',
                }}>
                  {sectionTasks.length}
                </span>
              </button>

              {/* Task rows */}
              {!isCollapsed && (
                <div style={{
                  background: '#fff',
                  borderRadius: 10,
                  border: '1px solid #e9ecef',
                  overflow: 'hidden',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                }}>
                  {sectionTasks.map((task, i) => (
                    <TaskRow
                      key={task.id}
                      task={task}
                      isLast={i === sectionTasks.length - 1}
                      onOpen={() => setSelectedId(task.id)}
                      onToggleDone={() => {
                        const next = task.status === 'Done' ? 'Not Started' : 'Done';
                        onUpdate({ ...task, status: next });
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '64px 0', color: '#adb5bd', fontSize: 14 }}>
            {search ? `No tasks matching "${search}"` : 'No tasks'}
          </div>
        )}
      </div>
    </div>
  );
}

function TaskRow({
  task,
  isLast,
  onOpen,
  onToggleDone,
}: {
  task: Task;
  isLast: boolean;
  onOpen: () => void;
  onToggleDone: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [checkHover, setCheckHover] = useState(false);
  const done = task.status === 'Done';
  const pc = priorityColor(task.priority);

  return (
    <div
      style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '11px 16px',
        borderBottom: isLast ? 'none' : '1px solid #f1f3f5',
        background: hovered ? '#f8f9fa' : '#fff',
        cursor: 'pointer',
        transition: 'background 0.08s',
      }}
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Checkbox */}
      <button
        onClick={(e) => { e.stopPropagation(); onToggleDone(); }}
        onMouseEnter={() => setCheckHover(true)}
        onMouseLeave={() => setCheckHover(false)}
        style={{
          width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
          border: done ? 'none' : `2px solid ${checkHover ? '#2f9e44' : '#ced4da'}`,
          background: done ? '#2f9e44' : checkHover ? 'rgba(47,158,68,0.08)' : '#fff',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.12s', padding: 0,
        }}
      >
        {done && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4l3 3 5-6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      {/* Priority dot */}
      <span style={{ width: 7, height: 7, borderRadius: '50%', background: pc.dot, flexShrink: 0 }} title={priorityLabel(task.priority)} />

      {/* Task name */}
      <span style={{
        flex: 1, fontSize: 13.5, fontWeight: 450, color: done ? '#adb5bd' : '#1a1714',
        textDecoration: done ? 'line-through' : 'none',
        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
      }}>
        {task.name}
      </span>

      {/* Owner */}
      {task.owner && (
        <div style={{
          width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
          background: '#e9ecef', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: 10, fontWeight: 700, color: '#868e96',
        }}>
          {task.owner.charAt(0).toUpperCase()}
        </div>
      )}

      {/* Ticket */}
      {task.jiraKey && (
        <a href={`${JIRA_BASE}/${task.jiraKey}`} target="_blank" rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          style={{ fontSize: 11, fontWeight: 600, padding: '2px 7px', borderRadius: 4, background: '#e7f5ff', color: '#1971c2', textDecoration: 'none', flexShrink: 0 }}>
          {task.jiraKey}
        </a>
      )}
      {!task.jiraKey && task.linearId && (
        <a href={`${LINEAR_BASE}/${task.linearId}`} target="_blank" rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          style={{ fontSize: 11, fontWeight: 600, padding: '2px 7px', borderRadius: 4, background: '#f3f0ff', color: '#5f3dc4', textDecoration: 'none', flexShrink: 0 }}>
          {task.linearId}
        </a>
      )}

      {/* Priority tag */}
      <span style={{ fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 20, background: pc.pill, color: pc.text, flexShrink: 0 }}>
        {priorityLabel(task.priority)}
      </span>

      {/* Detail button */}
      {hovered && (
        <button
          onClick={(e) => { e.stopPropagation(); onOpen(); }}
          style={{
            border: '1px solid #e9ecef', borderRadius: 5, background: '#fff',
            color: '#868e96', fontSize: 14, cursor: 'pointer', padding: '2px 6px',
            flexShrink: 0, letterSpacing: 1,
          }}
        >
          ···
        </button>
      )}
    </div>
  );
}

function TaskDetail({
  task, onBack, onUpdate, onToast,
}: {
  task: Task; onBack: () => void; onUpdate: (t: Task) => void; onToast: (msg: string) => void;
}) {
  const [edited, setEdited]   = useState<Task>(task);
  const [syncDest, setSyncDest] = useState<'jira' | 'linear'>('jira');
  const [syncing, setSyncing]   = useState(false);

  const set = <K extends keyof Task>(key: K, value: Task[K]) => {
    const updated = { ...edited, [key]: value };
    setEdited(updated);
    onUpdate(updated);
  };

  const hasJira   = Boolean(edited.jiraKey);
  const hasLinear = Boolean(edited.linearId);
  const ticketLabel = syncDest === 'jira'
    ? (hasJira   ? `Update ${edited.jiraKey}`   : 'Create Jira ticket')
    : (hasLinear ? `Update ${edited.linearId}` : 'Create Linear ticket');

  const handleSync = async () => {
    setSyncing(true);
    try {
      const endpoint  = syncDest === 'jira' ? '/api/jira' : '/api/linear';
      const hasTicket = syncDest === 'jira' ? hasJira : hasLinear;
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: hasTicket ? 'update' : 'create',
          ...(syncDest === 'jira' ? { issueKey: edited.jiraKey } : { linearId: edited.linearId }),
          name: edited.name, priority: edited.priority, status: edited.status,
          owner: edited.owner, notes: edited.notes,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(JSON.stringify(data.error));
      if (data.jiraKey)   { const u = { ...edited, jiraKey:   data.jiraKey   as string }; setEdited(u); onUpdate(u); }
      if (data.linearId)  { const u = { ...edited, linearId:  data.linearId  as string }; setEdited(u); onUpdate(u); }
      onToast(hasTicket ? 'Synced successfully' : `Created ${data.jiraKey ?? data.linearId}`);
    } catch (err) {
      onToast('Sync failed — check console');
      console.error(err);
    } finally {
      setSyncing(false);
    }
  };

  const sc = statusColor(edited.status);

  return (
    <div style={{ padding: '32px 40px', maxWidth: 820 }}>
      <button
        onClick={onBack}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '6px 12px', marginBottom: 24,
          background: '#fff', border: '1px solid #e9ecef', borderRadius: 8,
          cursor: 'pointer', color: '#868e96', fontSize: 13, fontWeight: 500,
          boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
        }}
      >
        ← My Tasks
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 16 }}>
        {/* Main card */}
        <div style={{ background: '#fff', border: '1px solid #e9ecef', borderRadius: 12, padding: 24, display: 'flex', flexDirection: 'column', gap: 16, boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
          <div>
            <label style={labelStyle}>Task Name</label>
            <input value={edited.name} onChange={(e) => set('name', e.target.value)}
              style={{ ...inputStyle, fontSize: 15, fontWeight: 600 }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div>
              <label style={labelStyle}>Status</label>
              <select value={edited.status} onChange={(e) => set('status', e.target.value as TaskStatus)} style={inputStyle}>
                {STATUS_ORDER.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Priority</label>
              <select value={edited.priority} onChange={(e) => set('priority', e.target.value as Priority)} style={inputStyle}>
                <option value="1-Critical">Critical</option>
                <option value="2-Important">Important</option>
                <option value="3-Normal">Normal</option>
              </select>
            </div>
          </div>
          <div>
            <label style={labelStyle}>Owner</label>
            <input value={edited.owner} onChange={(e) => set('owner', e.target.value)} placeholder="Unassigned" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Notes</label>
            <textarea value={edited.notes} onChange={(e) => set('notes', e.target.value)} rows={4} placeholder="Add notes…" style={{ ...inputStyle, resize: 'vertical' }} />
          </div>

          {/* Status badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 600, padding: '3px 10px', borderRadius: 20, background: sc.bg, color: sc.color }}>{edited.status}</span>
            {edited.jiraKey && <a href={`${JIRA_BASE}/${edited.jiraKey}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, fontWeight: 600, padding: '3px 10px', borderRadius: 4, background: '#e7f5ff', color: '#1971c2', textDecoration: 'none' }}>{edited.jiraKey} ↗</a>}
            {edited.linearId && <a href={`${LINEAR_BASE}/${edited.linearId}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, fontWeight: 600, padding: '3px 10px', borderRadius: 4, background: '#f3f0ff', color: '#5f3dc4', textDecoration: 'none' }}>{edited.linearId} ↗</a>}
          </div>
        </div>

        {/* Sync card */}
        <div style={{ background: '#fff', border: '1px solid #e9ecef', borderRadius: 12, padding: 20, display: 'flex', flexDirection: 'column', gap: 14, boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
          <div>
            <label style={labelStyle}>Sync To</label>
            <div style={{ display: 'flex', gap: 8 }}>
              {(['jira', 'linear'] as const).map((dest) => (
                <button key={dest} onClick={() => setSyncDest(dest)} style={{
                  flex: 1, padding: '8px 0', borderRadius: 8,
                  border: `1.5px solid ${syncDest === dest ? (dest === 'jira' ? '#1971c2' : '#5f3dc4') : '#e9ecef'}`,
                  background: syncDest === dest ? (dest === 'jira' ? '#e7f5ff' : '#f3f0ff') : '#fff',
                  color: syncDest === dest ? (dest === 'jira' ? '#1971c2' : '#5f3dc4') : '#868e96',
                  fontWeight: 600, fontSize: 13, cursor: 'pointer', textTransform: 'capitalize',
                }}>{dest}</button>
              ))}
            </div>
          </div>
          <div style={{ paddingTop: 12, borderTop: '1px solid #f1f3f5', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 13, color: '#495057', fontWeight: 500 }}>{ticketLabel}</div>
            <button onClick={handleSync} disabled={syncing} style={{
              width: '100%', padding: '10px 0', borderRadius: 8, border: 'none',
              background: syncDest === 'jira' ? '#1971c2' : '#5f3dc4',
              color: '#fff', fontWeight: 600, fontSize: 14,
              cursor: syncing ? 'not-allowed' : 'pointer', opacity: syncing ? 0.7 : 1,
            }}>
              {syncing ? 'Syncing…' : 'Sync now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
