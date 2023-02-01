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
    const [realTime, setRealTime] = useState(false)
    const [darkMode, setDarkMode] = useState("light")
    const [products,setProducts] = useState([
      {id:1,name:'Laptop',img:'LapTop.jpg',about:' A laptop is a computer which is easy to carry around. A modern laptop is self-contained, with a screen, keyboard and pointing device laptop is laptop'},
      {id:2,name:'Tv',img:'Tv.jpg',about:'Television is one of the most popular 20th-century inventions by humans. It is used to transmit videos and sounds over distances miles apart from one another.'},
      {id:3,name:'Phone',img:'Phone.jpg',about:'Mobile Phone is often also called “cellular phone”. It is a device mainly used for a voice call im here to give best products to you broo good days coming :)'},
      {id:4,name:'Head Phone',img:'headphone.webp',about:'Headphones are electronic audio devices that people wear over their ears. They let people hear sounds on a walkman, MP3 player, mobile phone or computer.'},
      {id:5,name:'Apple Watch',img:'applewatch.jpg',about:'Headphones are electronic audio devices that people wear over their ears. They let people hear sounds on a walkman, MP3 player, mobile phone or computer.'},
      {id:6,name:'Ps5',img:'ps5.webp',about:'The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced as the successor to the PlayStation 4 in April 2019'},
  ])
    const [showModal, setShowModal] = useState(false)
    const [deleteId, setDeleteId] = useState("")
    const [searchItem, setSearchItem] = useState('');
  const [data, setData] = useState([
    { id: 1, name: 'Product', link:'/products' },
    { id: 2, name: 'Emploee', link:'/Users' },
    { id: 3, name: 'Home', link:'/' },
    { id: 4, name: 'Notifications', link:'/Notifications' }
  ]);

    const toggleTheme = () => {
      setDarkMode(prev => (prev === "light" ? "dark" : "light"));
    }
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
      setUserArray,
      realTime,
      setRealTime,
      darkMode,
      toggleTheme,
      products,
      setProducts,
      showModal,
      setShowModal,
      deleteId,
      setDeleteId,
      searchItem,
      setSearchItem,
      data,
      setData
    }}>
    <div style={{height:'100%'}} id={darkMode}>
    <Navbar/>
    {route}
    </div>
    </myData.Provider>
    </>
  );
}

export default App;
