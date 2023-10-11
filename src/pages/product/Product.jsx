import Description from "./components/Description";
import ProductImage from "./components/ProductImage";

const Product = () => {
    return (
        <div className="p-4 flex gap-2">
            <ProductImage />
            <Description />
        </div>
    );
};
export default Product;
