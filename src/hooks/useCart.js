import { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";

const useCart = () => useContext(CartContext);

export default useCart;
