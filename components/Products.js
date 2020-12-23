import Button from './Button';

const Products = () => {
    const latestProducts = [
        { title: 'Brooks Slender Leather 130 mm Handle Grip', price: 109000, },
        // { title: 'Topeak Defender M1&XC11', price: 62000, },
        { title: 'Polisport Bilby Junior Baby Carrier', price: 63000, },
        { title: 'Shimano AM501 Gravity Bike Shoes', price: 53000, },
        { title: 'Kali Protectives Strike Elbow Guard', price: 89000, },
        // { title: 'Elite Drivo II Bike Trainer', price: 1600000, },
        { title: 'Blackburn Pannier Ex Deluxe 1 Side Pannier Bag', price: 79000, },
        { title: 'Nite Rider Sabre 110 Rear Light', price: 35000, },
    ];

    return (
        <section className="bg-gray-100 py-16 px-32">
            <div className="grid grid-cols-3 gap-2">
                {/* Recommended */}
                <div>
                    <h1 className="font-bold leading-none mb-6">Recommended</h1>
                    <div className="bg-white">
                        
                    </div>
                </div>

                {/* Latest */}
                <div className="col-span-2">
                    <h1 className="font-bold mb-6 leading-none">Latest</h1>
                    <div className="grid grid-cols-3 gap-3">
                        {latestProducts.map((latestProduct, key) => (
                            <div className="flex flex-col justify-between bg-white text-center rounded overflow-hidden" key={key}>
                                {/* <img src="https://www.rodalink.com/pub/media/catalog/product/cache/small_image/365x258/beff4985b56e3afdbeabfc89641a4582/7/1/715172.jpg" alt=""/> */}
                                <div className="px-8 py-6">
                                    <h2 className="text-xs text-gray-600 mb-3">
                                        {latestProduct.title}
                                    </h2>
                                    <p className="font-semibold text-sm text-gray-900">
                                        Rp{latestProduct.price.toLocaleString('id-ID')}
                                    </p>
                                </div>
                                <Button height={11} width="full">Add to Cart</Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;