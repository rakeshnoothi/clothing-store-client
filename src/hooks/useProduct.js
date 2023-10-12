import { useContext } from "react";
import { ProductContext } from "../context/ProductContextProvider";

const useProduct = () => useContext(ProductContext);

export default useProduct;
