import Card from "../../../components/Card";

const FeaturedProducts = ({ type }) => {
    return (
        <div className="space-y-6 px-6">
            <span className="text-xl font-semibold uppercase">{type}</span>
            <div id="card-wrapper" className="flex gap-4 justify-center">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};
export default FeaturedProducts;
