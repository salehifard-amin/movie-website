import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../../Pages/HomePage";


export default function MyRouter() {
    const newRouter = createBrowserRouter( [
        {
            path: "/",
            element: <HomePage />,
        },
    ] )
    return <RouterProvider router = {newRouter} />
}