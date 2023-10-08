import React, { useEffect, useState } from "react";
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
import { addTask, markAsDone, removeTask } from '@/app/taskSlice';

interface TasksState {
  main: Task[];
}

function Dashboard() {
  const tasksStore = useSelector((state: { tasks: { tasks: Task[] } }) => state.tasks.tasks);
  const dispatch = useDispatch();

  const [tasks, setTasks] = useState<TasksState>({
    main: tasksStore
  });

  useEffect(() => {
    setTasks({
      ...tasks,
      main: tasksStore.filter((task: Task) => {
        return task.status != 'deleted'
      })
    })
  }, [tasksStore])

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
    console.log('newTask', newTask)
    dispatch(addTask(newTask));
  }

  const markAsDoneLocal = (event: any, id: string) => {
    event.stopPropagation();
    dispatch(markAsDone(id));
  }

  const removeTaskLocal = (event: any, id: string) => {
    event.stopPropagation();
    dispatch(removeTask(id));
  }

  return (
    <div>
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
                <TaskCard disabled={task.status === 'done'} task={task} markAsDone={(event, id) => markAsDoneLocal(event, id)} removeTask={(event, id) => removeTaskLocal(event, id)} />
              </GridItem>
            ))}
          </GridDropZone>
        </div>
      </GridContextProvider>
    </div>
  );
}

export default Dashboard