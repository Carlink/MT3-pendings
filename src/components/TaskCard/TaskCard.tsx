import React from 'react';
import { differenceInHours } from 'date-fns';
// Components
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import Chip from '@mui/material/Chip';
// Types
import { Task, Priority } from '@/types/pendings';


// Local Types
interface TaskCardProps {
  task: Task;
  disabled: boolean;
  removeTask: (e: any, text_id: string) => void;
  markAsDone: (e: any, text_id: string) => void;
}

// Methods

const getPriorityColor = (priority: Priority): string => {
  if (priority === 'low') {
    return '#5BC236'
  } else if (priority === 'medium') {
    return '#FED93D'
  }
  return '#F16161'
}

const remainingHours = (date: Date) => {
  const now = new Date();
  return differenceInHours(date, now);
}

const TaskCard: React.FC<TaskCardProps> = ({ task, removeTask, markAsDone, disabled }) => {
  return (
    <div className='grid-item'>
      <div className={`grid-item-content ${remainingHours(task.dueDate) < 48 && 'no-time'} ${disabled && 'disabled'}`}>
        <div>{remainingHours(task.dueDate)} remaining hours</div>
        < div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className='card-title'>{task.text}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {!disabled && <Chip label={task.priority} style={{ backgroundColor: getPriorityColor(task.priority), fontWeight: 600, color: 'white', marginLeft: '5px' }} />}
          <Button disabled={disabled} onClick={(e) => markAsDone(e, task.id)}>done</Button>
        </div>
        {!disabled && <IconButton color="error" style={{ position: 'absolute', top: 15, right: 15 }} onClick={(e) => removeTask(e, task.id)}>
          <ClearIcon />
        </IconButton>}
      </div>
    </div >

  );
};

export default TaskCard;
