const Button = ({ children, type, onClick, width, height, rounded }) => {
    const widthClassName = width ? ' w-' + width : '';
    const heightClassName = height ? ' h-' + height : '';
    const roundedClassName = rounded ? ' rounded-lg' : '';

    return (
        <button
            className={
                'flex justify-center items-center bg-gray-900 hover:bg-gray-700 font-semibold text-xs text-white focus:outline-none' +
                widthClassName +
                heightClassName +
                roundedClassName
            }
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;