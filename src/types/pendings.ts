// When you click on the first crossed-square in the wireframe, it should display a
// form to add a new pending to the dashboard.Fields: Priority, text, status.Statuses
// allowed: Active, Done, Deleted.

type Priority = 'low' | 'medium' | 'high';

type Status = 'active' | 'done' | 'deleted';

interface FormTask {
  text: string;
  priority: Priority;
  dueDate: Date | null;
}
interface Task extends FormTask {
  id: string;
  status: Status;
  color: string;
  position: number;
}

export type { FormTask, Task, Status, Priority };
