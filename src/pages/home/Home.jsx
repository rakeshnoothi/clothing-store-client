import FeaturedProducts from "./components/FeaturedProducts";
import Slider from "./components/Slider";

const Home = () => {
    return (
        <div className="py-6 flex flex-col gap-4">
            <Slider />
            <FeaturedProducts type="Featured" />
        </div>
    );
};
export default Home;
