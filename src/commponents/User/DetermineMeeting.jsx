import { observer } from "mobx-react-lite";
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import InputAdornment from '@mui/material/InputAdornment';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from "react"
import meeting from "../../data/meeting ";
import service from "../../data/service ";



const DetermineMeeting = observer(() => {
  const [value, setValue] = React.useState(dayjs(new Date()));
  const [open, setOpen] = React.useState(false);
  const handleChange = (newValue) => {
    setValue(newValue);
    setDateTime(newValue);
  };
  const handleClickOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };
  const [id, setId] = useState();
  const [serviceType, setServiceType] = useState();
  const [dateTime, setDateTime] = useState("2022-06-20T10:00:00.000Z");
  const [clientName, setClientName] = useState();
  const [clientPhone, setClientPhone] = useState();
  const [clientEmail, setClientEmail] = useState();
  const [validDate, setValidDate] = useState("valid");
  const handleChangeTypeService = (event) => {
    setServiceType(event.target.value);
  };
  const handleEdit = async () => {
    meeting.addAppointment(id, serviceType, dateTime, clientName, clientPhone, clientEmail).then(() => {
      meeting.initAppointments();
      handleClose();
    })
  }

  return (
    <>
      <Button onClick={handleClickOpen}>
       to determine Apointment
      </Button>
      <Dialog
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          New Apointment
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">id</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              value={id}
              onChange={(e) => setId(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                </InputAdornment>
              }
              label="id"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel id="demo-simple-select-label">services</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={serviceType}
                label="service type"
                onChange={handleChangeTypeService}
              >
                {service.servicesList.map((item, index) => <MenuItem value={item.name} >{item.name}</MenuItem>)}
              </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" className={validDate} >
            <LocalizationProvider dateAdapter={AdapterDayjs} >

              <DateTimePicker
                label="date"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Name</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                </InputAdornment>
              }
              label="clientName"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Phone</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                </InputAdornment>
              }
              label="clientPhone"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                </InputAdornment>
              }
              label="clientEmail"
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleEdit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
})
export default DetermineMeeting;