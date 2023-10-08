import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap
} from "react-grid-dnd";
import { Task, FormTask } from "@/types/pendings";
import TaskCard from '../TaskCard/TaskCard';
import NewTaskDialog from '@/components/NewTaskDialog/NewTaskDialog'
import { useDispatch, useSelector } from "react-redux";

interface TasksState {
  main: Task[];
}

const markAsDone = (e: any) => {
  console.log('markAsDone', e)
}

const removeTask = (e: any) => {
  console.log('removeTask', e)
}

function Dashboard() {
  const tasksStore = useSelector((state: { tasks: { tasks: Task[] } }) => state.tasks.tasks);
  const dispatch = useDispatch();

  const [tasks, setTasks] = useState<TasksState>({
    main: tasksStore
  });

  function onChange(sourceIndex: number, targetIndex: number) {
    if (sourceIndex + 1 === 0 || targetIndex + 1 === 0) {
      return
    } else {
      const result = swap(tasks["main"], sourceIndex, targetIndex);
      return setTasks({
        ...tasks,
        main: result
      });
    }

  }

  const submit = (newTask: FormTask) => {
    console.log('newTask', newTask.dueDate)
  }

  return (
    <GridContextProvider
      onChange={(sourceId, sourceIndex, targetIndex, targetId) =>
        onChange(sourceIndex - 1, targetIndex - 1)
      }
    >

      <div className="container">
        <GridDropZone
          className="dropzone main"
          id="main"
          boxesPerRow={3}
          rowHeight={150}
        >
          <GridItem>
            <NewTaskDialog emitSubmit={submit} />
          </GridItem>
          {tasks.main.map((task) => (
            <GridItem key={task.position} className="draggable">
              <TaskCard task={task} markAsDone={(e) => markAsDone(e)} removeTask={(e) => removeTask(e)} />
            </GridItem>
          ))}
        </GridDropZone>
      </div>
    </GridContextProvider>
  );
}

export default Dashboard

// LIST RENDER

// TaskList.tsx
// import React, { useState } from 'react';
// import { Card, CardContent, Grid, Pagination } from '@mui/material';
// import { Responsive, WidthProvider } from 'react-grid-layout';
// import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
// import { Task } from '@/types/pendings';
// import TaskCard from '../TaskCard/TaskCard';

// const ResponsiveGridLayout = WidthProvider(Responsive);

// const cardsData: Task[] = [
//   {
//     id: '1',
//     text: 'Realizar tarea de ejemplo 1',
//     priority: 'low',
//     status: 'active',
//     dueDate: '2023-10-15',
//     color: '#FF5733',
//   },

//   {
//     id: '2',
//     text: 'Realizar tarea de ejemplo 2',
//     priority: 'medium',
//     status: 'active',
//     dueDate: '2023-10-20',
//     color: '#33FF57',
//   },
//   {
//     id: '3',
//     text: 'Realizar tarea de ejemplo 3',
//     priority: 'high',
//     status: 'active',
//     dueDate: '2023-10-25',
//     color: '#5733FF',
//   },

//   {
//     id: '4',
//     text: 'Realizar tarea de ejemplo 4',
//     priority: 'low',
//     status: 'active',
//     dueDate: '2023-10-30',
//     color: '#FF5733',
//   }
// ];

// const Dashboard: React.FC = () => {
//   const [page, setPage] = useState<number>(1);
//   const cardsPerPage: number = 12;
//   const [items, setItems] = useState<Task[]>(cardsData);
//   // const totalCards: number = cardsData.length;
//   // const totalPages: number = Math.ceil(totalCards / cardsPerPage);

//   // const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
//   //   setPage(value);
//   // };

//   const currentCards: Task[] = cardsData.slice(
//     (page - 1) * cardsPerPage,
//     page * cardsPerPage
//   );

//   const onDragEnd = (result: DropResult) => {
//     if (!result.destination) {
//       return;
//     }

//     const updatedItems = [...items];
//     const [reorderedItem] = updatedItems.splice(result.source.index, 1);
//     updatedItems.splice(result.destination.index, 0, reorderedItem);

//     setItems(updatedItems);
//   };

//   const markAsDone = (e: any) => {
//     console.log('markAsDone', e)
//   }

//   const removeTask = (e: any) => {
//     console.log('removeTask', e)
//   }

//   return (
//     <div>
//       <Grid container spacing={2}>
//         {currentCards.map((task, index) => (
//           <Draggable key={task.id} draggableId={task.id} index={index}>
//             {(provided) => (
//               <Grid item md={3}
//                 key={task.id}
//                 ref={provided.innerRef}
//                 {...provided.draggableProps}
//                 {...provided.dragHandleProps}
//               >
//                 <TaskCard task={task} markAsDone={(e) => markAsDone(e)} removeTask={(e) => removeTask(e)} />
//               </Grid>
//             )}
//           </Draggable>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default Dashboard;

// ADDING NEW

// import { Task, FormTask } from '@/types/pendings';

// import { useSelector, useDispatch } from 'react-redux';
// import { agregarProducto } from '@/app/taskSlice';
// import NewTaskDialog from '@/components/NewTaskDialog/NewTaskDialog'

// const newDate = new Date();
// const mockTask: FormTask = {
//   text: 'Nueva tarea',
//   priority: 'low',
//   dueDate: newDate.toISOString(),
// }

// const Dashboard: React.FC = () => {
//   const tasks = useSelector((state: { tasks: { tasks: Task[] } }) => state.tasks.tasks);
//   const dispatch = useDispatch();

//   const handleAddTask = () => {
//     dispatch(agregarProducto(mockTask));
//   };

//   const handleDeleteTask = (taskId: string) => {
//     console.log('deleting task', taskId)
//   };

//   return (
//     <div>
//       <NewTaskDialog />
//       <button onClick={handleAddTask}>Agregar tarea</button>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id}>
//             {task.text}
//             <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dashboard