import Link from '../Link';

const SliderItem = ({ title, image, url }) => (
    <Link href={url}>
        <a className="relative flex justify-center items-center w-full h-full overflow-hidden">
            <img className="absolute max-w-none h-auto w-full focus:outline-none" src={image} alt={title} />
        </a>
    </Link>
);

export default SliderItem;