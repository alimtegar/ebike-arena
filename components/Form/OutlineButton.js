const OutlineButton = ({ children, onClick, width, height }) => {
    const widthClassName = width ? ' w-' + width : '';
    const heightClassName = height ? ' h-' + height : '';
    
    return (
        <button 
            className={'flex justify-center items-center text-white border-2 border-white rounded-lg hover:bg-white hover:text-gray-900 focus:outline-none pointer-events-auto' + widthClassName + heightClassName}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default OutlineButton;