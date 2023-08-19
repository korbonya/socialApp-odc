import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  redirect
} from "react-router-dom";
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Home from './pages/home';
import Detail from './pages/detail';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () =>{
      const user = localStorage.getItem('user')
      const is_login = JSON.parse(user)?.token
    
      if(!is_login){
        return redirect('/signin')
      }
      return null
    },
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
