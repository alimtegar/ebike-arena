import Button from '../components/Button';
import ProductsItem from '../components/Products/LatestProducts/LatestProductsItem';

import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';

const Products = () => {
    const products = [
        { title: 'Brooks Slender Leather 130 mm Handle Grip', url: '/products/product-details', price: 109000, discount: 5, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/728894.PNG' },
        { title: 'Polisport Bilby Junior Baby Carrier', url: '/products/product-details', price: 63000, discount: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/722570001.jpg' },
        { title: 'Shimano AM501 Gravity Bike Shoes', url: '/products/product-details', price: 53000, discount: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/3/730995.PNG' },
        { title: 'Brooks Slender Leather 130 mm Handle Grip', url: '/products/product-details', price: 109000, discount: 10, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/728894.PNG' },
        { title: 'Polisport Bilby Junior Baby Carrier', url: '/products/product-details', price: 63000, discount: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/722570001.jpg' },
        { title: 'Shimano AM501 Gravity Bike Shoes', url: '/products/product-details', price: 53000, discount: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/3/730995.PNG' },
        { title: 'Brooks Slender Leather 130 mm Handle Grip', url: '/products/product-details', price: 109000, discount: 8, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/728894.PNG' },
        { title: 'Polisport Bilby Junior Baby Carrier', url: '/products/product-details', price: 63000, discount: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/722570001.jpg' },
        { title: 'Brooks Slender Leather 130 mm Handle Grip', url: '/products/product-details', price: 109000, discount: 5, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/728894.PNG' },
        { title: 'Polisport Bilby Junior Baby Carrier', url: '/products/product-details', price: 63000, discount: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/722570001.jpg' },
        { title: 'Shimano AM501 Gravity Bike Shoes', url: '/products/product-details', price: 53000, discount: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/3/730995.PNG' },
        { title: 'Brooks Slender Leather 130 mm Handle Grip', url: '/products/product-details', price: 109000, discount: 10, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/728894.PNG' },
        { title: 'Polisport Bilby Junior Baby Carrier', url: '/products/product-details', price: 63000, discount: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/722570001.jpg' },
        { title: 'Shimano AM501 Gravity Bike Shoes', url: '/products/product-details', price: 53000, discount: 0, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/3/730995.PNG' },
        { title: 'Brooks Slender Leather 130 mm Handle Grip', url: '/products/product-details', price: 109000, discount: 8, image: 'https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/2/728894.PNG' },
    ];

    return (
        <>
            <header className="sticky top-0 z-50">
                <Navbar />
                <SubNavbar />
            </header>

            <main>
                <section className="bg-gray-50">
                    <div className="flex flex-wrap">
                        <div className="w-1/5">
                            <div className="bg-white h-full px-6 py-12">
                                {/* <div className="mb-6">
                                    <span className="font-bold text-lg">Filter</span>
                                </div> */}

                                <div className="mb-6">
                                    <div className="mb-3">
                                        <span className="font-semibold">Sort</span>
                                    </div>
                                    <select
                                        className="w-full text-xs border-2 border-gray-300 px-4 h-11 mb-3 rounded focus:outline-none focus:border-gray-900 appearance-none"
                                        name=""
                                        id=""
                                    >
                                        <option value="">Price</option>
                                        <option value="">Name</option>
                                        <option value="">Latest</option>
                                    </select>
                                </div>

                                <div>
                                    <div className="mb-3">
                                        <span className="font-semibold">Price</span>
                                    </div>
                                    <div className="text-center">
                                        <input
                                            className="w-full text-xs border-2 border-gray-300 px-4 h-11 mb-3 rounded focus:outline-none focus:border-gray-900"
                                            placeholder="Min price..."
                                            type="text"
                                        />
                                        {/* <div className="text-xs text-gray-600 my-3">to</div> */}
                                        <input
                                            className="w-full text-xs border-2 border-gray-300 px-4 h-11 mb-3 rounded focus:outline-none focus:border-gray-900"
                                            placeholder="Max price..."
                                            type="text"
                                        />
                                        <Button width="full" height={11} rounded={true}>
                                            Apply
                                    </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-4/5">
                            <div className="py-12 pl-6 pr-24">
                                <div className="text-xs text-gray-600 mb-6">
                                    Found 10 results in products
                                </div>
                                <div className="flex flex-wrap -m-1.5">
                                    {products.map((product, key) => (
                                        <div className="w-full md:w-1/5 p-1.5" key={key}>
                                            <ProductsItem {...product} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Products;