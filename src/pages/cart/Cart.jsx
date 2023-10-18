//Custom hook imports.
import axiosInstance from "../../axiosInstance";
import useCart from "../../hooks/useCart";
import CartItem from "./components/CartItem";

const Cart = () => {
    const { cartItems, setCartItems } = useCart();
    console.log("cart items", cartItems);

    const deleteCartItem = async itemId => {
        try {
            const response = await axiosInstance.delete(`/carts/${itemId}`);
            alert("Item deleted!");
        } catch (err) {
            console.log(err);
            console.log("Server error please try again!");
        }
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
                            key={item.attributes.products.data[0].id}
                            item={item}
                        />
                    );
                })
            )}
            {cartItems.length === 0 ? null : (
                <>
                    <div className="flex justify-between font-bold">
                        <span>SUB TOTAL:</span>
                        <div>
                            <span>&#8377;</span>
                            <span>none</span>
                        </div>
                    </div>
                    <div>
                        <button className="cs-button-color-standard p-2">
                            PROCEED TO CHECKOUT
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};
export default Cart;
