import type { DashboardStats } from '../types/ipc';

export function getDashboardStats(): Promise<DashboardStats> {
  return window.electronApi.dashboardStats();
}

