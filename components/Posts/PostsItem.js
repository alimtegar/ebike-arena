import Link from '../Link';
import { slugify } from '../../helpers';

const PostsItem = ({ id, title, image, height, headingSize, imageCover }) => {
    const heightClassName = height ? ' h-' + height : '';
    const headingSizeClassName = headingSize ? ' text-' + headingSize : '';
    const imageCoverClassName = imageCover ? ' w-full md:w-auto md:' + imageCover + '-full group-hover:scale-105' : '';

    return (
        <Link href={'/posts/' + id + '/' + slugify(title)}>
            <a className={'group relative flex justify-center items-center bg-gray-500 text-left text-white w-full rounded-lg overflow-hidden' + heightClassName}>
                <div className="absolute z-10 left-0 bottom-0 w-3/4 p-3">

                    <span className={'inline-flex font-bold group-hover:underline mb-1' + headingSizeClassName}>
                        <h2>{title}</h2>
                    </span>
                    <h3 className="text-xs">12 December 2020</h3>
                </div>

                <img className={'absolute max-w-none transform transition duration-300' + imageCoverClassName} src={image + ''} alt={title} />
            </a>
        </Link>
    );
};

export default PostsItem;