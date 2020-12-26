import Button from '../Button';
import { ChevronRightIcon } from '../Icons';

const LatestProducts = ({ className }) => {
    const latestProducts = [
        { title: 'Brooks Slender Leather 130 mm Handle Grip', price: 109000, discount: 5, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/728894.PNG' },
        { title: 'Polisport Bilby Junior Baby Carrier', price: 63000, discount: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/722570001.jpg' },
        { title: 'Shimano AM501 Gravity Bike Shoes', price: 53000, discount: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/3/730995.PNG' },
        { title: 'Brooks Slender Leather 130 mm Handle Grip', price: 109000, discount: 10, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/728894.PNG' },
        { title: 'Polisport Bilby Junior Baby Carrier', price: 63000, discount: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/722570001.jpg' },
        { title: 'Shimano AM501 Gravity Bike Shoes', price: 53000, discount: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/3/730995.PNG' },
        { title: 'Brooks Slender Leather 130 mm Handle Grip', price: 109000, discount: 8, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/728894.PNG' },
        { title: 'Polisport Bilby Junior Baby Carrier', price: 63000, discount: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/722570001.jpg' },
    ];

    const getDiscountedPrice = (price, discount) => price - (price * discount / 100);

    return (
        <div className={className}>
            <a className="flex items-center text-gray-400 hover:text-gray-900 mb-6 transition" href="#">
                <h1 className="text-lg text-gray-900 font-bold">Latest</h1>
                <ChevronRightIcon className="w-5 h-5 ml-1" />
            </a>
            <div className="grid grid-cols-4 gap-3">
                {latestProducts.map((latestProduct, key) => (
                    <div className="relative flex flex-col bg-white text-center shadow rounded overflow-hidden transition hover:shadow-lg" key={key}>
                        {latestProduct.discount ? (
                            <div className="products-item-discount bg-primary font-semibold text-sm">
                                -{latestProduct.discount}%
                            </div>
                        ) : null}
                        <img src={latestProduct.image} alt="" />
                        <div className="flex flex-col flex-grow justify-between p-6">
                            <a href="#" className="text-xs text-gray-600 hover:text-gray-900 hover:underline mb-3">
                                <h2>
                                    {latestProduct.title.substring(0, 30).trim() + '...'}
                                </h2>
                            </a>
                            {latestProduct.discount ? (
                                <s className="text-xs text-gray-400">
                                    Rp{latestProduct.price.toLocaleString('id-ID')}
                                </s>
                            ) : null}
                            <h3 className="font-semibold text-sm text-gray-900">
                                Rp{getDiscountedPrice(latestProduct.price, latestProduct.discount).toLocaleString('id-ID')}
                            </h3>
                        </div>
                        {/* <Button height={11} width="full">Add to Cart</Button> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestProducts;