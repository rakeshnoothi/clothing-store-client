// local component imports.
import FeaturedProducts from "./components/FeaturedProducts";
import Slider from "./components/Slider";
import Grid from "./components/Grid";

const Home = () => {
    return (
        <div className="flex flex-col gap-4">
            <Slider />
            <FeaturedProducts type="Featured" />
            <Grid />
            <FeaturedProducts type="Trending" />
        </div>
    );
};
export default Home;
