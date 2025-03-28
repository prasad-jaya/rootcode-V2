import { toast } from "react-toastify";
import { useLoginMutation } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";

const useLogin = () => {
    const [ login ] = useLoginMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginSubmit = async (data) =>{
        try {
            const result = await login(data).unwrap();
            console.log('Login successful:', result);
            toast.success(`Welcome`);
            
            if (result.token) {
                dispatch(setUser(result));
                navigate('/challenge');
            }
        } catch (error) {
            console.error('Login failed:', error);
            toast.error("Login failed. Please check your credentials.");
        }
    }

    return { loginSubmit };
}

export default useLogin;