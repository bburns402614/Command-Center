'use client';

import { useState, useEffect } from 'react';
import { Task, Tab } from '@/lib/types';
import { initialTasks } from '@/lib/data';
import TasksView from '@/components/TasksView';
import RoadmapView from '@/components/RoadmapView';
import NewTaskView from '@/components/NewTaskView';
import StatusView from '@/components/StatusView';

const NAV_H = 58;

const tabs: { id: Tab; label: string }[] = [
  { id: 'tasks', label: 'Tasks' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'new-task', label: '+ New Task' },
  { id: 'status', label: 'Status' },
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
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Sticky nav */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: NAV_H,
          background: '#fff',
          borderBottom: '1px solid #e0dbd4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 28px',
          zIndex: 100,
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span
            style={{
              fontFamily: 'var(--font-dm-serif)',
              fontSize: 20,
              color: '#1a1714',
              lineHeight: 1,
            }}
          >
            Command Center
          </span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: '#a8a39e',
              letterSpacing: '0.08em',
            }}
          >
            CC
          </span>
        </div>

        <div style={{ display: 'flex', gap: 4 }}>
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: '6px 16px',
                borderRadius: 8,
                border: 'none',
                background: tab === t.id ? '#1a1714' : 'transparent',
                color: tab === t.id ? '#fff' : '#6b6560',
                fontWeight: tab === t.id ? 600 : 500,
                fontSize: 13,
                cursor: 'pointer',
                transition: 'all 0.12s',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main style={{ paddingTop: NAV_H }}>
        {tab === 'tasks' && (
          <TasksView tasks={tasks} onUpdate={updateTask} onToast={showToast} />
        )}
        {tab === 'roadmap' && <RoadmapView onToast={showToast} />}
        {tab === 'new-task' && (
          <NewTaskView onCreate={createTask} onToast={showToast} />
        )}
        {tab === 'status' && <StatusView onToast={showToast} />}
      </main>

      {/* Toast */}
      {toast && (
        <div
          key={toast.id}
          style={{
            position: 'fixed',
            bottom: 28,
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#1a1714',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: 10,
            fontSize: 13,
            fontWeight: 500,
            boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
            zIndex: 200,
            whiteSpace: 'nowrap',
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
