import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const CartItem = ({ item, deleteCartItem }) => {
    return (
        <div id="cart-item" className="flex gap-2 items-center">
            <div className="max-w-[5rem]">
                <img
                    src={`${import.meta.env.VITE_IMAGE_BASE_URL}${
                        item.attributes.products.data[0].attributes.image1.data
                            .attributes.url
                    }`}
                    alt="cart item image"
                    className="w-full h-full object-cover"
                />
            </div>
            <div id="item-details" className="grow">
                <div className="font-bold text-md">
                    {item.attributes.products.data[0].attributes.name}
                </div>
                <div>{item.attributes.products.data[0].attributes.desc}</div>
                <div className="flex justify-between">
                    <div className="space-x-2 text-cyan-500">
                        <span>{item.attributes.totalProducts}</span>
                        <span>X</span>
                        <span>
                            {item.attributes.products.data[0].attributes.price}
                        </span>
                    </div>
                    <div className="space-x-2">
                        <span className="font-semibold">Total:</span>
                        <span>
                            {item.attributes.totalProducts *
                                item.attributes.products.data[0].attributes
                                    .price}
                        </span>
                    </div>
                </div>
            </div>
            <div onClick={() => deleteCartItem(item.id)}>
                <DeleteOutlineOutlinedIcon className="text-red-500 hover:cursor-pointer" />
            </div>
        </div>
    );
};

export default CartItem;
