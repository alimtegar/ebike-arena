import { NextSeo, CorporateContactJsonLd } from 'next-seo';

import Layout from '../components/Layout';
import Slider from '../components/Slider';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Products from '../components/Products';
import Posts from '../components/Posts';

const Home = ({ profile, menu, slider, services, recommendedProducts, latestProducts }) => (
    <Layout>
        {/* Make the default for this */}
        <NextSeo
            titleTemplate={process.env.NEXT_PUBLIC_WEB_TITLE + ' | Home'}
        />

        <CorporateContactJsonLd
            url={process.env.NEXT_PUBLIC_WEB_URL}
            logo={process.env.NEXT_PUBLIC_WEB_URL + 'images/android-icon-1024x1024.png'}
            contactPoint={[
                {
                    telephone: profile.phone,
                    contactType: 'customer service',
                    availableLanguage: ['English', 'Indonesia'],
                },
            ]}
        />


        <Slider />
        <AboutUs />
        <Services />
        <Products />
        <Posts />
    </Layout>
);

export const getStaticProps = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    let res;

    // Fetch profile
    res = await fetch(apiUrl + 'items/profile');
    res = await res.json();
    const profile = res.data[0];

    // Fetch menu
    res = await fetch(apiUrl + 'items/menu?filter[status]=published&sort=sort');
    res = await res.json();
    const menu = res.data;

    // Fetch slider
    res = await fetch(apiUrl + 'items/slider?filter[status]=published&sort=sort');
    res = await res.json();
    const slider = res.data;

    // Fetch services
    res = await fetch(apiUrl + 'items/services?filter[status]=published&sort=sort');
    res = await res.json();
    const services = res.data;

    // Fetch recommended posts
    res = await fetch(apiUrl + 'items/products?filter[status]=published&filter[recommended]=1&sort=created_on');
    res = await res.json();
    const recommendedProducts = res.data;

    // Fetch latest posts
    res = await fetch(apiUrl + 'items/products?filter[status]=published&sort=created_on&limit=8');
    res = await res.json();
    const latestProducts = res.data;


    return {
        props: {
            profile: profile,
            menu: menu,
            slider: slider,
            services: services,
            recommendedProducts: recommendedProducts,
            latestProducts: latestProducts
        },
    };
}

export default Home;