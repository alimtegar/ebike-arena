const SliderItem = ({ title, image, url }) => (
    <a className="relative flex justify-center items-center w-full h-full overflow-hidden" href={url}>
        <img className="absolute max-w-none h-auto w-full focus:outline-none" src={image} alt={title} />
    </a>
);

export default SliderItem;