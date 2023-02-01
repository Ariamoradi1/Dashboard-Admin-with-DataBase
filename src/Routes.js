import Home from "./Components/Home/Home";
import Notifications from "./Components/Notifications/Notifications";
import Products from "./Components/Products/Products";
import Users from "./Components/Users/Users";


let routes = [
    {path:'/', element:<Home/>},
    {path:'/Users', element:<Users/>},
    {path:'/products',element:<Products/>},
    {path:'/Messages',element:<Notifications/>}
]

export {routes}