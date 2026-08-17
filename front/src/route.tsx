import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { App } from "./App";
import { CreateQuiz } from "./components/CreateQuiz";
import { QuizzPage } from "./components/SelectQuizz";
import { FinishedQuiz } from "./components/FinishedQuiz";
import { EditQuiz } from "./components/EditQuizz";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
    },
    {
        path: "/createquiz/",
        element: <CreateQuiz />,
    },
    {
        path: "/quizz/:id",
        element: <QuizzPage />,
    },
    {
        path: "/editquiz/:id",
        element: <EditQuiz />,
    },
    {
        path: "/test/",
        element: <FinishedQuiz />,
    },

]);
