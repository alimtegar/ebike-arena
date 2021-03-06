import { useState } from 'react';
import { useRouter } from 'next/router';
import createPersistedState from 'use-persisted-state';
import Magnifier from "react-magnifier";
import { toast } from 'react-toastify';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import ProductItemDiscountLabel from '../../components/Products/ProductsItemDiscountLabel';
import { Input, Button, OutlineButton } from '../../components/Form';
import Link from '../../components/Link';

// Fetchers
import { fetchProfile, fetchProductCategories, fetchMenu, fetchProducts, fetchPosts } from '../../fetchers';

// Helpers
import { slugify, stripTrailingSlash, getDiscountedPx, getSentence, stripHtml } from '../../helpers';

const useCartState = createPersistedState('cart');

const ProductDetails = ({ profile, navbarMenu, footerMenu, product, posts }) => {
    // Use state
    const [cart, setCart] = useCartState([]);
    const [amount, setAmount] = useState(1);

    const addToCart = (product) =>
        setCart([
            ...cart.filter((cartItem) => cartItem.id !== product.id), // Filter product that has same ID
            product,
        ]);

    const removeFromCart = (id) =>
        setCart([
            ...cart.filter((cartItem) => cartItem.id !== id), // Filter product that has same ID
        ]);

    const indexInCart = cart.findIndex((cartIndex) => cartIndex.id === product.id);

    return (
        <Layout
            navbarMenu={navbarMenu}
            footerMenu={footerMenu}
            footerPosts={posts}
            footerSocialMedias={profile.social_medias}
        >
            <Seo
                title={process.env.NEXT_PUBLIC_WEB_TITLE}
                subtitle={product.title}
                description={getSentence(stripHtml(product.description), 0)}
                url={stripTrailingSlash(process.env.NEXT_PUBLIC_WEB_URL) + useRouter().asPath} // Current URL
                phone={profile.phone}
                image={product.image}
            />
            <section className="product-details flex flex-col bg-gray-100 px-3 md:px-24 pt-3 md:pt-12 pb-3 md:pb-12">
                <div className="relative z-10 bg-white mb-0 md:-mb-3x rounded-lg shadow-sm hover:shadow transition duration-300 overflow-hidden">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-2/3">
                            <Magnifier className="flex justify-center items-center -mb-2" src={product.image} mgShowOverflow={false} />
                        </div>
                        <div className="w-full md:w-1/3">
                            <div className="relative p-6">
                                {/* Product Discount Label */}
                                {product.discount ? (
                                    <ProductItemDiscountLabel discount={product.discount} />
                                ) : null}

                                {/* Product Header */}
                                <div className="mb-6">

                                    <h1 className="font-bold text-lg">{product.title}</h1>
                                    <span className="text-xs text-gray-600">ID #{(product.id + '').padStart(8, '0')}</span>
                                </div>

                                {/* Product Body */}
                                <table className="w-full mb-6">
                                    <tbody>
                                        <tr className="border-b-2 border-gray-200">
                                            <td className="w-24 py-3">
                                                <span className="text-xs text-gray-600">Category</span>
                                            </td>
                                            <td>
                                                <Link href={'/products/all/cat/' + product.category.id + '/' + slugify(product.category.title)}>
                                                    <a className="font-semibold">{product.category.title}</a>
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr className="border-b-2 border-gray-200">
                                            <td className="w-24 py-3">
                                                <span className="text-xs text-gray-600">Price</span>
                                            </td>
                                            <td>
                                                {product.discount ? (
                                                    <s className="text-xs text-gray-400 mr-2">
                                                        Rp{product.old_price.toLocaleString('id-ID')}
                                                    </s>
                                                ) : null}
                                                <span className="font-semibold">
                                                    Rp{product.price.toLocaleString('id-ID')}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-24 py-2">
                                                <span className="text-xs text-gray-600">Stock</span>
                                            </td>
                                            <td>
                                                <span className="font-semibold">{product.stock}</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                {/* Product Footer */}
                                <div>
                                    {product.stock > 0 ? (
                                        <div className="flex">
                                            <span className="mr-3">
                                                {indexInCart >= 0 ? (
                                                    <Input
                                                        type="text"
                                                        width={20}
                                                        height={11}
                                                        value={cart[indexInCart].amount}
                                                        disabled={true}
                                                    />
                                                ) : (
                                                    <Input
                                                        type="number"
                                                        width={20}
                                                        height={11}
                                                        minLength={1}
                                                        maxLength={product.stock}
                                                        value={amount}
                                                        onChange={(e) => setAmount(e.target.value)}
                                                    />
                                                )}
                                            </span>
                                            {indexInCart >= 0 ? (
                                                <OutlineButton
                                                    color="gray-900"
                                                    contrastColor="white"
                                                    width="full"
                                                    height={11}
                                                    rounded={true}
                                                    onClick={() => {
                                                        removeFromCart(product.id);
                                                        toast.success('Product removed from cart.');
                                                    }}
                                                >
                                                    Remove from Cart
                                                </OutlineButton>
                                            ) : (
                                                <Button
                                                    width="full"
                                                    height={11}
                                                    rounded={true}
                                                    onClick={() => {
                                                        addToCart({
                                                            id: product.id,
                                                            title: product.title,
                                                            image: product.image.replaceAll('1400', '600'), // Resize image from 1400x1400px to 600x600px
                                                            price: product.price,
                                                            discount: product.discount,
                                                            amount: parseInt(amount),
                                                        });
                                                        toast.success('Product added to cart.');
                                                    }}
                                                >
                                                    Add to Cart
                                                </Button>
                                            )}  
                                        </div>
                                    ) : (
                                        <div className="flex">
                                            <button className="bg-gray-100 text-gray-400 text-xs font-semibold w-full h-11 rounded-lg" disabled>
                                                Out of Stock
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="product-details-content relative px-6 md:px-24 py-6 md:py-12">
                <div className="flex justify-center flex-wrap -m-6">
                        <div className="w-full md:w-1/2 p-6">
                            <div className="mb-6">
                                <h2 className="font-bold text-lg text-center md:text-left">Specifications</h2>
                            </div>
                            {product.specifications ? (
                                <table className="text-xs text-gray-600 w-full">
                                    <tbody>
                                        {Object.keys(product.specifications).map((key) => (
                                            <tr className={Object.keys(product.specifications).indexOf(key) < Object.keys(product.specifications).length - 1 ? 'border-b-2 border-gray-200' : ''} key={key}>
                                                <td className="align-top py-3 w-36">{key}</td>
                                                <td className="py-3 capitalize">{product.specifications[key]}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <div className="text-xs text-gray-600 text-center md:text-left">
                                    No specifications.
                                </div>
                            )}
                        </div>
                    
                        <div className="w-full md:w-1/2 p-6">
                            <div className="mb-6">
                                <h2 className="font-bold text-lg text-center md:text-left">Description</h2>
                            </div>
                            {product.description ? (
                                <div 
                                    className="product-details-description text-xs text-gray-600 text-justify" 
                                    dangerouslySetInnerHTML={{ __html: product.description, }} 
                                />
                            ) : (
                                <div className="text-xs text-gray-600 text-center md:text-left">
                                    No description.
                                </div>
                            )}
                        </div>
                </div>
            </section>
        </Layout>
    );
};

export const getStaticProps = async (context) => {
    const [id, _] = context.params.slug;
    const [
        profile,
        menu,
        productCategories,
        product,
        posts
    ] = await Promise.all([
        fetchProfile(),
        fetchMenu(),
        fetchProductCategories(),
        fetchProducts(id),
        fetchPosts(),
    ]);

    // Separate menu into navbar and footer menu
    let navbarMenu = [
        ...menu.filter((menuItem) => menuItem.position === 'navbar'),
        
    ];

    // Show/hide product category menu
    if (profile.product_category_menu) {
        navbarMenu = [
            ...navbarMenu,
            ...productCategories.map((productCategory) => ({
                title: productCategory.title,
                url: '/products/all/cat/' + productCategory.id + '/' + slugify(productCategory.title),
                path: '/products/all/[[...slug]]'
            })),
        ];
    }

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
            product: product,
            posts: newPosts,
        },
    };
};

export const getStaticPaths = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    let res;

    res = await fetch(apiUrl + 'items/products?fields=id,title&filter[status]=published');
    res = await res.json();
    const products = res.data;

    const paths = products.map((product) => ({
        params: {
            slug: [
                product.id + '',        // Convert int to string
                slugify(product.title),
            ],
        },
    }));

    return {
        paths: paths,
        fallback: false,
    };
};

export default ProductDetails;