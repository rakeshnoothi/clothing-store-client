//material icon imports.
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { useState } from "react";

//slider images
const sliderImages = [
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-07102023-MainBannerDailyChanging-Z1-P2-Misschasedifferenceofopinion-flat50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-07102023-MainBannerDailyChanging-Z1-P7-AxSuperdry-upto50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-07102023-MainBannerDailyChanging-Z1-P5-DNMXNetplay-under599.jpg",
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSliderAction = direction => {
        if (direction === "left") {
            return setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
        }
        return setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
    };

    return (
        <div id="slider" className="w-screen overflow-hidden relative">
            <div
                id="container"
                className="flex w-[300vw] transition-all"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                <img src={sliderImages[0]} alt="" className="w-full" />
                <img src={sliderImages[1]} alt="" className="w-full" />
                <img
                    src={sliderImages[2]}
                    alt=""
                    className="w-full object-cover"
                />
            </div>
            <div className="absolute bottom-10 left-1/2 flex gap-4">
                <button
                    className="bg-cyan-500 text-white w-10 h-10"
                    onClick={() => handleSliderAction("left")}
                >
                    <ChevronLeftOutlinedIcon />
                </button>
                <button
                    className="bg-cyan-500 text-white w-10 h-10"
                    onClick={() => handleSliderAction("right")}
                >
                    <ChevronRightOutlinedIcon />
                </button>
            </div>
        </div>
    );
};
export default Slider;
