import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import SingleMovie from "../../Pages/SingleMedia";
import SearchPage from "../../Pages/SearchPage";


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
        {
            path: "/search",
            element: <SearchPage />,
        },
    ] )
    return <RouterProvider router = {newRouter} />
}