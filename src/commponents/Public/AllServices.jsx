// import React, { useState } from 'react';
// import { observer } from 'mobx-react-lite';
// import { toJS } from 'mobx';
// import service from '../../data/service ';
// import { Tab } from '@mui/material';
// import OneService from './oneService';
// import AddService from '../Admin/addService';


// const AllServices = observer(() => {
//     const data = service.servicesList;
//     console.log("data", toJS(data));
//     return (
//         <>
//             {data.map((service, index) => (
//                 <Tab key={index} label={<OneService {...service} disabled />} />
//             ))}
//             <br></br>
//             <AddService/>
//         </>
//     );
// });
// export default AllServices;
import { createContext, useContext, useState, forwardRef } from "react";
import { toJS } from 'mobx';
import { observer } from "mobx-react-lite";
import { Grid, Button } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import OneService from './oneService';
import AddService from '../Admin/addService';
import Service from "../../data/service ";
import CreateMeetForm from "../User/createMeetForm";


export const UserContext = createContext(null);
export const AlertContext = createContext(null);
const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const AllServices = observer(() => {
    const isAdmin = useContext(UserContext);
    const services = toJS(Service.data);
    const [addService, setAddService] = useState(true);
    const [createMeet, setCreateMeet] = useState(false);
    const [bool, setBool] = useState(false);


    function handleClickAddService() {
        setAddService(true);
    }

    function handleClickCreateMeet() {
        setCreateMeet(true);
    }

    const handleServiceClose = () => {
        setAddService(false);

    }

    const handleMeetClose = () => {
        setCreateMeet(false);
    }

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setBool(false);

    };

    return (
        <>
          {/* {isAdmin.isAdmin && <Button sx={{ m: 1 }} onClick={handleClickAddService} variant="contained" size="medium">הוסף שירות לעסק</Button>} */}
            {!isAdmin.isAdmin && <Button sx={{ m: 1 }} onClick={handleClickCreateMeet} variant="contained" size="medium">לקביעת פגישה</Button>}
            <Grid container spacing={2} sx={{ justifyContent: 'flex-end' }}>
                {services.map((item) => (
                    <Grid item key={item.id} sx={{ direction: 'rtl' }} xs={12} md={4}>
                        <OneService {...item} />
                    </Grid>
                ))}
            </Grid>
           
            { <AlertContext.Provider value={{ bool, setBool }}><CreateMeetForm handleClose={handleMeetClose} open={createMeet} /></AlertContext.Provider>} 

            <Snackbar open={bool} autoHideDuration={6000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
                    הפעולה בוצעה בהצלחה                </Alert>
            </Snackbar>
        </>
    );
});

export default AllServices;

