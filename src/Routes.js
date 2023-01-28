import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Users from "./Components/Users/Users";


let routes = [
    {path:'/', element:<Home/>},
    {path:'/Users', element:<Users/>},
    {path:'/products',element:<Products/>}
]

export {routes}