import SlickSlider from "react-slick";
import SliderItem from './SliderItem';
import OutlineButton from '../OutlineButton';
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons';

const Slider = ({ slider }) => {
    let sliderRef;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: true,
    };

    return (
        <section className="group slider bg-gray-300 relative h-36 md:h-128 overflow-hidden">
            <SlickSlider ref={(c) => sliderRef = c} {...settings}>
                {slider.map((sliderItem, key) => (
                    <div className="h-full focus:outline-none" key={key}>
                        <SliderItem {...sliderItem} />
                    </div>
                ))}
            </SlickSlider>

            {slider.length > 1 ? (
                <div className="absolute hidden md:flex justify-between top-1/2 left-0 transform -translate-y-1/2 w-full px-12 pointer-events-none">
                    <OutlineButton width={11} height={11} onClick={() => sliderRef.slickPrev()}>
                        <ChevronLeftIcon width={5} height={5} />
                    </OutlineButton>
                    <OutlineButton width={11} height={11} onClick={() => sliderRef.slickNext()}>
                        <ChevronRightIcon width={5} height={5} />
                    </OutlineButton>
                </div>
            ) : null}
        </section>
    );
};

export default Slider;