import Card from "../../../components/Card";

const List = ({ products }) => {
    return (
        <div
            id="list-wrapper"
            // desktop to mobile approached grid
            className="grow p-4 grid gap-4 max-[640px]:grid-cols-1 max-[840px]:grid-cols-2 max-[1050px]:grid-cols-3 lg:grid-cols-4"
        >
            {products.map(product => {
                return <Card product={product} key={product.id} />;
            })}
        </div>
    );
};
export default List;

// implement pagination maximum products per request should be 16
//
