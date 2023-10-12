import { Link, useNavigate } from "react-router-dom";
import useProduct from "../hooks/useProduct";

const Card = ({ product }) => {
    // temporary variable.
    const { setProduct } = useProduct();
    const navigate = useNavigate();
    return (
        <Link
            // to={`/product/${product.id}`}
            className="max-w-[300px] min-w-[182px] flex flex-col gap-2 p-2 border border-gray-300 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-105 transition-all"
            onClick={() => {
                setProduct(product);
                navigate(`/product/${product.id}`);
            }}
        >
            <div>
                <img
                    src={product.images[0]}
                    alt="product image"
                    className="w-full h-full"
                />
            </div>
            <div id="product-info" className="flex flex-col gap-2">
                <span className="font-semibold">{product.name}</span>
                <span>{product.price}</span>
            </div>
        </Link>
    );
};
export default Card;
