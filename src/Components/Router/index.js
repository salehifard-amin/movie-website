import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../../Pages/HomePage";

const SingleMovie = React.lazy( ()=> import("../../Pages/SingleMedia"))
const SearchPage = React.lazy( ()=> import("../../Pages/SearchPage"))


export default function MyRouter() {
    const newRouter = createBrowserRouter( [
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/contents/:contentType/:mediaId",
            element: (
                <Suspense fallback={<div> Loading... </div>}>
                    <SingleMovie />
                </Suspense>
            ),
        },
        {
            path: "/search",
            element: (
                <Suspense fallback={<div> Loading... </div>}>
                    <SearchPage />
                </Suspense>
            ),
        },
        {
            path: "/search",
            element: <SearchPage />,
        },
    ] )
    return <RouterProvider router = {newRouter} />
}