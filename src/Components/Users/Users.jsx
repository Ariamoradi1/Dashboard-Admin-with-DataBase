import React, { useContext, useEffect} from "react";
import AddUser from '../Users/AddUser'
import { myData } from "../../Context/myContext";





  
  
const Users = () => {
  const myDatas = useContext(myData)
     useEffect(() => {
      fetch('https://dashboard-users-b6cc4-default-rtdb.firebaseio.com/users.json').then(res => res.json()).then(
     data => {
      myDatas.setUserArray(Object.entries(data))
      console.log(Object.entries(data))
      
      
     }
      
    )
     },[])
   
   
    
    return (
    <>
    <h3 style={{textAlign:'center'}}>List Employee And Add</h3>
    <div className="add-user">
    <AddUser/>
    <table class="styled-table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
      {myDatas.userArray.map(user => (
        <>
        <tr>
        <td>{user[1].name}</td>
        <td>{user[1].lastName}</td>
        <td>{user[1].age}</td>
        <td>{user[1].email}</td>
        </tr>
    
    </>
      ))}
       
    </tbody>
</table>
   
   </div>
    </>
    )
}

export default Users