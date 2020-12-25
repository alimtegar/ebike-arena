import Posts from "./Posts";

const PostsItem = ({ title, image, height, headingSize }) => {
    const initClassname = 'relative bg-gray-500 text-white rounded';
    const heightClassname = height ? 'h-' + height : '';
    const headingSizeClassName = headingSize ? 'text-' + headingSize : '';
    
    return (
        <div className={[initClassname, heightClassname].join(' ')}>
            <div className={['absolute left-0 bottom-0 w-3/4 p-3'].join(' ')}>
                <h2 className={'font-bold mb-1 ' + headingSizeClassName}>{title}</h2>
                <h3 className="text-xs">12 December 2020</h3>
            </div>
        </div>
    );
};

export default PostsItem;