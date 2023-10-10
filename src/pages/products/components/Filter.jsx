const ProductType = ({ type }) => {
    return (
        <div className="flex gap-2">
            <input type="checkbox" name={type} id={type} value={type} />
            <label htmlFor={type} className="cursor-pointer">
                {type}
            </label>
        </div>
    );
};

const productTypes = ["pant", "shirt", "kurta"];

const Filter = () => {
    return (
        <div
            id="filters-wrapper"
            className="w-60 p-4 flex flex-col gap-4 border-r-2 border-gray-200"
        >
            <div id="product-type">
                <div className="text-lg font-semibold uppercase">
                    product type
                </div>
                {productTypes.map(productType => (
                    <ProductType type={productType} key={productType} />
                ))}
            </div>
            <div id="filter-price">
                <span className="text-lg uppercase block font-semibold">
                    filter by price
                </span>
                <div className="flex gap-2">
                    <span>0</span>
                    <input
                        type="range"
                        name="price-range"
                        id="price-range"
                        min={0}
                        max={1000}
                    />
                    <span>1000</span>
                </div>
            </div>
            <div id="sorty-price">
                <span className="uppercase text-lg font-semibold">
                    sort by price
                </span>
                <div className="flex gap-2">
                    <input type="radio" name="price" id="lowest" value="asc" />
                    <label htmlFor="lowest">Lowest First</label>
                </div>
                <div className="flex gap-2">
                    <input type="radio" name="price" id="highest" value="dsc" />
                    <label htmlFor="highest">Highest First</label>
                </div>
            </div>
        </div>
    );
};
export default Filter;
