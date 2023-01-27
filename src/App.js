import { useState } from "react";
import { useRoutes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { routes } from "./Routes";
import { myData } from "./Context/myContext";

function App() {
  const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [userArray, setUserArray] = useState([])
  const route = useRoutes(routes)
  return (
    <>
    <myData.Provider value={{
      name,
      setName,
      lastName,
      setLastName,
      age,
      setAge,
      email,
      setEmail,
      userArray,
      setUserArray
    }}>
    <Navbar/>
    {route}
    </myData.Provider>
    </>
  );
}

export default App;
