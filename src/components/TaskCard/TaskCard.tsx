import React from 'react';
// Components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Chip from '@mui/material/Chip';
// Types
import { Task, Priority } from '@/types/pendings';

// Local Types
interface TaskCardProps {
  task: Task;
  removeTask: (text_id: string) => void;
  markAsDone: (text_id: string) => void;
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

const TaskCard: React.FC<TaskCardProps> = ({ task, removeTask, markAsDone }) => {
  return (
    <div className="grid-item" onClick={() => markAsDone(task.id)}>
      <div className='grid-item-content'>
        <Chip label={task.priority} style={{ backgroundColor: getPriorityColor(task.priority), fontWeight: 600, color: 'white' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p>{task.text}</p>
          <IconButton color="secondary" aria-label="Eliminar" onClick={() => removeTask(task.id)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </div>

  );
};

export default TaskCard;
