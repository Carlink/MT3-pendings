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
  Grid,
  IconButton,
} from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { FormTask, Priority } from '@/types/pendings';

interface NewTaskDialogProps {
  emitSubmit: (form: FormTask) => void;
}

const NewTaskDialog: React.FC<NewTaskDialogProps> = ({ emitSubmit }) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Priority>('low');
  const [dueDate, setDueDate] = useState<Date | null>(new Date);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    emitSubmit({
      text,
      priority,
      dueDate
    })
    // Cierra el diálogo
    handleClose();
  };

  return (
    <>
      <div className="grid-item" onClick={handleClickOpen}>
        <div style={{ fontSize: '50px', backgroundColor: '#666666', color: '#454545' }} className='grid-item-content'>
          +
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Formularios</DialogTitle>
        <DialogContent>
          <DialogContentText>Ingresa los datos:</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Texto"
            type="text"
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <FormControl fullWidth>
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
              onChange={(newValue) => setDueDate(newValue)}
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
