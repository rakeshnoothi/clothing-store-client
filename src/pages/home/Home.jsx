// local component imports.
import FeaturedProducts from "./components/FeaturedProducts";
import Slider from "./components/Slider";
import Grid from "./components/Grid";

const products = [
    {
        id: 1,
        category: "men",
        type: "shirt",
        name: "Fashionable Shirt collars",
        price: "100",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quidem corrupti ab unde qui eveniet tempore aliquam beatae fugit. Recusandae placeat nobis qui sed voluptas architecto alias pariatur, consectetur dolores.",
        images: [
            "https://assets.ajio.com/medias/sys_master/root/20230816/GS3w/64dccf30eebac147fccd0ba9/wrangler_black_washed_jeans_with_5-pocket_styling.jpg",
            "https://assets.ajio.com/medias/sys_master/root/20230816/2Ufb/64dca39beebac147fccc699a/lee_green_men_checked_slim_fit_shirt_with_patch_pocket.jpg",
        ],
    },
    {
        id: 2,
        category: "women",
        type: "pant",
        name: "Toneed Jeans",
        price: "300",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quidem corrupti ab unde qui eveniet tempore aliquam beatae fugit. Recusandae placeat nobis qui sed voluptas architecto alias pariatur, consectetur dolores.",
        images: [
            "https://assets.ajio.com/medias/sys_master/root/20230816/GS3w/64dccf30eebac147fccd0ba9/wrangler_black_washed_jeans_with_5-pocket_styling.jpg",
            "https://assets.ajio.com/medias/sys_master/root/20230816/2Ufb/64dca39beebac147fccc699a/lee_green_men_checked_slim_fit_shirt_with_patch_pocket.jpg",
        ],
        quantity: 0,
    },
];

const Home = () => {
    return (
        <div className="flex flex-col gap-4">
            <Slider />
            <FeaturedProducts type="Featured" products={products} />
            <Grid />
            <FeaturedProducts type="Trending" products={products} />
        </div>
    );
};
export default Home;

// fetch featured products from here and filter accordingly.
// fetched featured products should be array.
// fetched products should be 5 featured and 5 trending.
