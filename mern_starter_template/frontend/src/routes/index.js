import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children : [
            {
                path : 'home',
                element:<Home/>
            },
            //create more children and use
        ]
    }
])

export default router 