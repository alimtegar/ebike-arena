const PostsItem = ({ title, image, url, height, headingSize, imageCover }) => {;
    const heightClassName = height ? ' h-' + height : '';
    const headingSizeClassName = headingSize ? ' text-' + headingSize : '';
    const imageCoverClassName = imageCover ? ' w-full md:' + imageCover + '-full group-hover:scale-105' : '';
    
    return (
        <a className={'group relative flex justify-center items-center bg-gray-500 text-left text-white w-full rounded overflow-hidden' + heightClassName} href="#">
            <div className="absolute z-10 left-0 bottom-0 w-3/4 p-3">
                <a className={'inline-flex font-bold group-hover:underline mb-1' + headingSizeClassName} href={url}>
                    <h2>{title}</h2>
                </a>
                <h3 className="text-xs">12 December 2020</h3>
            </div>
            
                <img className={'absolute max-w-none transform transition duration-300' + imageCoverClassName} src={image + ''} alt={title}/>
        </a>
    );
};

export default PostsItem;