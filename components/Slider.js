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
        { title: 'Slider Item 1', url: '#', image: 'https://www.rodalink.com/pub/media/wysiwyg/promotion_ID_2020/Nov_Des/polygon_zeta.jpg', description: 'lorem ipsum dolor sit amet', },        
    ];

    return (
        <section className="slider bg-gray-300 relative h-48 md:h-128 overflow-hidden">
            <Slider ref={(c) => sliderRef = c} {...settings}>
                {slider.map((sliderItem, key) => (
                    <div className="h-full focus:outline-none" key={key}>
                        <a className="relative flex justify-center items-center w-full h-full overflow-hidden" href={sliderItem.url}>
                            <img className="absolute h-full focus:outline-none" src={sliderItem.image} alt={sliderItem.title} />
                        </a>
                    </div>
                ))}
            </Slider>

            {/* Add condition if slider < 1 for later */}
            <div className="absolute hidden md:flex justify-between top-1/2 left-0 transform -translate-y-1/2 w-full px-12">
                <OutlineButton width={11} height={11} onClick={() => sliderRef.slickPrev()}>
                    <ChevronLeftIcon className="w-5 h-5" />
                </OutlineButton>
                <OutlineButton width={11} height={11} onClick={() => sliderRef.slickNext()}>
                    <ChevronRightIcon className="w-5 h-5" />
                </OutlineButton>
            </div>
        </section>
    );
};

export default MySlider;