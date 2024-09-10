// import { useState } from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from './pages/login'
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./pages/register";
import Single from "./pages/singleblog";
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
// {path:"/singleblog/:id",  element:<Single /> , }
{path:"/singleblogs",  element:<Singleblog /> , }


    ],
  },

  { path: "/login", element: <Login /> },


  { path: "/register", element: <Register/> }




])

function App() {

  return (

    < div className="">

      <RouterProvider router={router} />





    </div>
  )
}

export default App
