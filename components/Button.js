const Button = ({ children, onClick, width, height }) => {
    const initClassName = 'flex justify-center items-center bg-gray-900 font-semibold text-sm text-white focus:outline-none';
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

export default Button;