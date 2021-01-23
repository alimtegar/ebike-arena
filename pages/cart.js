import { useState } from 'react';
import { useRouter } from 'next/router';
import createPersistedState from 'use-persisted-state';
import { toast } from 'react-toastify';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import ProductsItem from '../components/Products/LatestProducts/LatestProductsItem';
import Empty from '../components/Empty';
import { Input, TextArea, Button } from '../components/Form';
import { InfoIcon } from '../components/Icons';

// Fetchers
import { fetchProfile, fetchProductCategories, fetchMenu, fetchPosts } from '../fetchers';

// Helpers
import { slugify, stripTrailingSlash, getTotalAmount, getTotalPrice } from '../helpers';

const useCartState = createPersistedState('cart');

const Cart = ({ profile, navbarMenu, footerMenu, posts }) => {
    const [cart, setCart] = useCartState([]);
    const initForm = {
        full_name: '',
        phone: '',
        email: '',
        address: '',
        message: '',
        total_amount: getTotalAmount(cart),
        total_price: getTotalPrice(cart),
    };
    const [form, setForm] = useState(initForm);

    const addOrder = async () => {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        try {
            let res;

            res = await fetch(apiUrl + 'items/orders', {
                method: 'POST',
                body: JSON.stringify({
                    ...form,
                    products: {
                        ...cart.map((cartItem) => ({
                            id: cartItem.id,
                            title: cartItem.title,
                            price: cartItem.price,
                            amount: cartItem.amount,
                        })),
                    },
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            res = await res.json();

            return res;
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (cart && Object.keys(cart).length) {
            const res = await addOrder();

            if (res.error === undefined) {
                toast.success('Order request is sent and will be checked immediately by admin.');
                setCart([]);
                setForm({
                    ...initForm,
                    total_amount: 0,
                    total_price: 0,
                });

                e.target.reset();
            } else { toast.error(res.error.message); }
        } else { toast.error('Cart is empty.'); }
    };

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
                url={stripTrailingSlash(process.env.NEXT_PUBLIC_WEB_URL) + useRouter().asPath} // Current URL
                phone={profile.phone}
            />

            <section className="bg-gray-100">
                <div className="flex flex-col min-h-full pt-6 md:pt-12 pb-3 md:pb-12 px-3 md:px-24">
                    <div className="flex items-center text-xs text-gray-600 mb-6">
                        <span className="mr-1.5">
                            <InfoIcon width={4} height={4} />
                        </span>

                        {cart && cart.length ? 'Showing ' + cart.length + ' of ' + cart.length : 'No'} results found in the cart.
                                </div>

                    <div className="flex flex-grow flex-wrap -m-1.5">
                        {cart && cart.length ? cart.map((cartItem) => (
                            <div className="w-1/2 md:w-1/6 p-1.5" key={cartItem.id}>
                                <ProductsItem {...cartItem} />
                            </div>
                        )) : (
                                <Empty />
                                // null
                            )}
                    </div>
                </div>
            </section>

            <section className="cart-form relative flex justify-center px-6 md:px-24 py-6 md:py-12">
                <div className="w-full md:w-1/2">
                    <div className="text-center">
                        <h1 className="text-lg font-bold mb-6">Shopping Cart</h1>
                        <p className="text-xs text-gray-600 mb-6 md:mb-12">To finish your order, please fill the form below and then press the button.</p>
                    </div>

                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="flex items-center mb-3">
                            <label className="text-xs w-1/4 py-3 pr-3" htmlFor="full_name">Full Name</label>
                            <div className="w-3/4">
                                <Input
                                    id="full_name"
                                    name="full_name"
                                    type="text"
                                    placeholder="Full Name"
                                    width="full"
                                    height={11}
                                    value={form.full_name}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                        </div>
                        <div className="flex items-center mb-3">
                            <label className="text-xs w-1/4 py-3 pr-3" htmlFor="phone">Phone</label>
                            <div className="w-3/4">
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    placeholder="Phone"
                                    width="full"
                                    height={11}
                                    value={form.phone}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                        </div>
                        <div className="flex items-center mb-3">
                            <label className="text-xs w-1/4 py-3 pr-3" htmlFor="email">Email</label>
                            <div className="w-3/4">
                                <Input
                                    id="email"
                                    name="email"
                                    type="text"
                                    placeholder="Email"
                                    width="full"
                                    height={11}
                                    value={form.email}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                        </div>
                        <div className="flex items-start mb-3">
                            <label className="text-xs w-1/4 py-3" htmlFor="address">Address</label>
                            <div className="w-3/4">
                                <TextArea
                                    id="address"
                                    name="address"
                                    placeholder="Address"
                                    width="full"
                                    height={24}
                                    onChange={(e) => handleChange(e)}
                                >
                                    {form.addres}
                                </TextArea>
                            </div>
                        </div>
                        <div className="flex items-start mb-3">
                            <label className="text-xs w-1/4 py-3" htmlFor="message">Message</label>
                            <div className="w-3/4">
                                <TextArea
                                    id="message"
                                    name="message"
                                    placeholder="Message"
                                    width="full"
                                    height={24}
                                    onChange={(e) => handleChange(e)}
                                >
                                    {form.message}
                                </TextArea>
                            </div>
                        </div>
                        <div className="flex items-center mb-3">
                            <label className="text-xs w-1/4 py-3 pr-3" htmlFor="total_amount">Total Product</label>
                            <div className="w-3/4">
                                <Input
                                    id="total_amount"
                                    name="total_amount"
                                    type="text"
                                    placeholder="Total Amount"
                                    width="full"
                                    height={11}
                                    value={form.total_amount}
                                    disabled={true}
                                />
                            </div>
                        </div>
                        <div className="flex items-center mb-6">
                            <label className="text-xs w-1/4 py-3 pr-3" htmlFor="total_price">Total Price</label>
                            <div className="w-3/4">
                                <Input
                                    id="total_price"
                                    name="total_price"
                                    type="text"
                                    placeholder="Total Price"
                                    prefix="Rp"
                                    width="full"
                                    height={11}
                                    value={form.total_price}
                                    disabled={true}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button type="submit" width="1/2" height={11} rounded={true}>Request Order</Button>
                        </div>
                    </form>
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
        posts
    ] = await Promise.all([
        fetchProfile(),
        fetchMenu(),
        fetchProductCategories(),
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

    // Add URL to posts
    const newPosts = [
        ...posts.map((post) => ({
            ...post,
            url: '/posts/' + post.id + '/' + slugify(post.title),
            path: '/posts/[...slug]',
        })),
    ];

    return {
        props: {
            profile: profile,
            navbarMenu: navbarMenu,
            footerMenu: footerMenu,
            posts: newPosts,
        },
    };
};

export default Cart;