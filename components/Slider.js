import Slider from "react-slick";

const OutlineButton = ({ children, onClick, width, height }) => {
    const initClassName = 'flex justify-center items-center text-white border-2 hover:bg-white hover:text-gray-900 focus:outline-none';
    const widthClassName = width ? ' w-' + width : '';
    const heightClassName = height ? ' h-' + height : '';
    
    return (
        <button 
            className={initClassName + widthClassName + heightClassName}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

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
        <section className="slider bg-gray-300 relative h-128 overflow-hidden">
            <Slider ref={(c) => slider = c} {...settings}>
                <div className="flex justify-center items-center h-full overflow-hidden focus:outline-none">
                    <img className="object-cover focus:outline-none" src="/images/slider.png" alt="Slider Image" />
                </div>
                <div className="flex justify-center items-center h-full overflow-hidden focus:outline-none">
                    <img className="object-cover focus:outline-none" src="/images/slider.png" alt="Slider Image" />
                </div>
            </Slider>

            {/* {sliderImages.length ? ( */}
            <div className="absolute flex justify-between top-1/2 left-0 -translate-y-1/2 w-full px-12">
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
            {/* ) : null} */}
        </section>
    );
};

export default MySlider;