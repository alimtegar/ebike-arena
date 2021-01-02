import Layout from '../components/Layout';
import ProductsItem from '../components/Products/LatestProducts/LatestProductsItem';

import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';

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
    const sortSelectOptions = [
        { title: 'Latest', value: 'latest', selected: false, },
        { title: 'Name', value: 'name', selected: false, },
        { title: 'Price', value: 'price', selected: true, },
    ];

    return (
        <Layout>
            <section className="bg-gray-50">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/5">
                        <div className="bg-white h-full px-6 py-6 md:py-12">
                            {/* Sort */}
                            <div className="mb-6">
                                <div className="mb-3">
                                    <span className="font-semibold">Sort</span>
                                </div>
                                <div>
                                    <Select id="sort-select" name="sort-select" options={sortSelectOptions} width="full" height={11} />
                                </div>
                            </div>

                            {/* Price */}
                            <div>
                                <div className="mb-3">
                                    <span className="font-semibold">Price</span>
                                </div>
                                <div className="text-center">
                                    <div className="mb-3">
                                        <Input type="text" placeholder="Min price..." width="full" height={11} prefix="Rp" />
                                    </div>
                                    <div className="mb-3">
                                        <Input type="text" placeholder="Max price..." width="full" height={11} prefix="Rp" />
                                    </div>
                                    <Button width="full" height={11} rounded={true}>Apply</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-4/5">
                        <div className="pt-6 md:pt-12 pb-3 md:pt-6 pl-3 md:pl-6 pr-3 md:pr-24">
                            <div className="text-xs text-gray-600 mb-6">
                                Found 10 results in products
                                </div>
                            <div className="flex flex-wrap -m-1.5">
                                {products.map((product, key) => (
                                    <div className="w-1/2 md:w-1/5 p-1.5" key={key}>
                                        <ProductsItem {...product} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Products;