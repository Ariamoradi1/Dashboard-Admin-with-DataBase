import React, { useContext, useEffect, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { myData } from "../../Context/myContext";
import { Paper } from "@mui/material";


const AddUser = () => {
    const myDatas = useContext(myData)
    let userObj = {
        name : myDatas.name,
        lastName : myDatas.lastName,
        age : myDatas.age,
        email : myDatas.email
    }
    const clickHandler = async () => {
        if(myDatas.name === '' || myDatas.lastName === '' || myDatas.age === '' || myDatas.email === '') {
            alert('Erorr')
        } else {
           await fetch('https://dashboard-users-b6cc4-default-rtdb.firebaseio.com/users.json',{
              method : 'POST',
              body : JSON.stringify(userObj)
           }).then(res => res.json()).then(data => console.log(data))
          
        }
        myDatas.setRealTime(prev => !prev)
      }
          
        
      
          
            
    return(
        <>
        
        <div className="inputs">
        <Paper className="paperInput" style={{width:'400px',height:'500px'}}>
        
        <Box
      sx={{
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <TextField
        className="inputUser"
        helperText="Please enter your name"
        id="demo-helper-text-aligned"
        label="Name"
        value={myDatas.name}
        onChange={(e) => myDatas.setName(e.target.value)}
      />
      <TextField
        className="inputUser"
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="LastName"
        value={myDatas.lastName}
        onChange={(e) => myDatas.setLastName(e.target.value)}
      />
      <TextField
        className="inputUser"
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="Email"
        value={myDatas.age}
        onChange={(e) => myDatas.setAge(e.target.value)}
      />
       <TextField
        className="inputUser"
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="Age"
        value={myDatas.email}
        onChange={(e) => myDatas.setEmail(e.target.value)}
      />
    </Box>
    
    <div className="button">
    <Button onClick={clickHandler} variant="contained">Add Employee</Button>
    
    </div>
    </Paper>
    </div>
    
        </>
    )
}

export default AddUser