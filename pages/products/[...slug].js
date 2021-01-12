import Magnifier from "react-magnifier";
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import ProductItemDiscountLabel from '../../components/Products/ProductsItemDiscountLabel';
import Button from '../../components/Button';
import { discountPrice, slugify } from '../../helpers';

const ProductDetails = ({ profile, navbarMenu, footerMenu, product, posts }) => (
    <Layout
        navbarMenu={navbarMenu}
        footerMenu={footerMenu}
        footerPosts={posts}
        footerSocialMedias={profile.social_medias}
    >
        <Seo
            title={process.env.NEXT_PUBLIC_WEB_TITLE}
            description={process.env.NEXT_PUBLIC_WEB_DESCRIPTION}
            url={process.env.NEXT_PUBLIC_WEB_URL}
            phone={profile.phone}
        />
        <section className="product-details flex flex-col bg-gray-100 px-3 md:px-24 pt-3 md:pt-12 pb-3 md:pb-12">
            <div className="relative z-10 bg-white mb-0 md:-mb-3x rounded-lg shadow-sm hover:shadow transition duration-300 overflow-hidden">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-2/3">
                        <Magnifier className="flex justify-center items-center -mb-2" src={'/images/slider-1.jpg'} mgShowOverflow={false} />
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
                                            <span className="font-semibold">{product.category.title}</span>
                                        </td>
                                    </tr>
                                    <tr className="border-b-2 border-gray-200">
                                        <td className="w-24 py-3">
                                            <span className="text-xs text-gray-600">Price</span>
                                        </td>
                                        <td>
                                            {product.discount ? (
                                                <s className="text-xs text-gray-400 mr-2">
                                                    Rp{product.price.toLocaleString('id-ID')}
                                                </s>
                                            ) : null}
                                            <span className="font-semibold">
                                                Rp{discountPrice(product.price, product.discount).toLocaleString('id-ID')}
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
                                <div className="flex">
                                    <input
                                        className="text-xs w-20 h-11 mr-3 px-4 border-2 border-gray-300 focus:border-gray-900 rounded-lg focus:outline-none"
                                        type="number"
                                        minLength={1}
                                        maxLength={product.stock}
                                        value={1}
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
        <section className="product-details-content relative px-6 md:px-24 py-6 md:py-12">
            <div className="flex flex-wrap -m-6">
                <div className="w-full md:w-1/2 p-6">
                    <div className="mb-6">
                        <h2 className="font-bold text-lg">Specifications</h2>
                    </div>
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
                </div>
                <div className="w-full md:w-1/2 p-6">
                    <div className="mb-6">
                        <h2 className="font-bold text-lg">Description</h2>
                    </div>
                    <div className="product-details-description text-xs text-gray-600 text-justify" dangerouslySetInnerHTML={{ __html: product.description, }} />
                </div>
            </div>
        </section>
    </Layout>
);

export const getStaticProps = async (context) => {
    const [id, _] = context.params.slug;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    let res;

    // Fetch profile
    res = await fetch(apiUrl + 'items/profile');
    res = await res.json();
    const profile = res.data[0];

    // Fetch product categories
    res = await fetch(apiUrl + 'items/product_categories?fields=id,title&filter[status]=published&sort=sort');
    res = await res.json();
    const productCategories = res.data;

    // Fetch menu
    res = await fetch(apiUrl + 'items/menu?fields=title,url,position&filter[status]=published&sort=sort');
    res = await res.json();
    const menu = res.data;
    const navbarMenu = [
        ...menu.filter((menuItem) => menuItem.position === 'navbar'),
        ...productCategories.map((productCategory) => ({
            title: productCategory.title,
            url: '/products/categories/' + productCategory.id + '/' + slugify(productCategory.title),
        })),
    ];
    const footerMenu = menu.filter((menuItem) => menuItem.position === 'footer');

    // Fetch product
    res = await fetch(apiUrl + 'items/products/' + id);
    res = await res.json();
    let product = res.data;

    // Fetch product image
    res = await fetch(apiUrl + 'files/' + product.image + '?fields=private_hash');
    res = await res.json();

    product.image = apiUrl + 'assets/' + res.data.private_hash + '?w=1400&h=1400&q=80&f=contain';

    // Fetch product category
    res = await fetch(apiUrl + 'items/product_categories/' + product.category + '?fields=id,title');
    res = await res.json();

    product.category = res.data;

    // Fetch posts
    res = await fetch(apiUrl + 'items/posts?fields=created_on,image,title&filter[status]=published&sort=created_on&limit=5');
    res = await res.json();
    let posts = res.data;

    // Fetch latest post images
    res = await Promise.all(posts.map((post) => fetch(apiUrl + 'files/' + post.image + '?fields=private_hash')));
    res = await Promise.all(res.map((resItem) => resItem.json()));

    posts.map((post, key) => post.image = apiUrl + 'assets/' + res[key].data.private_hash + '?w=600&h=600&q=80&f=contain');

    return {
        props: {
            profile: profile,
            navbarMenu: navbarMenu,
            footerMenu: footerMenu,
            product: product,
            posts: posts,
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