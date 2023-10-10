import Card from "../../../components/Card";

const FeaturedProducts = ({ type }) => {
    return (
        <div className="space-y-4 p-4">
            <span className="text-xl font-semibold uppercase">{type}</span>
            <div id="card-wrapper" className="flex gap-4 justify-center ">
                {/* maximum cards should be four */}
                {/* temporary cardata field value */}
                <Card cardData={{ category: "men" }} />
                <Card cardData={{ category: "men" }} />
                <Card cardData={{ category: "men" }} />
                <Card cardData={{ category: "men" }} />
            </div>
        </div>
    );
};
export default FeaturedProducts;
