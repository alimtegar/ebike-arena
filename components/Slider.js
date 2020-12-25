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
        { title: 'Slider', url: '#', image: 'https://www.rodalink.com/pub/media/wysiwyg/promotion_SG_2020/Nov_Des/21.jpg', },
        { title: 'Slider', url: '#', image: 'https://www.rodalink.com/pub/media/wysiwyg/promotion_SG_2020/Nov_Des/21_free_shipping.jpg', }
    ];

    return (
        <section className="slider bg-white-300 relative h-40 md:h-128 overflow-hidden">
            <Slider ref={(c) => sliderRef = c} {...settings}>
                {slider.map((sliderItem, key) => (
                    <div className="h-full focus:outline-none" key={key}>
                        <a className="flex justify-center items-center h-full overflow-hidden" href={sliderItem.url}>
                            <img className="object-cover h-full focus:outline-none" src={sliderItem.image} alt={sliderItem.title} />
                        </a>
                    </div>
                ))}
            </Slider>
            
            {/* Add condition if slider < 1 for later */}
            <div className="absolute hidden md:flex justify-between top-1/2 left-0 -translate-y-1/2 w-full px-12">
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