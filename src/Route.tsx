import { createBrowserRouter } from "react-router";
import NameLayout2 from "./layout/MainLayout";
import Home from "./pages/MainLayout/Home";
import About from "./pages/MainLayout/About";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <NameLayout2 />,
        children: [
            {
                index: true,
                element: <Home />,
            },
             {
                path: 'about',
                element: <About />,
            }
        ],
    },
   
]);