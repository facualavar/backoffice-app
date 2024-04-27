import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../sections/Home/Home";
import Login from "../sections/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
