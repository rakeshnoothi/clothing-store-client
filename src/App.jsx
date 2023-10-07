// router dom imports
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// pages imports.
import Home from "./pages/home/Home";
import Products from "./pages/products/products";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";
import PrivateRoute from "./pages/PrivateRoute";

//component imports.
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Profile from "./pages/profile/Profile";
import AuthContextProvider from "./context/AuthContextProvider";

//main layout
const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

//create routes for pages.
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/product/:id",
                element: <Product />,
            },
            {
                path: "/products/:id",
                element: <Products />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                // access only for authorized users.
                path: "/cart",
                element: <PrivateRoute element={<Cart />} />,
            },
            {
                path: "/profile",
                element: <PrivateRoute element={<Profile />} />,
            },
        ],
    },
]);

const App = () => {
    return (
        <AuthContextProvider>
            <RouterProvider router={router}>
                <Layout />
            </RouterProvider>
        </AuthContextProvider>
    );
};
export default App;
