import Slider from "react-slick";

const MySlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            <div>
                <img src="/images/slider.png" alt="Slider Image"/>
            </div>
            <div>
                <img src="/images/slider.png" alt="Slider Image"/>
            </div>
            <div>
                <img src="/images/slider.png" alt="Slider Image"/>
            </div>
        </Slider>
    );
};

export default MySlider;