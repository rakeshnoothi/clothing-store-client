import Description from "./components/Description";
import ProductImage from "./components/ProductImage";

const Product = () => {
    return (
        <div className="p-4 flex gap-6 grow">
            <ProductImage />
            <Description />
        </div>
    );
};
export default Product;
