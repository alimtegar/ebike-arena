const OutlineButton = ({ children, onClick, width, height }) => {
    const initClassName = 'flex justify-center items-center text-white border-2 border-white rounded hover:bg-white hover:text-gray-900 focus:outline-none pointer-events-auto';
    const widthClassName = width ? ' w-' + width : '';
    const heightClassName = height ? ' h-' + height : '';
    
    return (
        <button 
            className={initClassName + widthClassName + heightClassName}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default OutlineButton;