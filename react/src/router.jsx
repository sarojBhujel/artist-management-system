
import { createBrowserRouter } from "react-router-dom";
import AdminLayouts from "./components/layouts/AdminLayouts";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register"
import Artist from "./pages/artist/Artist"
import Albums from "./pages/albums/Albums"
import Users from "./pages/users/Users";
import GuestLayout from "./components/layouts/GuestLayout";

const router= createBrowserRouter ([
    {
        path:'/',
        element:<AdminLayouts/>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard/>
            },
            {
                path:'/',
                element:<Dashboard/>
            },
            {
                path:'/users',
                element:<Users/>
            },
            {
                path:'/artists',
                element:<Artist/>
            },
            {
                path:'/albums',
                element:<Albums/>
            },
        ]
    },
    {
        path:'/',
        element:<GuestLayout/>,
        children:[
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/register',
                element:<Register />
            },
        ]
    },
    
    
    {
        path:'*',
        element:<NotFound/>
    }
])
export default router