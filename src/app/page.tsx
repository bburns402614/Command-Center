'use client';

import { useState, useEffect } from 'react';
import { Task, Tab } from '@/lib/types';
import { initialTasks } from '@/lib/data';
import TasksView from '@/components/TasksView';
import RoadmapView from '@/components/RoadmapView';
import NewTaskView from '@/components/NewTaskView';
import StatusView from '@/components/StatusView';
import PMAssistantView from '@/components/PMAssistantView';

export const SIDEBAR_W = 240;

const NAV_ITEMS: { id: Tab; label: string; icon: string }[] = [
  { id: 'tasks',    label: 'My Tasks',  icon: '✓' },
  { id: 'roadmap',  label: 'Roadmap',   icon: '⊞' },
  { id: 'new-task', label: 'New Task',  icon: '+' },
  { id: 'status',   label: 'Status',    icon: '◎' },
  { id: 'pm-brain', label: 'PM Brain',  icon: '🧠' },
];

export default function Page() {
  const [tab, setTab] = useState<Tab>('tasks');
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [toast, setToast] = useState<{ msg: string; id: number } | null>(null);

  const showToast = (msg: string) => {
    const id = Date.now();
    setToast({ msg, id });
  };

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(t);
  }, [toast]);

  const updateTask = (updated: Task) =>
    setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));

  const createTask = (task: Omit<Task, 'id'>) => {
    setTasks((prev) => [...prev, { ...task, id: Date.now() }]);
    setTab('tasks');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>

      {/* ── Sidebar ── */}
      <aside
        style={{
          position: 'fixed',
          top: 0, left: 0, bottom: 0,
          width: SIDEBAR_W,
          background: '#1e1533',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 100,
        }}
      >
        {/* Logo */}
        <div style={{ padding: '20px 16px 18px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 34, height: 34, borderRadius: 10, flexShrink: 0,
                background: 'linear-gradient(135deg, #f06a6a 0%, #c026d3 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em',
              }}
            >
              CC
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', lineHeight: 1.3 }}>IOU Financial</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)', letterSpacing: '0.03em' }}>Command Center</div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: 1 }}>
          {NAV_ITEMS.map((item) => {
            const active = tab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                style={{
                  width: '100%', textAlign: 'left',
                  padding: '9px 12px', borderRadius: 7, border: 'none',
                  background: active ? 'rgba(255,255,255,0.13)' : 'transparent',
                  color: active ? '#fff' : 'rgba(255,255,255,0.55)',
                  fontWeight: active ? 600 : 400, fontSize: 13.5,
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10,
                  fontFamily: 'inherit', transition: 'all 0.1s',
                }}
                onMouseEnter={(e) => { if (!active) { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; }}}
                onMouseLeave={(e) => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}}
              >
                <span style={{ width: 20, textAlign: 'center', flexShrink: 0, fontSize: 14, opacity: active ? 1 : 0.7 }}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* User */}
        <div style={{ padding: '14px 14px 18px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <div style={{
              width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
              background: 'linear-gradient(135deg, #f06a6a, #c026d3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 11, fontWeight: 700, color: '#fff',
            }}>B</div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.85)', lineHeight: 1.3 }}>Breanna Burns</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>Product Manager</div>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main ── */}
      <main style={{ marginLeft: SIDEBAR_W, flex: 1, minHeight: '100vh', background: 'var(--bg)' }}>
        {tab === 'tasks'    && <TasksView tasks={tasks} onUpdate={updateTask} onToast={showToast} />}
        {tab === 'roadmap'  && <RoadmapView onToast={showToast} />}
        {tab === 'new-task' && <NewTaskView onCreate={createTask} onToast={showToast} />}
        {tab === 'status'   && <StatusView tasks={tasks} onToast={showToast} />}
        {tab === 'pm-brain' && <PMAssistantView />}
      </main>

      {/* Toast */}
      {toast && (
        <div
          key={toast.id}
          style={{
            position: 'fixed', bottom: 28,
            left: `calc(${SIDEBAR_W}px / 2 + 50%)`,
            transform: 'translateX(-50%)',
            background: '#1e1533', color: '#fff',
            padding: '10px 20px', borderRadius: 10,
            fontSize: 13, fontWeight: 500,
            boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
            zIndex: 200, whiteSpace: 'nowrap',
            animation: 'fadeInUp 0.2s ease',
          }}
        >
          {toast.msg}
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateX(-50%) translateY(8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </div>
  );
}
