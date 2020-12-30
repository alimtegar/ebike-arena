import { ChevronRightIcon } from '../../Icons';
import LatestProductsItem from './LatestProductsItem';

const LatestProducts = () => {
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

    return (
        <div>
            <div className="mb-6">
                <a className="inline-flex items-center text-gray-400 hover:text-gray-900 transition" href="#">
                    <h1 className="text-lg text-gray-900 font-bold">Latest</h1>
                    <ChevronRightIcon className="w-5 h-5 ml-1" />
                </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {latestProducts.map((latestProduct, key) => (
                    <LatestProductsItem {...latestProduct} key={key} />
                ))}
            </div>
        </div>
    );
};

export default LatestProducts;