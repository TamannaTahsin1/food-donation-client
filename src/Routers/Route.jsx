import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddFood from "../Pages/AddFood/AddFood";
import ManageFoods from "../Pages/ManageFoods/ManageFoods";
import About from "../Components/Header/About";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const createdRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "availableFoods/:food_name",
        element: <AvailableFoods></AvailableFoods>,
        loader: () => fetch('http://localhost:5000/features')
      },
      {
        path: "addFood",
        element: <AddFood></AddFood>
      },
      {
        path: "manageFoods",
        element: <ManageFoods></ManageFoods>
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default createdRoute;
