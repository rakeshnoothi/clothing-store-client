import Card from "../../../components/Card";

const FeaturedProducts = ({ type, products }) => {
    return (
        <div className="space-y-4 p-4">
            <span className="text-xl font-semibold uppercase">{type}</span>
            <div id="card-wrapper" className="flex gap-4 justify-center ">
                {products.map(product => {
                    return <Card product={product} key={product.id} />;
                })}
            </div>
        </div>
    );
};
export default FeaturedProducts;
