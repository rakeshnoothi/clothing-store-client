const SideImage = ({ productImage, mainImage, setMainImage }) => {
    return (
        <div
            className="bg-black hover:cursor-pointer"
            onClick={() => setMainImage(productImage)}
        >
            <img
                src={`${import.meta.env.VITE_IMAGE_BASE_URL}${productImage}`}
                alt=""
                className={`w-full h-full object-cover ${
                    productImage === mainImage ? "opacity-100" : "opacity-50"
                }`}
            />
        </div>
    );
};

export default SideImage;
