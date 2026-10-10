export interface Task {
  id: number;
  title: string;
  completed: boolean;
  description?: string;
  priority?: 'Low' | 'Medium' | 'High';
  dueDate?: string;
}