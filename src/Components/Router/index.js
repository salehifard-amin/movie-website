import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import SingleMovie from "../../Pages/SingleMedia";


export default function MyRouter() {
    const newRouter = createBrowserRouter( [
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/contents/:contentType/:mediaId",
            element: <SingleMovie />,
        },
    ] )
    return <RouterProvider router = {newRouter} />
}