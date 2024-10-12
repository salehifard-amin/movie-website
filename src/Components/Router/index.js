import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "../Header";

export default function MyRouter() {
    const newRouter = createBrowserRouter( [
        {
            path: "/",
            element: <Header />,
        },
    ] )
    return <RouterProvider router = {newRouter} />
}