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
        text: 'Realizar tarea de ejemplo 1',
        priority: 'low',
        status: 'active',
        dueDate: new Date,
        color: '#FF5733',
        position: 1
      },

      {
        id: '2',
        text: 'Realizar tarea de ejemplo 2',
        priority: 'medium',
        status: 'active',
        dueDate: new Date,
        color: '#33FF57',
        position: 2
      },
      {
        id: '3',
        text: 'Realizar tarea de ejemplo 3',
        priority: 'high',
        status: 'active',
        dueDate: new Date,
        color: '#5733FF',
        position: 3
      },

      {
        id: '4',
        text: 'Realizar tarea de ejemplo 4',
        priority: 'low',
        status: 'active',
        dueDate: new Date,
        color: '#FF5733',
        position: 4
      }
    ],
};

const productSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    agregarProducto: (state, action: PayloadAction<FormTask>) => {
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
  },
});

export const { agregarProducto } = productSlice.actions;
export default productSlice.reducer;
