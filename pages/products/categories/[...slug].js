import Products from '../../products';
import { slugify } from '../../../helpers';

export const getStaticProps = async (context) => {
    const [category, _] = context.params.slug;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const limit = 10;
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

    // Fetch products
    res = await fetch(apiUrl + 'items/products?fields=id,image,title,price,discount&filter[status]=published&filter[category]=' + category + '&sort=created_on&limit=' + limit);
    res = await res.json();
    let products = res.data;

    // Fetch product images
    res = await Promise.all(products.map((product) => fetch(apiUrl + 'files/' + product.image + '?fields=private_hash')));
    res = await Promise.all(res.map((resItem) => resItem.json()));

    products.map((product, key) => product.image = apiUrl + 'assets/' + res[key].data.private_hash + '?w=200&h=200&q=80&f=contain');

    // Fetch posts
    res = await fetch(apiUrl + 'items/posts?fields=created_on,image,title&filter[status]=published&sort=created_on&limit=5');
    res = await res.json();
    let posts = res.data;

    // Fetch latest product images
    res = await Promise.all(posts.map((post) => fetch(apiUrl + 'files/' + post.image + '?fields=private_hash')));
    res = await Promise.all(res.map((resItem) => resItem.json()));

    posts.map((post, key) => post.image = apiUrl + 'assets/' + res[key].data.private_hash + '?w=600&h=600&q=80&f=contain');
    
    return {
        props: {
            profile: profile,
            navbarMenu: navbarMenu,
            footerMenu: footerMenu,
            products: products,
            posts: posts,
        },
    };
};

export const getStaticPaths = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    let res;

    res = await fetch(apiUrl + 'items/product_categories?fields=id,title&filter[status]=published');
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

export default Products;