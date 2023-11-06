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
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import AllFoods from "../Pages/AllFoods/AllFoods";

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
        path: "details/:id",
        element: <FoodDetails></FoodDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/features/${params.id}`)
      },
      {
        path: "addFood",
        element: <AddFood></AddFood>
      },
      {
        path: "allFoods",
        element: <AllFoods></AllFoods>
      },
      {
        path: "manageFoods",
        element: <ManageFoods></ManageFoods>,
        loader: () => fetch('http://localhost:5000/foods')
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
