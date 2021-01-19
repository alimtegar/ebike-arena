const OutlineButton = ({ children, color, contrastColor, onClick, width, height }) => {
    const colorClassName = color ? ' border-' + color + ' hover:bg-' + color + ' text-' + color : ' border-white hover:bg-white text-white';
    const contrastColorClassName = contrastColor ? ' hover:text-' + contrastColor : ' hover:text-gray-900';
    const widthClassName = width ? ' w-' + width : '';
    const heightClassName = height ? ' h-' + height : '';
    
    return (
        <button 
            className={
                'flex justify-center items-center text-xs text-white border-2 rounded-lg focus:outline-none pointer-events-auto' + 
                colorClassName +
                contrastColorClassName +
                widthClassName + 
                heightClassName
            }
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default OutlineButton;