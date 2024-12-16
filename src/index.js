import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./views/Home/Home"
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Detail from './views/Detail/Detail';
import Add from "./views/Add/Add";
import Update from "./views/Update/Update"

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/detail/:item",
        element: <Detail />,
    },
    {
        path: "/edit/:item",
        element: <Update />
    },
    {
        path: "/add",
        element: <Add />,
    }
]);
root.render(<RouterProvider router={router} />);

