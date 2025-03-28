import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import RootLayout from "../pages/RootLayout";

const PrivateRoute = () =>{
    const authenticated = useSelector((state) =>{
        return state.user.authenticated;
    })
    return authenticated ? <RootLayout/> : <Navigate to={'/'}/>;
}
export default PrivateRoute;