import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import Seo from '../../../components/Seo';
import ProductsItem from '../../../components/Products/LatestProducts/LatestProductsItem';
import Pagination from '../../../components/Pagination';
import Loading from '../../../components/Loading';
import Empty from '../../../components/Empty';
import { CategoryFilter, SortFilter, PriceFilter } from '../../../components/Filters';
import { InfoIcon } from '../../../components/Icons';

import PostsItem from '../../../components/Posts/PostsItem';

// Fetchers
import { fetchProfile, fetchProductCategories, fetchMenu, fetchProducts, fetchPosts } from '../../../fetchers';

// Helpers
import { range, slugify, stripTrailingSlash, getParamVal } from '../../../helpers';

const Posts = (props) => {
    const { profile, navbarMenu, footerMenu, posts, footerPosts, lim, page, postsMeta } = props;

    return Object.keys(props).length ? (
        <Layout
            navbarMenu={navbarMenu}
            footerMenu={footerMenu}
            footerPosts={footerPosts}
            footerSocialMedias={profile.social_medias}
        >
            <Seo
                title={process.env.NEXT_PUBLIC_WEB_TITLE}
                subtitle="Posts"
                description={process.env.NEXT_PUBLIC_WEB_DESCRIPTION}
                url={stripTrailingSlash(process.env.NEXT_PUBLIC_WEB_URL) + useRouter().asPath} // Current URL
                phone={profile.phone}
            />

            <section className="px-24 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-lg font-bold mb-3">All News</h1>
                    <p className="text-xs text-gray-600">{posts.length ? 'Showing ' + (postsMeta.total_count - (page * lim) < 0 ? lim + (postsMeta.total_count - (page * lim)) : lim) + ' of ' + postsMeta.total_count : 'No'} results found in the products.</p>
                </div>
                <div className="flex flex-wrap -m-1.5">
                    {range(Math.ceil(posts.length / 4)).map((_, key1) => (
                        <Fragment key={key1}>
                            <div className="flex flex-grow w-full md:w-1/2 min-h-60 p-1.5">
                                <PostsItem {...posts[4 * key1]} height="full" headingSize="lg" imageCover="h" />
                            </div>
                            <div className="flex flex-wrap w-full md:w-1/2">
                                {posts.slice(4 * key1 + 1, 4 * key1 + 4).map((post, key2) => {
                                    const widthClassname = key2 ? " w-full md:w-1/2" : " w-full";
                                    const headingSize = key2 ? "sm" : "md";
                                    const imageCover = key2 ? 'h' : 'w';

                                    return (
                                        <div className={'p-1.5' + widthClassname} key={key2}>
                                            <PostsItem {...post} height={60} headingSize={headingSize} imageCover={imageCover} />
                                        </div>
                                    );
                                })}
                            </div>
                        </Fragment>
                    ))}
                </div>
                {postsMeta.page_count > 1 ? (
                    <Pagination total={postsMeta.page_count} active={page} />
                ) : null}
            </section>
        </Layout>
    ) : <Loading />;
};


export const getStaticProps = async (context) => {
    const slug = context.params.slug;

    // Category parameter
    const page = getParamVal(context.params, slug, 'page', 1);

    // Category parameter
    const lim = getParamVal(context.params, slug, 'lim', 20);

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
        posts,
        footerPosts
    ] = await Promise.all([
        fetchProfile(),
        fetchMenu(),
        fetchProductCategories(),
        fetchPosts(
            null,       // ID
            lim,        // Limit
            null,       // Sort
            q,          // Search query
            page,       // Page
            '*'         // Meta
        ),
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
        ...posts.data.map((post) => ({
            ...post,
            url: '/posts/' + post.id + '/' + slugify(post.title),
            path: '/posts/[...slug]',
        })),
    ];

    const newFooterPosts = [
        ...footerPosts.map((post) => ({
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
            footerPosts: newFooterPosts,
            lim: lim,
            page: page,
            postsMeta: posts.meta,
        },
        revalidate: 1,
    };
};

export const getStaticPaths = async () => ({ paths: [], fallback: true, });

export default Posts;