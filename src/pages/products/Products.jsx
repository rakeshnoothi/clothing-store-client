import Filter from "./components/Filter";
import List from "./components/List";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Products = () => {
    let { id } = useParams();
    const { data, isLoading, error } = useFetch(
        `/categories?filters[name][$eq]=${id}&populate[products][populate][image1]=image1&populate[products][populate][image2]=image2`
    );
    return (
        <div className="grow flex">
            <Filter />
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                data && (
                    <List
                        products={data.data.data[0].attributes.products.data}
                    />
                )
            )}
        </div>
    );
};
export default Products;
