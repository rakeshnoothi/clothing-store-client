//Custom hook imports.
import useCart from "../../hooks/useCart";

//material ui icons.
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const CartItem = ({ item, deleteCartItem }) => {
    return (
        <div id="cart-item" className="flex gap-2 items-center">
            <div className="max-w-[5rem]">
                <img
                    src={item.images[0]}
                    alt="cart item image"
                    className="w-full h-full object-cover"
                />
            </div>
            <div id="item-details">
                <div className="font-bold text-md">{item.name}</div>
                <div>{item.description}</div>
                <div className="flex justify-between">
                    <div className="space-x-2 text-cyan-500">
                        <span>1</span>
                        <span>X</span>
                        <span>{item.price}</span>
                    </div>
                    <div className="space-x-2">
                        <span className="font-semibold">Total:</span>
                        <span>{1 * item.price}</span>
                    </div>
                </div>
            </div>
            <div onClick={() => deleteCartItem(item.id)}>
                <DeleteOutlineOutlinedIcon className="text-red-500 hover:cursor-pointer" />
            </div>
        </div>
    );
};

const Cart = () => {
    const { cartItems, setCartItems } = useCart();

    const deleteCartItem = itemId => {
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCartItems);
    };

    return (
        <div className="bg-white w-[40rem] space-y-4 p-4 absolute right-2 top-16 shadow-md rounded-md transition-all">
            <div className="font-bold text-xl">Products In Your Cart</div>
            {cartItems.length === 0 ? (
                <div className="text-xl">Your cart is empty</div>
            ) : (
                cartItems.map(item => {
                    return (
                        <CartItem
                            deleteCartItem={deleteCartItem}
                            key={item.id}
                            item={item}
                        />
                    );
                })
            )}
            <div className="flex justify-between font-bold">
                <span>SUB TOTAL:</span>
                <div>
                    <span>&#8377;</span>
                    <span>1000</span>
                </div>
            </div>
            <div>
                <button className="cs-button-color-standard p-2">
                    PROCEED TO CHECKOUT
                </button>
            </div>
        </div>
    );
};
export default Cart;
