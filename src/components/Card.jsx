import { Link, useNavigate } from "react-router-dom";
import useProduct from "../hooks/useProduct";

const Card = ({ product }) => {
    // temporary variable.
    const { setProduct } = useProduct();
    const navigate = useNavigate();
    return (
        <Link
            // to={`/product/${product.id}`}
            className="min-w-[182px] max-w-[300px] flex flex-col gap-2 p-2 border border-gray-300 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-105 transition-all"
            onClick={() => {
                setProduct(product);
                navigate(`/product/${product.id}`);
            }}
        >
            <div className="h-full max-h-[333px]">
                <img
                    src={`${import.meta.env.VITE_IMAGE_BASE_URL}${
                        product.attributes.image1.data.attributes.url
                    }`}
                    alt="product image"
                    className="w-full h-full object-cover"
                />
            </div>
            <div id="product-info" className="flex flex-col gap-2">
                <span className="font-semibold">{product.attributes.name}</span>
                <span>{product.attributes.price}</span>
            </div>
        </Link>
    );
};
export default Card;
