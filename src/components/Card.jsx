import { Link } from "react-router-dom";

const Card = ({ cardData }) => {
    // temporary variable.
    return (
        <Link
            to={`/product/${cardData.category}`}
            className="max-w-[300px] min-w-[182px] flex flex-col gap-2 p-2 border border-gray-300 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-105 transition-all"
        >
            <div>
                <img
                    src="https://assets.ajio.com/medias/sys_master/root/20230825/YfhT/64e7caebddf779151972a68f/wrangler_blue_lightly_washed_skinny_fit_jeans.jpg"
                    alt=""
                    className="w-full h-full"
                />
            </div>
            <div id="product-info" className="flex flex-col gap-2">
                <span className="font-semibold">T-shirt worth</span>
                <span>price</span>
            </div>
        </Link>
    );
};
export default Card;
