// import { useState } from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Write from "./pages/write";
import Login from './pages/login'
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Register from "./pages/register";

import Singleblog from "./pages/singleblogs";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>)
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      { path: "/", element: <Home />, },
{path:"/post/:id",  element:<Singleblog /> , },
// {path:"/singleblogs",   element:<Singleblog /> , },

{ path: "/write", element: <Write/> }
    ],
  },

  { path: "/login", element: <Login /> },


  { path: "/register", element: <Register/> },

  




])

function App() {

  return (

    < div className="">

      <RouterProvider router={router} />





    </div>
  )
}

export default App
