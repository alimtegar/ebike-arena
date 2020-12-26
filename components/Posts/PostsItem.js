const PostsItem = ({ title, image, height, headingSize, imageCover }) => {;
    const heightClassName = height ? ' h-' + height : '';
    const headingSizeClassName = headingSize ? ' text-' + headingSize : '';
    const imageCoverClassName = imageCover ? ' ' + imageCover + '-full' : '';
    
    return (
        <div className={'relative flex justify-center items-center bg-gray-500 text-white w-full rounded overflow-hidden' + heightClassName}>
            <div className="absolute z-10 left-0 bottom-0 w-3/4 p-3">
                <h2 className={'font-bold mb-1' + headingSizeClassName}>{title}</h2>
                <h3 className="text-xs">12 December 2020</h3>
            </div>

            <img className={'absolute max-w-none' + imageCoverClassName} src={image} alt={title}/>
        </div>
    );
};

export default PostsItem;