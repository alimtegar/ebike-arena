import Slider from "react-slick";
import Button from '../Button';
import { ChevronRightIcon } from '../Icons';

const RecommendedProducts = ({ className }) => {
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
        { title: 'Brooks Slender Leather 130 mm Handle Grip', price: 109000, old_price: 100000, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/728894.PNG' },
        { title: 'Polisport Bilby Junior Baby Carrier', price: 63000, old_price: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/722570001.jpg' },
        { title: 'Shimano AM501 Gravity Bike Shoes', price: 53000, old_price: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/3/730995.PNG' },
        { title: 'Brooks Slender Leather 130 mm Handle Grip', price: 109000, old_price: 100000, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/728894.PNG' },
        { title: 'Polisport Bilby Junior Baby Carrier', price: 63000, old_price: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/722570001.jpg' },
        { title: 'Shimano AM501 Gravity Bike Shoes', price: 53000, old_price: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/3/730995.PNG' },
        { title: 'Brooks Slender Leather 130 mm Handle Grip', price: 109000, old_price: 100000, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/728894.PNG' },
        { title: 'Polisport Bilby Junior Baby Carrier', price: 63000, old_price: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/722570001.jpg' },
    ];

    return (
        <div className={className}>
            <a className="flex items-center text-gray-400 hover:text-gray-900 mb-6 transition" href="#">
                <h1 className="text-lg text-gray-900 font-bold">Recommended</h1>
                <ChevronRightIcon className="w-5 h-5 ml-1" />
            </a>
            <div className="flex flex-grow bg-white rounded shadow transition hover:shadow-lg overflow-hidden">
                <Slider {...settings}>
                    {recommendedProducts.map((recommendedProduct, key) => (
                        <div className="h-full focus:outline-none" key={key}>
                            <div className="flex flex-col justify-center items-center text-center h-full">
                                <div className="flex-grow">
                                    <img className="object-cover object-none object-center h-full focus:outline-none" src={recommendedProduct.image} alt="Slider Image" />
                                </div>
                                <div className="flex flex-col py-6 px-20">
                                    <h2 className="text-xs text-gray-600 mb-3">
                                        {recommendedProduct.title}
                                    </h2>
                                    {recommendedProduct.old_price ? (
                                        <s className="text-xs text-gray-400">
                                            Rp{recommendedProduct.old_price.toLocaleString('id-ID')}
                                        </s>
                                    ) : null}
                                    <h3 className="font-semibold text-sm text-gray-900">
                                        Rp{recommendedProduct.price.toLocaleString('id-ID')}
                                    </h3>
                                </div>
                                <Button height={11} width="full">Add to Cart</Button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default RecommendedProducts;