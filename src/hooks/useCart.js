import { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";

// Maintains the state of cart items that are added to the cart.
const useCart = () => useContext(CartContext);

export default useCart;
