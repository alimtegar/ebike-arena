import Link from '../../Link';
import Slider from "react-slick";
import RecommendedProductsItem from './RecommendedProductsItem';
import { ChevronRightIcon } from '../../Icons';

const RecommendedProducts = ({ recommendedProducts }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
    };

    return (
        <div className="products-recommended flex flex-col h-full">
            <div className="mb-6">
                <h1 className="text-lg text-gray-900 font-bold">Recommended</h1>
            </div>
            <div className="flex flex-grow bg-white rounded-lg shadow-sm hover:shadow transition overflow-hidden">
                <Slider {...settings}>
                    {recommendedProducts.map((recommendedProduct, key) => (
                        <div className="h-full focus:outline-none" key={key}>
                            <RecommendedProductsItem {...recommendedProduct} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default RecommendedProducts;