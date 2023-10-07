import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ element }) => {
    const user = useAuth();
    console.log(user);

    if (user) {
        return element;
    } else {
        return <Navigate to="/login" />;
    }
};
export default PrivateRoute;
