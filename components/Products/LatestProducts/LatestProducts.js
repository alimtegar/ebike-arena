import Link from '../../Link';
import { ChevronRightIcon } from '../../Icons';
import LatestProductsItem from './LatestProductsItem';

const LatestProducts = ({ latestProducts }) => {
    // const latestProducts = [
    //     { title: 'Brooks Slender Leather 130 mm Handle Grip', url: '/products/product-details', price: 109000, discount: 5, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/728894.PNG' },
    //     { title: 'Polisport Bilby Junior Baby Carrier', url: '/products/product-details', price: 63000, discount: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/722570001.jpg' },
    //     { title: 'Shimano AM501 Gravity Bike Shoes', url: '/products/product-details', price: 53000, discount: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/3/730995.PNG' },
    //     { title: 'Brooks Slender Leather 130 mm Handle Grip', url: '/products/product-details', price: 109000, discount: 10, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/728894.PNG' },
    //     { title: 'Polisport Bilby Junior Baby Carrier', url: '/products/product-details', price: 63000, discount: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/722570001.jpg' },
    //     { title: 'Shimano AM501 Gravity Bike Shoes', url: '/products/product-details', price: 53000, discount: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/3/730995.PNG' },
    //     { title: 'Brooks Slender Leather 130 mm Handle Grip', url: '/products/product-details', price: 109000, discount: 8, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/728894.PNG' },
    //     { title: 'Polisport Bilby Junior Baby Carrier', url: '/products/product-details', price: 63000, discount: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/722570001.jpg' },
    // ];

    return (
        <div>
            <div className="mb-6">
                <Link href="/products">
                    <a className="inline-flex items-center text-gray-400 hover:text-gray-900 transition">
                        <h1 className="text-lg text-gray-900 font-bold">Latest</h1>
                        <span className="ml-1">
                            <ChevronRightIcon width={5} height={5} />
                        </span>
                    </a>
                </Link>
            </div>
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-3"> */}
            <div className="flex flex-wrap -m-1.5">
                {latestProducts.map((latestProduct, key) => (
                    <div className="w-full md:w-1/4 p-1.5" key={key}>
                        <LatestProductsItem {...latestProduct} />
                    </div>
                ))}
            </div>
            {/* </div> */}
        </div>
    );
};

export default LatestProducts;