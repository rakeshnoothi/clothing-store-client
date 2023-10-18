import { useState } from "react";
// material icon imports.
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// custom hook imports.
import useCart from "../../../hooks/useCart";
import useProduct from "../../../hooks/useProduct";
import useAuth from "../../../hooks/useAuth";
import axiosInstance from "../../../axiosInstance";

const Description = () => {
    const { user } = useAuth();
    const [quantity, setQuantity] = useState(0);
    const { product } = useProduct();
    const { cartItems, setCartItems } = useCart();

    const addToCart = async product => {
        if (user) {
            try {
                const response = await axiosInstance.post(
                    "/carts?populate[products][populate][image1]=image1",
                    {
                        data: {
                            productId: product.id,
                            totalProducts: 1,
                            products: [product.id],
                        },
                    }
                );
                setCartItems([...cartItems, response.data.data]);
                alert("product added to cart!");
            } catch (err) {
                // if the error meassage is "this attribute must be unique" that means the item is already in the cart and just update totalproducts + 1
                if (
                    err.response.data.error.message ===
                    "This attribute must be unique"
                ) {
                    console.log("cartItems bro", cartItems);
                    const duplicateProduct = cartItems.find(item => {
                        if (item.attributes.productId === product.id) {
                            return item;
                        }
                    });
                    try {
                        await axiosInstance.put(
                            `/carts/${duplicateProduct.id}?populate[products][populate][image1]=image1`,
                            {
                                data: {
                                    totalProducts:
                                        duplicateProduct.attributes
                                            .totalProducts + 1,
                                },
                            }
                        );
                        const updatedCartItems = cartItems.map(item => {
                            if (item.attributes.productId === product.id) {
                                item.attributes.totalProducts =
                                    item.attributes.totalProducts + 1;
                                return item;
                            }
                            return item;
                        });
                        setCartItems(updatedCartItems);
                        alert("product added to cart!");
                    } catch (err) {
                        console.log(err);
                        alert(
                            "sorry cannot add product to cart at this moment!"
                        );
                    }
                }
            }
        } else {
            alert("Please login to add to cart");
        }
    };

    const handleQuantity = type => {
        if (type === "increase" && quantity >= 0 && quantity < 5) {
            return setQuantity(quantity + 1);
        }
        if (type === "decrease" && quantity > 0) {
            return setQuantity(quantity - 1);
        }
    };
    return (
        <div
            id="about_description_wrapper"
            className="w-full flex flex-col gap-4"
        >
            <span className="uppercase text-xl font-bold">
                {product.attributes.name}
            </span>
            <span className="font-semibold text-lg">
                <span>&#8377;</span> {product.attributes.price}
            </span>
            <p>{product.attributes.desc}</p>
            <div className="flex gap-2 items-center">
                <button
                    className="w-10 h-10 text-xl font-bold cs-button-color-standard"
                    onClick={() => handleQuantity("decrease")}
                >
                    -
                </button>
                <span className="text-lg font-semibold w-10 h-10 flex justify-center items-center">
                    {quantity}
                </span>
                <button
                    className="w-10 h-10 text-xl font-bold cs-button-color-standard"
                    onClick={() => handleQuantity("increase")}
                >
                    +
                </button>
            </div>
            <div className="flex gap-4">
                <button
                    className="p-2 flex items-center gap-2 cs-button-color-standard"
                    onClick={() => addToCart(product)}
                >
                    <ShoppingCartOutlinedIcon />
                    Add To Cart
                </button>
                <button className="p-2 flex items-center gap-2 cs-button-color-standard">
                    <FavoriteBorderOutlinedIcon />
                    Add To Wishlist
                </button>
            </div>
        </div>
    );
};
export default Description;
