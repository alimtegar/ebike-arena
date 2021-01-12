import { useRouter } from 'next/router'
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import ProductsItem from '../components/Products/LatestProducts/LatestProductsItem';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import { InfoIcon } from '../components/Icons';

const Products = ({ profile, navbarMenu, footerMenu, products, posts }) => {
    const router = useRouter();
    const { sort, max_price, min_price } = router.query;

    return (
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
                            {/* Sort */}
                            <div className="mb-6">
                                <div className="mb-3">
                                    <span className="font-semibold">Sort by</span>
                                </div>
                                <div>
                                    <Select
                                        id="sort-select"
                                        name="sort-select"
                                        options={[
                                            { title: 'Latest', value: 'latest' },
                                            { title: 'Name', value: 'name' },
                                            { title: 'Price', value: 'price' },
                                        ]}
                                        selectedOption={sort}
                                        width="full"
                                        height={11}
                                    />
                                </div>
                            </div>

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
                        <div className="pt-6 md:pt-12 pb-3 md:pb-12 pl-3 md:pl-6 pr-3 md:pr-24">
                            <div className="flex items-center text-xs text-gray-600 mb-6">
                                <span className="mr-1.5">
                                    <InfoIcon width={4} height={4} />
                                </span>
                                Showing 10 of 100 results found in the products
                                </div>
                            <div className="flex flex-wrap -m-1.5">
                                {products.map((product, key) => (
                                    <div className="w-1/2 md:w-1/5 p-1.5" key={key}>
                                        <ProductsItem {...product} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export const getStaticProps = async () => {
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
            url: 'products/categories/' + productCategory.id,
        })),
    ];
    const footerMenu = menu.filter((menuItem) => menuItem.position === 'footer');

    // Fetch products
    res = await fetch(apiUrl + 'items/products?fields=image,title,price,discount&filter[status]=published&sort=created_on&limit=' + limit);
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

export default Products;