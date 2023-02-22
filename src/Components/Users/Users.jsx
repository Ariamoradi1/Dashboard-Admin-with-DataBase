import React, { useContext, useEffect} from "react";
import AddUser from '../Users/AddUser'
import { myData } from "../../Context/myContext";
import { Paper } from "@mui/material";





  
  
const Users = () => {
  const myDatas = useContext(myData)
     useEffect(() => {
      fetch('https://dashboard-users-b6cc4-default-rtdb.firebaseio.com/users.json').then(res => res.json()).then(
     data => {
      myDatas.setUserArray(Object.entries(data))
     }
      
    )
     },[myDatas.realTime])

     const removeEmployeHandler = async () => {
      myDatas.setShowModalRemove(false)
     await fetch(`https://dashboard-users-b6cc4-default-rtdb.firebaseio.com/users/${myDatas.userId}.json`, {
        method : 'DELETE',
      }).then(res => console.log(res))
      myDatas.setRealTime(prev => !prev)
     }
    return (
    <>
    <h3 style={{textAlign:'center',marginTop:'40px'}}>Management Employees</h3>
    <AddUser/>
    <div className="add-user">
    <table className="styled-table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th style={{textAlign:'center'}}>Delete Employee</th>
        </tr>
    </thead>
    <tbody>
      {myDatas.userArray.map(user => (
        <>
        <tr>
        <td>{user[1].name}</td>
        <td>{user[1].lastName}</td>
        <td>{user[1].email}</td>
        <td>{user[1].age}</td>
        <td style={{display:'flex',justifyContent:'center'}}>
        <button onClick={() => {
          myDatas.setShowModalRemove(true)
          myDatas.setUserId(user[0])
        }} className="delete-button">Delete</button>
        </td>
        </tr>
    
    </>
      ))}
       
    </tbody>
</table>
   
   </div>
   {myDatas.showModalRemove && <div className="modalContainer">
        <Paper className="paperModal" style={{width:'400px',height:'300px',boxShadow:'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px'}}>
        <h2>Delete Employee</h2>
        <p>Are You Sure To Delete The Employee?</p>
        <p>note: If You Delete The Employee, There is No Going Back!</p>
        <div className="button">
        <button className="cancelButton" onClick={() => myDatas.setShowModalRemove(false)}>Cancel</button>
        <button className="deleteButton" onClick={removeEmployeHandler}>Delete</button>
        </div>
        </Paper>
        </div>}
    </>
    )
}

export default Users