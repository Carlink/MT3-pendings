// When you click on the first crossed-square in the wireframe, it should display a
// form to add a new pending to the dashboard.Fields: Priority, text, status.Statuses
// allowed: Active, Done, Deleted.

type Priority = 'low' | 'medium' | 'high';

type Status = 'active' | 'done' | 'deleted';

interface Task {
  priority: Priority;
  text: string;
  status: Status;
  dueDate: Date;
  color: string;
}

export type { Task };
