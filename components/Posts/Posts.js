import PostsItem from './PostsItem';
import { ChevronRightIcon } from '../Icons';
import { range } from '../../helpers';

const Posts = () => {
    const posts = [
        { title: 'Suspendisse Nec Leo Dapibus Ipsum Iaculis Blandit', image: '/images/slider.png', },
        { title: 'Vivamus vel Metus ac Tellus Faucibus Pellentesque', image: '/images/slider.png', },
        { title: 'Sed Euismod Risus Quis Euismod', image: '/images/slider.png', },
        { title: 'Ut Egestas Tellus Vitae Aliquet Pulvinar', image: '/images/slider.png', },
    ];

    return (
        <section className="px-32 py-16">
            <a className="flex items-center text-gray-400 hover:text-gray-900 mb-6 transition" href="#">
                <h1 className="text-lg text-gray-900 font-bold">Posts</h1>
                <ChevronRightIcon className="w-5 h-5 ml-1" />
            </a>
            <div className="flex flex-wrap -m-1.5">
                {range(Math.ceil(posts.length / 4)).map((_, key1) => (
                    <>
                        <div className="w-1/2 p-1.5">
                            <PostsItem title={posts[4 * key1].title} height="full" headingSize="lg" />
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            {posts.slice(4 * key1 + 1, 4 * key1 + 4).map((post, key2) => {
                                const initClassname = "p-1.5";
                                const widthClassname = key2 ? "w-1/2" : "w-full";
                                const headingSize = key2 ? "sm" : "md";

                                return (
                                    <div className={[initClassname, widthClassname].join(' ')}>
                                        <PostsItem title={post.title} height={48} headingSize={headingSize} />
                                    </div>
                                );
                            })}
                        </div>
                    </>
                ))}
            </div>
        </section>
    );
};

export default Posts;