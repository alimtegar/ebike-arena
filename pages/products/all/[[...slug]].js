import { useRouter } from 'next/router'
import Layout from '../../../components/Layout';
import Seo from '../../../components/Seo';
import ProductsItem from '../../../components/Products/LatestProducts/LatestProductsItem';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { InfoIcon } from '../../../components/Icons';

// Fetchers
import { fetchProfile, fetchProductCategories, fetchMenu, fetchProducts, fetchPosts } from '../../../fetchers';

// Helpers
import { slugify } from '../../../helpers';
import SortFilter from '../../../components/SortFilter';

const Empty = () => (
    <div className="flex flex-grow justify-center items-center">
        <img className="h-20 opacity-10	" src="/images/empty.png" alt="Empty" />
    </div>
);

const Products = (props) => {
    const { profile, navbarMenu, footerMenu, products, posts, limit, sort } = props;

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
                url={process.env.NEXT_PUBLIC_WEB_URL}
                phone={profile.phone}
            />

            <section className="bg-gray-100">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/5">
                        <div className="bg-white h-full px-6 py-6 md:py-12">
                            <SortFilter />

                            {/* Price */}
                            <div>
                                <div className="mb-3">
                                    <span className="font-semibold mr-1">Price</span>
                                </div>
                                <div className="text-center">
                                    <div className="mb-3">
                                        <Input type="text" placeholder="Minimal price..." width="full" height={11} prefix="Rp" />
                                    </div>
                                    <div className="mb-3">
                                        <Input type="text" placeholder="Maximal price..." width="full" height={11} prefix="Rp" />
                                    </div>
                                    <Button width="full" height={11} rounded={true}>Apply</Button>
                                </div>
                            </div>
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
    ) : 'loading..';
};


export const getStaticProps = async (context) => {
    const slug = context.params.slug;
    const limit = 20;
    const page = 1;

    // Category parameter
    const catId = slug.includes('cat') ? slug[slug.indexOf('cat') + 1] : false;

    // Price parameter
    const px = slug[slug.indexOf('px') + 1];
    const pxArr = px.split('-');
    const minPx = pxArr[0];
    const maxPx = pxArr[0];

    // Sort parameter
    const sort = slug[slug.indexOf('sort') + 1];
    let newSort;

    switch (sort) {
        case 'latest': newSort = 'created_on'; break;
        case 'name': newSort = 'title'; break;
        default: newSort = false; break;
    }

    // Search query parameter
    const q = slug[slug.indexOf('q') + 1];

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
            false,     // Recommended
            false,     // Limit
            newSort,   // Sort by
            catId,     // Category
            q,
        ),
        fetchPosts(),
    ]);

    // Separate menu into navbar and footer menu
    const navbarMenu = [
        ...menu.filter((menuItem) => menuItem.position === 'navbar'),
        ...productCategories.map((productCategory) => ({
            title: productCategory.title,
            url: 'products/categories/' + productCategory.id + '/' + slugify(productCategory.title),
            path: 'products/categories/[...slug]'
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
            limit: limit,
            sort: newSort,
        },
        revalidate: 1,
    };
};

export const getStaticPaths = async () => ({ paths: [], fallback: true, });

export default Products;