import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const user = useAuth();
    console.log(user);

    if (user) {
        console.log("i ran from user");
        return <Navigate to="/" />;
    } else {
        return <div>Login</div>;
    }
};
export default Login;
