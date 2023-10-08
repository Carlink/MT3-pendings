import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, FormTask } from '@/types/pendings';
import { v4 as uuidv4 } from 'uuid';

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [
      {
        id: '1',
        text: 'Code Review',
        priority: 'low',
        status: 'active',
        dueDate: new Date('2023-10-10'),
        color: '#FF5733',
        position: 1
      },

      {
        id: '2',
        text: 'Bug Fix',
        priority: 'medium',
        status: 'active',
        dueDate: new Date('2023-10-11'),
        color: '#33FF57',
        position: 2
      },
      {
        id: '3',
        text: 'Unit Test',
        priority: 'high',
        status: 'active',
        dueDate: new Date('2023-10-12'),
        color: '#5733FF',
        position: 3
      },

      {
        id: '4',
        text: 'API Integration',
        priority: 'low',
        status: 'active',
        dueDate: new Date('2023-10-13'),
        color: '#FF5733',
        position: 4
      }
    ],
};

const productSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<FormTask>) => {
      const newTask: Task = {
        id: uuidv4(),
        text: action.payload.text,
        priority: action.payload.priority,
        status: 'active',
        dueDate: action.payload.dueDate,
        color: 'red',
        position: 1
      };
      state.tasks.push(newTask);
    },
    markAsDone: (state, action: PayloadAction<string>) => {
      const index = state.tasks.findIndex((task: Task) => task.id === action.payload);
      state.tasks[index].status = 'done'
    },
    removeTask: (state, action: PayloadAction<string>) => {
      const index = state.tasks.findIndex((task: Task) => task.id === action.payload);
      state.tasks[index].status = 'deleted'
    }
  },
});

export const { addTask, markAsDone, removeTask } = productSlice.actions;
export default productSlice.reducer;
