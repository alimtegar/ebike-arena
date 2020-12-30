import Slider from "react-slick";
import RecommendedProductsItem from './RecommendedProductsItem';
import { ChevronRightIcon } from '../../Icons';

const RecommendedProducts = () => {
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
    const recommendedProducts = [
        { title: 'Brooks Slender Leather 130 mm Handle Grip', price: 109000, discount: 5, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/728894.PNG' },
        { title: 'Polisport Bilby Junior Baby Carrier', price: 63000, discount: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/722570001.jpg' },
        { title: 'Shimano AM501 Gravity Bike Shoes', price: 53000, discount: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/3/730995.PNG' },
        { title: 'Brooks Slender Leather 130 mm Handle Grip', price: 109000, discount: 10, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/728894.PNG' },
        { title: 'Polisport Bilby Junior Baby Carrier', price: 63000, discount: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/722570001.jpg' },
        { title: 'Shimano AM501 Gravity Bike Shoes', price: 53000, discount: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/3/730995.PNG' },
        { title: 'Brooks Slender Leather 130 mm Handle Grip', price: 109000, discount: 8, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/728894.PNG' },
        { title: 'Polisport Bilby Junior Baby Carrier', price: 63000, discount: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/722570001.jpg' },
    ];

    return (
        <div className="flex flex-col h-full">
            <div className="mb-6">
                <a className="inline-flex items-center text-gray-400 hover:text-gray-900 transition" href="#">
                    <h1 className="text-lg text-gray-900 font-bold">Recommended</h1>
                    <ChevronRightIcon className="w-5 h-5 ml-1" />
                </a>
            </div>
            <div className="flex flex-grow bg-white rounded shadow transition hover:shadow-lg overflow-hidden">
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