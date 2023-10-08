import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { FormTask, Priority } from '@/types/pendings';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { Task } from '@/types/pendings';
interface NewTaskDialogProps {
  emitSubmit: (form: FormTask) => void;
}

const NewTaskDialog: React.FC<NewTaskDialogProps> = ({ emitSubmit }) => {
  const tasksStore = useSelector((state: { tasks: { tasks: Task[] } }) => state.tasks.tasks);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Priority>('low');
  const [dueDate, setDueDate] = useState<Date>(new Date);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if (text.length > 0) {
      const exist = tasksStore.find((task) => task.text === text);
      if (exist) {
        toast.error('Task name could not be repeated!');
        return
      }
      emitSubmit({
        text,
        priority,
        dueDate
      })
      // Cierra el diálogo
      setText('');
      setPriority('low');
      setDueDate(new Date);

      handleClose();
    } else {
      toast.error('Task name could not be empty!');
    }

  };

  return (
    <>
      <div className="grid-item" onClick={handleClickOpen}>
        <div style={{ fontSize: '50px', backgroundColor: '#666666', color: '#454545' }} className='grid-item-content'>
          +
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add new pending</DialogTitle>
        <DialogContent>
          <TextField
            style={{ marginBottom: '20px' }}
            autoFocus
            margin="dense"
            label="Texto"
            type="text"
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <FormControl fullWidth style={{ marginBottom: '20px' }}>
            <InputLabel>Selector</InputLabel>
            <Select
              value={priority}
              onChange={(e) => setPriority(e.target.value as Priority)}
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="Controlled picker"
              value={dueDate}
              onChange={(newValue) => {
                if (newValue) {
                  setDueDate(newValue)
                }
              }}
            />
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default NewTaskDialog;
