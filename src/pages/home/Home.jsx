// local component imports.
import FeaturedProducts from "./components/FeaturedProducts";
import Slider from "./components/Slider";
import Grid from "./components/Grid";
import useFetch from "../../hooks/useFetch";

const Home = () => {
    const { data, isLoading, error } = useFetch(
        "/products?filters[type][$eq]=featured&populate[image1]=image1&populate[image2]=image2"
    );
    console.log(data);
    return (
        <div className="flex flex-col gap-4">
            <Slider />
            {isLoading ? (
                <div>Loading</div>
            ) : (
                data && (
                    <FeaturedProducts
                        type="Featured"
                        products={data.data.data}
                    />
                )
            )}
            <Grid />
            {/* <FeaturedProducts type="Trending" products={products} /> */}
        </div>
    );
};
export default Home;

// fetch featured products from here and filter accordingly.
// fetched featured products should be array.
// fetched products should be 5 featured and 5 trending.
