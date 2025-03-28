import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ChallengePage from "../pages/ChallengePage";
import PrivateRoute from "./PrivateRoute";
import QuesstionPage from "../pages/QuesctionPage";

const route = createBrowserRouter([
    {
        path:'/',
        element:<LoginPage/>,
    },
    {
        element:<PrivateRoute/>,
        children:
        [
            {
                path:'/challenge',
                element:<ChallengePage/>,
            },
            {
                path:"/challenge/:qId",
                element:<QuesstionPage/>,
            }
        ]
    },

])


export default route;