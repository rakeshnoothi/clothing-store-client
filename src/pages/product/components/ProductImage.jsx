import { useState } from "react";

const productImages = [
    "https://assets.ajio.com/medias/sys_master/root/20230816/GS3w/64dccf30eebac147fccd0ba9/wrangler_black_washed_jeans_with_5-pocket_styling.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20230816/2Ufb/64dca39beebac147fccc699a/lee_green_men_checked_slim_fit_shirt_with_patch_pocket.jpg",
];

const SideImage = ({ productImage, setMainImage }) => {
    return (
        <div
            className="hover:cursor-pointer"
            onClick={() => setMainImage(productImage)}
        >
            <img
                src={productImage}
                alt=""
                className="w-full h-full object-cover"
            />
        </div>
    );
};

const ProductImage = () => {
    const [mainImage, setMainImage] = useState(productImages[0]);

    return (
        <>
            <div id="side_images_wrapper" className="w-[10%] space-y-2">
                {productImages.map(productImage => {
                    return (
                        <SideImage
                            productImage={productImage}
                            key={productImage}
                            setMainImage={setMainImage}
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
