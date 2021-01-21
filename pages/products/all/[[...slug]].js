import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import Seo from '../../../components/Seo';
import ProductsItem from '../../../components/Products/LatestProducts/LatestProductsItem';
import Loading from '../../../components/Loading';
import Empty from '../../../components/Empty';
import { SortFilter, PriceFilter } from '../../../components/Filters';
import { InfoIcon } from '../../../components/Icons';

// Fetchers
import { fetchProfile, fetchProductCategories, fetchMenu, fetchProducts, fetchPosts } from '../../../fetchers';

// Helpers
import { slugify, stripTrailingSlash, getParamVal } from '../../../helpers';

const Products = (props) => {
    const { profile, navbarMenu, footerMenu, products, posts } = props;

    return Object.keys(props).length ? (
        <Layout
            navbarMenu={navbarMenu}
            footerMenu={footerMenu}
            footerPosts={posts}
            footerSocialMedias={profile.social_medias}
        >
            <Seo
                title={process.env.NEXT_PUBLIC_WEB_TITLE}
                subtitle="Products"
                description={process.env.NEXT_PUBLIC_WEB_DESCRIPTION}
                url={stripTrailingSlash(process.env.NEXT_PUBLIC_WEB_URL) + useRouter().asPath} // Current URL
                phone={profile.phone}
            />

            <section className="bg-gray-100">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/5">
                        <div className="bg-white h-full px-6 py-6 md:py-12">
                            <SortFilter />
                            <PriceFilter />
                        </div>
                    </div>
                    <div className="w-full md:w-4/5">
                        <div className="flex flex-col min-h-full pt-6 md:pt-12 pb-3 md:pb-12 pl-3 md:pl-6 pr-3 md:pr-24">
                            <div className="flex items-center text-xs text-gray-600 mb-6">
                                <span className="mr-1.5">
                                    <InfoIcon width={4} height={4} />
                                </span>

                                {products.length ? 'Showing 10 of 100' : 'No'} results found in the products
                                </div>

                            <div className="flex flex-grow flex-wrap -m-1.5">
                                {products.length ? products.map((product, key) => (

                                    <div className="w-1/2 md:w-1/5 p-1.5" key={key}>
                                        <ProductsItem {...product} />
                                    </div>

                                )) : (<Empty />)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    ) : <Loading />;
};


export const getStaticProps = async (context) => {
    const slug = context.params.slug;
    const limit = 20;
    const page = 1;

    // Category parameter
    const catId = getParamVal(context.params, slug, 'cat', null);

    // Price parameter
    const px = getParamVal(context.params, slug, 'px', '-');
    const pxArr = px.split('-');
    const minPx = parseInt(pxArr[0]) || 0;
    const maxPx = parseInt(pxArr[1]) || 999_999_999_999;
    const newPx = minPx + ',' + maxPx;

    // Sort parameter
    const sort = getParamVal(context.params, slug, 'sort', null);
    let newSort;

    switch (sort) {
        case 'latest': newSort = 'created_on'; break;
        case 'name': newSort = 'title'; break;
        default: newSort = null; break;
    }

    // Search query parameter
    const q = getParamVal(context.params, slug, 'q', null);

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
            null,       // Limit
            newSort,    // Sort by
            newPx,      // Price
            catId,      // Category
            q,          // Search query
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
            products: products,
            posts: newPosts,
        },
        revalidate: 1,
    };
};

export const getStaticPaths = async () => ({ paths: [], fallback: true, });

export default Products;