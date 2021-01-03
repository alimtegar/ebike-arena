import Slider from "react-slick";
import OutlineButton from './OutlineButton';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

const MySlider = () => {
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
    const slider = [
        { title: 'Slider 1', url: '#', image: '/images/slider-1.jpg', description: 'Slider 1', },
        { title: 'Slider 2', url: '#', image: '/images/slider-2.jpg', description: 'Slider 2', },
        { title: 'Slider 3', url: '#', image: '/images/slider-3.jpg', description: 'Slider 3', },
    ];

    return (
        <section className="group slider bg-gray-300 relative h-36 md:h-128 overflow-hidden">
            <Slider ref={(c) => sliderRef = c} {...settings}>
                {slider.map((sliderItem, key) => (
                    <div className="h-full focus:outline-none" key={key}>
                        <a className="relative flex justify-center items-center w-full h-full overflow-hidden" href={sliderItem.url}>
                            <img className="absolute max-w-none h-full md:h-auto w-auto md:w-full focus:outline-none" src={sliderItem.image} alt={sliderItem.title} />
                        </a>
                    </div>
                ))}
            </Slider>

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

export default MySlider;