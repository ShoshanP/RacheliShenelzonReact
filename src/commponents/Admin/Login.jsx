import { useForm } from 'react-hook-form';
import axios from "axios";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';

export default function Login() {


    const { register, handleSubmit } = useForm();
    const [isTrue, SetIsTrue] = React.useState();
   const [isFalse, SetIsFalse]=React.useState();

    function onSubmitt(data) {
        axios.post('http://localhost:8787/login', data).then(function (responce) {
            SetIsTrue(true);
            window.location.pathname='admin';
        }).catch(function (error) {
            SetIsFalse(false);
            // <Alert?
        });
    }
    return (
       <>
        <form onSubmit={handleSubmit(onSubmitt)}>
        <TextField
            label="Name"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            {...register("name")}
        />
        <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
            required
            fullWidth
            {...register("password")}
        />
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
        >
            Sign In
        </Button>
    </form>
      
      </>
    )
};





