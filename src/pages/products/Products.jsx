import Filter from "./components/Filter";
import List from "./components/List";

const Products = () => {
    return (
        <div className="grow flex">
            <Filter />
            <List />
        </div>
    );
};
export default Products;

// filters.
// what a product has.
// price, type, brand.
// filter by price.
// sort by price radio buttons.
// checkbox for multiple type products and brand.

/*
prob.
printing type of product efficiently.

every product has type.
i need to show every product type at filters.
store every product type seperatly.
    consider requested product type and filter category for that type.
    if 1000 of products -> iterate through every product for that specific types.

hard code types.

*/
