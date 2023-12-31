import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

const useAuth = () => useContext(AuthContext);

export default useAuth;
