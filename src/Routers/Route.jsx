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
import PrivateRoute from "./PrivateRoute";
import NewAddFoods from "../Pages/AddFood/NewAddFoods";
import UpdateAddedFood from "../Pages/AddFood/UpdateAddedFood";

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
        path: "/about",
        element: <About></About>
      },
      {
        path: "/allFoods",
        element:<PrivateRoute><AllFoods></AllFoods></PrivateRoute>,
        loader: () => fetch('https://food-donation-server-sooty.vercel.app/features')
      },
      {
        path: "/availableFoods/:food_name",
        element: <PrivateRoute><AvailableFoods></AvailableFoods></PrivateRoute>,
        loader: () => fetch('https://food-donation-server-sooty.vercel.app/features')
      },
      {
        path: "/details/:id",
        element: <FoodDetails></FoodDetails>,
        loader: ({params}) => fetch(`https://food-donation-server-sooty.vercel.app/features/${params.id}`)
      },
      {
        path: "/addFood",
        element: <AddFood></AddFood>,
      },
      {
        path: "/foods",
        element: <PrivateRoute><NewAddFoods></NewAddFoods></PrivateRoute>,
        loader: () => fetch('https://food-donation-server-sooty.vercel.app/foods')
      },
      {
        path: "/updateFood/:id",
        element: <UpdateAddedFood></UpdateAddedFood>,
        loader: ({params}) => fetch(`https://food-donation-server-sooty.vercel.app/foods/${params.id}`)
      },
      {
        path: "/manageFoods",
        element: <PrivateRoute><ManageFoods></ManageFoods></PrivateRoute>,
      },
      {
        path: "/login",
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
