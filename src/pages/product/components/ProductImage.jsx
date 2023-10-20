import { useState } from "react";
import useProduct from "../../../hooks/useProduct";
import SideImage from "./SideImage";

const ProductImage = () => {
    const { product } = useProduct();
    const [mainImage, setMainImage] = useState(
        product.attributes.image1.data.attributes.url
    );

    const arr = [
        product.attributes.image1.data.attributes.url,
        product.attributes.image2.data.attributes.url,
    ];

    return (
        <>
            <div id="side-images-wrapper" className="w-[10%] space-y-2">
                {arr.map(productImage => {
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
            <div
                id="main-image"
                className="w-1/2 bg-red-400 max-w-[460px] max-h-[550px]"
            >
                <img
                    src={`${import.meta.env.VITE_IMAGE_BASE_URL}${mainImage}`}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
        </>
    );
};
export default ProductImage;
