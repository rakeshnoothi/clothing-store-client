import { useState } from "react";
import useProduct from "../../../hooks/useProduct";

const SideImage = ({ productImage, mainImage, setMainImage }) => {
    return (
        <div
            className="bg-black hover:cursor-pointer"
            onClick={() => setMainImage(productImage)}
        >
            <img
                src={productImage}
                alt=""
                className={`w-full h-full object-cover ${
                    productImage === mainImage ? "opacity-100" : "opacity-50"
                }`}
            />
        </div>
    );
};

const ProductImage = () => {
    const { product } = useProduct();
    const [mainImage, setMainImage] = useState(product.images[0]);

    return (
        <>
            <div id="side_images_wrapper" className="w-[10%] space-y-2">
                {product.images.map(productImage => {
                    return (
                        <SideImage
                            productImage={productImage}
                            key={productImage}
                            setMainImage={setMainImage}
                            mainImage={mainImage}
                        />
                    );
                })}
            </div>
            <div id="main_image" className="w-1/2 bg-red-400 max-w-[460px]">
                <img
                    src={mainImage}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
        </>
    );
};
export default ProductImage;
