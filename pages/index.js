import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Slider from '../components/Slider';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Products from '../components/Products';
import Posts from '../components/Posts';

// Fetchers
import { fetchProfile, fetchProductCategories, fetchMenu, fetchSlider, fetchServices, fetchProducts, fetchPosts } from '../fetchers';

// Helpers
import { slugify } from '../helpers';

const Home = ({ profile, navbarMenu, footerMenu, slider, services, recommendedProducts, latestProducts, posts }) => (
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
        <Slider slider={slider} />
        <AboutUs content={profile.content} />
        <Services services={services} />
        <Products
            recommendedProducts={recommendedProducts}
            latestProducts={latestProducts}
        />
        <Posts posts={posts.slice(0, 4)} />
    </Layout>
);



export const getStaticProps = async () => {
    const [
        profile,
        menu,
        productCategories,
        slider,
        services,
        recommendedProducts,
        latestProducts,
        posts
    ] = await Promise.all([
        fetchProfile(),
        fetchMenu(),
        fetchProductCategories(),
        fetchSlider(),
        fetchServices(),
        fetchProducts(
            false,          // ID
            true,           // Recommended
            false,          // Limit
            'created_on'    // Sort by
        ),
        fetchProducts(
            false,          // ID
            false,          // Recommended
            8,              // Limit
            'sort'          // Sort by
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
            slider: slider,
            services: services,
            recommendedProducts: recommendedProducts,
            latestProducts: latestProducts,
            posts: posts,
        },
    };
};

export default Home;