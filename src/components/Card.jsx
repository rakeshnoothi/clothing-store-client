import { Link } from "react-router-dom";

const Card = ({ cardData }) => {
    return (
        <Link to="/product/1" className="flex flex-col gap-2 p-2 w-[300px]">
            <div className="w-full h-[378px] relative">
                <img
                    src="https://assets.ajio.com/medias/sys_master/root/20230825/YfhT/64e7caebddf779151972a68f/wrangler_blue_lightly_washed_skinny_fit_jeans.jpg"
                    alt=""
                    className="w-full h-full object-cover"
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
