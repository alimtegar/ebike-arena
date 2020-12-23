import Slider from "react-slick";
import OutlineButton from './OutlineButton';

const MySlider = () => {
    let slider;
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
    const sliderImages = [
        {}
    ];

    return (
        <section className="slider bg-white-300 relative h-40 md:h-128 overflow-hidden">
            <Slider ref={(c) => slider = c} {...settings}>
                <div className="flex justify-center items-center h-full overflow-hidden focus:outline-none">
                    <img className="object-cover h-full focus:outline-none" src="https://www.rodalink.com/pub/media/wysiwyg/promotion_SG_2020/Nov_Des/21.jpg" alt="Slider Image" />
                </div>
                <div className="flex justify-center items-center h-full overflow-hidden focus:outline-none">
                    <img className="object-cover h-full focus:outline-none" src="https://www.rodalink.com/pub/media/wysiwyg/promotion_SG_2020/Nov_Des/21_free_shipping.jpg" alt="Slider Image" />
                </div>
            </Slider>

            
            <div className="absolute hidden md:flex justify-between top-1/2 left-0 -translate-y-1/2 w-full px-12">
                <OutlineButton width={11} height={11} onClick={() => slider.slickPrev()}>
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </OutlineButton>
                <OutlineButton width={11} height={11} onClick={() => slider.slickNext()}>
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </OutlineButton>
            </div>
        </section>
    );
};

export default MySlider;