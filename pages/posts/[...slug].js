import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import { format } from 'date-fns';

// Fetchers
import { fetchProfile, fetchProductCategories, fetchMenu, fetchPosts } from '../../fetchers';

// Helpers
import { slugify, stripTrailingSlash, getSentence, stripHtml } from '../../helpers';

const PostDetails = ({ profile, navbarMenu, footerMenu, post, posts }) => (
    <Layout
        navbarMenu={navbarMenu}
        footerMenu={footerMenu}
        footerPosts={posts}
        footerSocialMedias={profile.social_medias}
    >
        <Seo
            title={process.env.NEXT_PUBLIC_WEB_TITLE}
            subtitle={post.title}
            description={getSentence(stripHtml(post.content), 0)}
            url={stripTrailingSlash(process.env.NEXT_PUBLIC_WEB_URL) + useRouter().asPath} // Current URL
            phone={profile.phone}
            image={post.image}
        />
        <section>
            <div className="relative flex justify-center items-center bg-gray-100 h-36 md:h-96 overflow-hidden">
                <img className="absolute max-w-none h-auto w-full focus:outline-none" src={post.image} alt={post.title} />
            </div>
            <div className="text-center px-6 md:px-24 py-6 md:py-12">

                <div className="mb-6 md:mb-12">
                    <h1 className="text-lg font-bold">
                        {post.title}
                    </h1>
                    <span className="text-xs text-gray-600">Published on {format(new Date(post.created_on), 'dd MMMM yyyy')}</span>
                </div>
                <div className="post-details-content text-xs text-gray-600 text-justify" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </section>
    </Layout>
);

export const getStaticProps = async (context) => {
    const [id, _] = context.params.slug;
    const [
        profile,
        menu,
        productCategories,
        post,
        posts
    ] = await Promise.all([
        fetchProfile(),
        fetchMenu(),
        fetchProductCategories(),
        fetchPosts(id),
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
            post: post,
            posts: newPosts,
        },
    };
};

export const getStaticPaths = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    let res;

    res = await fetch(apiUrl + 'items/posts?fields=id,title&filter[status]=published');
    res = await res.json();
    const posts = res.data;

    const paths = posts.map((post) => ({
        params: {
            slug: [
                post.id + '',        // Convert int to string
                slugify(post.title),
            ],
        },
    }));

    return {
        paths: paths,
        fallback: false,
    };
};

export default PostDetails;