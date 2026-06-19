import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { App } from "./App";
import { SelectQuizz } from "./components/SelectQuizz";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
    },
    {
        path: "/quizz/:id",
        element: <SelectQuizz/>,
    },
]);