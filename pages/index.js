import { NextSeo, CorporateContactJsonLd } from 'next-seo';

import Layout from '../components/Layout';
import Slider from '../components/Slider';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Products from '../components/Products';
import Posts from '../components/Posts';

const Home = ({ profile, menu, slider, services, recommendedProducts, latestProducts, posts }) => (
    <Layout>
        {/* Make the default for this */}
        <NextSeo titleTemplate={process.env.NEXT_PUBLIC_WEB_TITLE + ' | Home'} />
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
        <Slider slider={slider} />
        <AboutUs content={profile.content} />
        <Services services={services} />
        <Products recommendedProducts={recommendedProducts} latestProducts={latestProducts} />
        <Posts posts={posts} />
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
    res = await fetch(apiUrl + 'items/menu?fields=title,url,position&filter[status]=published&sort=sort');
    res = await res.json();
    const menu = res.data;

    // Fetch slider
    res = await fetch(apiUrl + 'items/slider?fields=image,title,url&filter[status]=published&sort=sort');
    res = await res.json();
    let slider = res.data;

    // Fetch slider images
    res = await Promise.all(slider.map((sliderItem) => fetch(apiUrl + 'files/' + sliderItem.image + '?fields=private_hash')));
    res = await Promise.all(res.map((resItem) => resItem.json()));

    slider.map((sliderItem, key) => sliderItem.image = apiUrl + 'assets/' + res[key].data.private_hash + '?w=1400&h=1400&q=80&f=contain');

    // Fetch services
    res = await fetch(apiUrl + 'items/services?fields=title,description,image&filter[status]=published&sort=sort');
    res = await res.json();
    let services = res.data;

    // Fetch service images
    res = await Promise.all(services.map((service) => fetch(apiUrl + 'files/' + service.image + '?fields=private_hash')));
    res = await Promise.all(res.map((resItem) => resItem.json()));

    services.map((service, key) => service.image = apiUrl + 'assets/' + res[key].data.private_hash + '?w=200&h=200&q=80&f=contain');

    // Fetch recommended products
    res = await fetch(apiUrl + 'items/products?fields=image,title,price,discount&filter[status]=published&filter[recommended]=1&sort=created_on');
    res = await res.json();
    let recommendedProducts = res.data;

    // Fetch recommended product images
    res = await Promise.all(recommendedProducts.map((recommendedProduct) => fetch(apiUrl + 'files/' + recommendedProduct.image + '?fields=private_hash')));
    res = await Promise.all(res.map((resItem) => resItem.json()));

    recommendedProducts.map((recommendedProduct, key) => recommendedProduct.image = apiUrl + 'assets/' + res[key].data.private_hash + '?w=600&h=600&q=80&f=contain');

    // Fetch latest products
    res = await fetch(apiUrl + 'items/products?fields=image,title,price,discount&filter[status]=published&sort=created_on&limit=8');
    res = await res.json();
    let latestProducts = res.data;

    // Fetch latest product images
    res = await Promise.all(latestProducts.map((latestProduct) => fetch(apiUrl + 'files/' + latestProduct.image + '?fields=private_hash')));
    res = await Promise.all(res.map((resItem) => resItem.json()));

    latestProducts.map((latestProduct, key) => latestProduct.image = apiUrl + 'assets/' + res[key].data.private_hash + '?w=200&h=200&q=80&f=contain');

    // Fetch posts
    res = await fetch(apiUrl + 'items/posts?fields=created_on,image,title&filter[status]=published&sort=created_on&limit=4');
    res = await res.json();
    let posts = res.data;

    // Fetch latest product images
    res = await Promise.all(posts.map((post) => fetch(apiUrl + 'files/' + post.image + '?fields=private_hash')));
    res = await Promise.all(res.map((resItem) => resItem.json()));

    posts.map((post, key) => post.image = apiUrl + 'assets/' + res[key].data.private_hash + '?w=600&h=600&q=80&f=contain');

    console.log('posts', posts);

    return {
        props: {
            profile: profile,
            menu: menu,
            slider: slider,
            services: services,
            recommendedProducts: recommendedProducts,
            latestProducts: latestProducts,
            posts: posts,
        },
    };
}

export default Home;