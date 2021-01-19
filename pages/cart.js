import createPersistedState from 'use-persisted-state';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import ProductsItem from '../components/Products/LatestProducts/LatestProductsItem';
import Empty from '../components/Empty';
import { Input, Button } from '../components/Form';
import { InfoIcon } from '../components/Icons';

// Fetchers
import { fetchProfile, fetchProductCategories, fetchMenu, fetchProducts, fetchPosts } from '../fetchers';

// Helpers
import { slugify, getTotalAmount, getTotalPrice } from '../helpers';

const useCartState = createPersistedState('cart');

const Cart = ({ profile, navbarMenu, footerMenu, products, posts }) => {
    const [cart, _] = useCartState([]);

    return (
        <Layout
            navbarMenu={navbarMenu}
            footerMenu={footerMenu}
            footerPosts={posts}
            footerSocialMedias={profile.social_medias}
        >
            <Seo
                title={process.env.NEXT_PUBLIC_WEB_TITLE}
                subtitle="Cart"
                description={process.env.NEXT_PUBLIC_WEB_DESCRIPTION}
                url={process.env.NEXT_PUBLIC_WEB_URL}
                phone={profile.phone}
            />

            <section className="bg-gray-100">
                <div className="flex flex-col min-h-full pt-6 md:pt-12 pb-3 md:pb-12 px-3 md:px-24">
                    <div className="flex items-center text-xs text-gray-600 mb-6">
                        <span className="mr-1.5">
                            <InfoIcon width={4} height={4} />
                        </span>

                        {cart && cart.length ? 'Showing 10 of 100' : 'No'} results found in the cart
                                </div>

                    <div className="flex flex-grow flex-wrap -m-1.5">
                        {cart && cart.length ? cart.map((cartItem, key) => (
                            <div className="w-1/2 md:w-1/6 p-1.5" key={cartItem.id}>
                                <ProductsItem {...cartItem} />
                            </div>
                        )) : (
                            // <Empty />
                            null
                        )}
                    </div>
                </div>
            </section>

            <section className="cart-form relative flex justify-center px-6 md:px-24 py-6 md:py-12">
                <div className="w-full md:w-1/2">
                    <div className="text-center">
                        <h1 className="text-lg font-bold mb-6">Shopping Cart</h1>

                        <p className="text-xs text-gray-600 mb-6 md:mb-12">
                            To finish your order, please fill the form below and then press the checkout button.
                    </p>
                    </div>

                    <div className="flex items-center mb-3">
                        <label className="text-xs w-1/4 py-3 pr-3" htmlFor="full_name">
                            Full Name
                    </label>
                        <div className="w-3/4">
                            <Input
                                type="text"
                                placeholder="Full Name"
                                width="full"
                                height={11}
                            />
                        </div>
                    </div>
                    <div className="flex items-center mb-3">
                        <label className="text-xs w-1/4 py-3 pr-3" htmlFor="full_name">
                            Phone
                    </label>
                        <div className="w-3/4">
                            <Input
                                type="text"
                                placeholder="Phone"
                                width="full"
                                height={11}
                            />
                        </div>
                    </div>
                    <div className="flex items-center mb-3">
                        <label className="text-xs w-1/4 py-3 pr-3" htmlFor="full_name">
                            Email
                    </label>
                        <div className="w-3/4">
                            <Input
                                type="text"
                                placeholder="Email"
                                width="full"
                                height={11}
                            />
                        </div>
                    </div>
                    <div className="flex items-start mb-3">
                        <label className="text-xs w-1/4 py-3" htmlFor="full_name">
                            Address
                    </label>
                        <div className="w-3/4">
                            <textarea className="text-xs w-full h-24 p-3 border-2 border-gray-300 rounded-lg" placeholder="Address"></textarea>
                        </div>
                    </div>
                    <div className="flex items-center mb-3">
                        <label className="text-xs w-1/4 py-3 pr-3" htmlFor="full_name">
                            Total Product
                    </label>
                        <div className="w-3/4">
                            <Input
                                type="text"
                                placeholder="Total Amount"
                                width="full"
                                height={11}
                                value={getTotalAmount(cart)}
                                disabled={true}
                            />
                        </div>
                    </div>
                    <div className="flex items-center mb-6">
                        <label className="text-xs w-1/4 py-3 pr-3" htmlFor="full_name">
                            Total Price
                    </label>
                        <div className="w-3/4">
                            <Input
                                type="text"
                                placeholder="Total Price"
                                prefix="Rp"
                                width="full"
                                height={11}
                                value={getTotalPrice(cart)}
                                disabled={true}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Button width="1/2" height={11} rounded={true}>
                            Checkout
                        </Button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const [
        profile,
        menu,
        productCategories,
        products,
        posts
    ] = await Promise.all([
        fetchProfile(),
        fetchMenu(),
        fetchProductCategories(),
        fetchProducts(
            null,       // ID
            false,      // Recommended
            3,       // Limit
        ),
        fetchPosts(),
    ]);

    // Separate menu into navbar and footer menu
    const navbarMenu = [
        ...menu.filter((menuItem) => menuItem.position === 'navbar'),
        ...productCategories.map((productCategory) => ({
            title: productCategory.title,
            url: '/products/all/cat/' + productCategory.id + '/' + slugify(productCategory.title),
            path: '/products/all/[[...slug]]'
        })),
    ];
    const footerMenu = menu.filter((menuItem) => menuItem.position === 'footer');

    return {
        props: {
            profile: profile,
            navbarMenu: navbarMenu,
            footerMenu: footerMenu,
            products: products,
            posts: posts,
        },
    };
};

export default Cart;