const Button = ({ children, onClick, width, height, rounded }) => {
    const widthClassName = width ? ' w-' + width : '';
    const heightClassName = height ? ' h-' + height : '';
    const roundedClassName = rounded ? ' rounded-lg' : '';

    return (
        <button
            className={
                'flex justify-center items-center bg-gray-900 font-semibold text-xs text-white focus:outline-none' +
                widthClassName +
                heightClassName +
                roundedClassName
            }
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;