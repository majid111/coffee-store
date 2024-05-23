import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import AddCoffee from "./Components/AddCoffee.jsx";
import Home from "./Components/Home.jsx"
import SignIn from "./Components/SignIn.jsx";
import SignUp from "./Components/SignUp.jsx";
import AuthProvider from "./Components/AuthProvider/AuthProvider.jsx";
import Users from "./Components/Users.jsx";
import User from "./Components/User.jsx";
import UpdateUser from "./Components/UpdateUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('http://localhost:5000/coffee')
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: ()=> fetch('http://localhost:5000/users'),
      },
      {
        path: "/users/:id",
        element: <User></User>,
        loader: ({params})=> fetch(`http://localhost:5000/users/${params.id}`),
      },
      {
        path: "/userUpdate/:id",
        element: <UpdateUser></UpdateUser>,
        loader: ({params})=> fetch(`http://localhost:5000/users/${params.id}`),
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
