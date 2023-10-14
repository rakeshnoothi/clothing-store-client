import { useContext } from "react";
import { ProductContext } from "../context/ProductContextProvider";

// This hook is used for providing all the details of the product at product page when clicked on a product card.
const useProduct = () => useContext(ProductContext);

export default useProduct;
