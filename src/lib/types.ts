export type Priority = '1-Critical' | '2-Important' | '3-Normal';
export type TaskStatus = 'Not Started' | 'In Progress' | 'Blocked' | 'Done';
export type Tab = 'tasks' | 'roadmap' | 'new-task' | 'status';
export type Filter = 'all' | 'active' | 'done';
export type Quarter = 'Q2 2026' | 'Q3 2026' | 'Q4 2026';
export type EpicStatus = 'Planned' | 'In Progress' | 'In Review' | 'Done';

export interface Task {
  id: number;
  name: string;
  priority: Priority;
  status: TaskStatus;
  owner: string;
  notes: string;
  jiraKey?: string;
  linearId?: string;
}

export interface Feature {
  name: string;
  detail: string;
  jiraKey?: string;
  linearId?: string;
}

export interface Epic {
  id: number;
  name: string;
  status: EpicStatus;
  quarter: Quarter;
  features: Feature[];
}

export interface BacklogItem {
  id: number;
  name: string;
  detail: string;
}

export interface StatusUpdate {
  id: number;
  title: string;
  overallStatus: 'On Track' | 'At Risk' | 'Blocked';
  done: string;
  upNext: string;
  blockers: string;
  slackChannel: string;
  sentToSlack: boolean;
  createdAt: string;
}
