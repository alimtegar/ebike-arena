import { Fragment } from 'react';
import PostsItem from './PostsItem';
import { ChevronRightIcon } from '../Icons';
import { range } from '../../helpers';

const Posts = ({ posts }) => {
    // const posts = [
    //     { title: 'Suspendisse Nec Leo Dapibus Ipsum Iaculis Blandit', url: '/products/product-details', image: 'https://www.rodalink.com/pub/media/rodalinkapp/blogpost/image/1/6/1606813611.jpg', },
    //     { title: 'Vivamus vel Metus ac Tellus Faucibus Pellentesque', url: '/products/product-details', image: 'https://www.rodalink.com/pub/media/rodalinkapp/blogpost/image/1/6/1605783294.jpg', },
    //     { title: 'Sed Euismod Risus Quis Euismod', url: '/products/product-details', image: 'https://www.rodalink.com/pub/media/rodalinkapp/blogpost/image/1/6/1603764650.jpg', },
    //     { title: 'Ut Egestas Tellus Vitae Aliquet Pulvinar', url: '/products/product-details', image: 'https://www.rodalink.com/pub/media/wysiwyg/blog/blog_2020/keselamatan_bersepeda_untuk_riders_5.jpg', },
    // ];

    return (
        <section className="text-center md:text-left px-3 md:px-24 pt-6 md:pt-12 pb-3 md:pb-12">
            <div className="mb-6">
                <a className="inline-flex items-center text-gray-400 hover:text-gray-900 transition" href="#">
                    <h1 className="text-lg text-gray-900 font-bold">Posts</h1>
                    <span className="ml-1">
                        <ChevronRightIcon width={5} height={5} />
                    </span>
                </a>
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
        </section>
    );
};

export default Posts;