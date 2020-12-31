import Magnifier from "react-magnifier";
import ProductItemDiscountLabel from '../../components/Products/ProductsItemDiscountLabel';
import Button from '../../components/Button';
// import { ChevronRightIcon } from '../../components/Icons';
import { getDiscountedPrice } from '../../helpers';

import Navbar from '../../components/Navbar';
import SubNavbar from '../../components/SubNavbar';
import Footer from '../../components/Footer';

const ProductDetails = () => {
    const image = 'https://www.rodalink.com/pub/media/catalog/product/cache/image/680x510/e9c3970ab036de70892d86c6d221abfe/5/0/502621.jpg';
    const discount = 10;
    const price = 30000000;
    const specifications = [
        {
            title: 'What\'s in the box',
            description: '1 x Polygon Xquarone EX9 Bike',
        },
        {
            title: 'Brand',
            description: 'Polygon',
        },
        {
            title: 'Frame',
            description: 'ACX SUSPENSION FRAME',
        },
        {
            title: 'Fork',
            description: 'FOX FACTORY 36 FLOAT 180MM TRAVEL',
        },
        {
            title: 'Rear Shock',
            description: 'FOX FACTORY FLOAT X2',
        },
        {
            title: 'Head Set',
            description: 'THREADLESS TAPERED HEADSET',
        },
        {
            title: 'Stem',
            description: 'RACE FACE TURBINE, ALLOY, E:50MM BB:35MM',
        },
        {
            title: 'Handlebar',
            description: 'RACE FACE NEXT, CARBON, W:780MM R:20MM BB:35MM',
        },
        {
            title: 'Rear Derailleur',
            description: 'SHIMANO XTR M9100',
        },
        {
            title: 'Shifter',
            description: 'SHIMANO XTR M9100 1X12 SPEED',
        },
        {
            title: 'Bottom Bracket',
            description: 'SHIMANO BB',
        },
        {
            title: 'Crank Set',
            description: 'SHIMANO XTR 32T BOOST',
        },
        {
            title: 'Cassette',
            description: 'SHIMANO CSM9100 XTR 12-SPEED 10-51T',
        },
        {
            title: 'Chain',
            description: 'SHIMANO',
        },
        {
            title: 'Brake',
            description: 'Brake set : SHIMANO XTR M9120 HYDRAULIC DISC BRAKE , brake lever : SHIMANO XTR M9120',
        },
        {
            title: 'Wheel Set',
            description: 'E13 TRS RACE WITH SHIMANO XTR HUB',
        },
        {
            title: 'Tire',
            description: 'WTB VIGILANTE TIRE 27.5"X2.60"',
        },
        {
            title: 'Saddle',
            description: 'ENTITY XTENT SADDLE',
        },
        {
            title: 'Seat Post',
            description: 'KS LEV ISO, ALLOY, 30.9MMX405MM',
        },
        {
            title: 'Wheel Size',
            description: '27.5"',
        },
        {
            title: 'Warna',
            description: 'Black',
        },
    ];

    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar />
                <SubNavbar />
            </div>

            <section className="product-details flex flex-col bg-gray-50 px-3 md:px-24 pt-3 md:pt-12 pb-3 md:pb-0">
                {/* <div className="mb-6">
                    <ul className="flex text-xs text-gray-400">
                        <li className="mr-1.5">
                            <div className="flex items-center">
                                <a className="hover:text-gray-600 hover:underline" href="#">Home</a>
                                <ChevronRightIcon className="w-3 h-3 ml-1.5" />
                            </div>
                        </li>
                        <li className="mr-1.5">
                            <div className="flex items-center">
                                <a className="hover:text-gray-600 hover:underline" href="#">Products</a>
                                <ChevronRightIcon className="w-3 h-3 ml-1.5" />
                            </div>
                        </li>
                        <li className="mr-1.5">
                            <span className="text-gray-600">Polygon Sepeda Xquarone EX9</span>
                        </li>
                    </ul>
                </div> */}

                <div className="relative z-10 bg-white mb-0 md:-mb-3 rounded shadow overflow-hidden">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-2/3">
                            {/* <div  className="flex bg-black h-auto rounded overflow-hidden"> */}
                            <Magnifier className="flex justify-center items-center -mb-2" src={image} mgShowOverflow={false} />
                            {/* </div> */}
                        </div>
                        <div className="w-full md:w-1/3">
                            <div className="relative p-6">
                                {/* Product Discount Label */}
                                <ProductItemDiscountLabel discount={discount} />

                                {/* Product Header */}
                                <div className="mb-6">

                                    <h1 className="font-bold text-lg">Polygon Sepeda Xquarone EX9</h1>
                                    <span className="text-xs text-gray-600">ID #718423</span>
                                </div>

                                {/* Product Body */}
                                <table className="w-full mb-6">
                                    <tbody>
                                        <tr className="border-b-2 border-gray-300">
                                            <td className="w-24 py-3">
                                                <span className="text-xs text-gray-600">Category</span>
                                            </td>
                                            <td>
                                                <span className="font-semibold">Bikes</span>
                                            </td>
                                        </tr>
                                        <tr className="border-b-2 border-gray-300">
                                            <td className="w-24 py-3">
                                                <span className="text-xs text-gray-600">Price</span>
                                            </td>
                                            <td>
                                                {/* <div className="flex flex-col"> */}
                                                    <s className="text-xs text-gray-400 mr-2">Rp.{price.toLocaleString('id-ID')}</s>
                                                    <span className="font-semibold">
                                                        Rp.{getDiscountedPrice(price, discount).toLocaleString('id-ID')}
                                                    </span>
                                                {/* </div> */}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-24 py-2">
                                                <span className="text-xs text-gray-600">Stock</span>
                                            </td>
                                            <td>
                                                <span className="font-semibold">100</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                {/* Product Footer */}
                                <div>
                                    <div className="flex">
                                        <input
                                            className="text-xs w-20 h-11 mr-3 px-4 border-2 border-gray-300 focus:border-gray-900 rounded focus:outline-none"
                                            type="number"
                                            minLength={0}
                                            value={0}
                                        />
                                        <Button width="full" height={11} rounded={true}>
                                            Add to Cart
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-6 md:px-24 py-6 md:py-12">
                <div className="flex flex-wrap -m-6">
                    <div className="w-full md:w-1/2 p-6">
                        <div className="mb-6">
                            <h2 className="font-bold text-lg">Specifications</h2>
                        </div>
                        <table className="text-xs text-gray-600 w-full">
                            <tbody>
                                {specifications.map((specification, key) => (
                                    <tr className={key < specifications.length - 1 ? 'border-b-2 border-gray-300' : ''}>
                                        <td className="align-top py-3 w-36">{specification.title}</td>
                                        <td className="py-3 capitalize">{specification.description.toLowerCase()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="w-full md:w-1/2 p-6">
                        <div className="mb-6">
                            <h2 className="font-bold text-lg">Description</h2>
                        </div>
                        <div className="text-xs text-gray-600 text-justify">
                            <p className="mb-3">
                                Vestibulum non posuere nunc, quis tempus velit. Nulla ornare magna at orci malesuada, ac maximus lacus auctor. Aenean non luctus sapien. Donec ornare rhoncus eros, ut lobortis nisl mattis ut. Nulla ut elit consequat, iaculis leo vitae, fringilla lectus. Sed et efficitur velit. Quisque egestas ut nisl quis venenatis.
                            </p>
                            <p>
                                Suspendisse molestie odio vestibulum, eleifend tellus mattis, ultrices massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis interdum massa sit amet hendrerit tempor. Ut sodales pharetra aliquet. Nullam vitae arcu posuere, dictum elit eget, tincidunt risus. Fusce molestie magna et eleifend elementum. Fusce semper mauris eget arcu rutrum interdum. Proin id lacus ac ante feugiat consectetur sed at lectus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ProductDetails;