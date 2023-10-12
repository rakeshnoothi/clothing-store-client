import { Link } from "react-router-dom";

const Grid = () => {
    return (
        <div className="overflow-hidden px-4 flex h-[471px] gap-2">
            <div id="left" className="w-2/3 flex flex-col gap-2">
                <div id="Women" className="h-1/2 relative">
                    <img
                        src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                    <Link
                        to="/products/women"
                        className="absolute inset-0 w-min h-min p-2 m-auto font-bold cs-button-color cs-button-color-hover"
                    >
                        Women
                    </Link>
                </div>
                <div id="lef-bottom" className="h-1/2 flex  gap-2 grow">
                    <div id="Men" className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1550246140-29f40b909e5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <Link
                            to="/products/men"
                            className="absolute inset-0 w-min h-min p-2 m-auto font-bold cs-button-color cs-button-color-hover"
                        >
                            Men
                        </Link>
                    </div>
                    <div id="children" className="grow relative">
                        <img
                            src="https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <Link
                            to="/products/children"
                            className="absolute inset-0 w-min h-min p-2 m-auto font-bold cs-button-color cs-button-color-hover"
                        >
                            Children
                        </Link>
                    </div>
                </div>
            </div>
            <div id="accessories" className="w-1/2 relative">
                <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                    className="w-full h-full object-cover"
                />
                <Link
                    to="/products/accessories"
                    className="absolute inset-0 w-min h-min p-2 m-auto font-bold cs-button-color cs-button-color-hover"
                >
                    Accessories
                </Link>
            </div>
        </div>
    );
};
export default Grid;
