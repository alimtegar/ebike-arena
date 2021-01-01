const Input = ({ type, placeholder, width, height, prefix }) => {
    const widthClassName = width ? ' w-' + width : '';
    const heightClassName = height ? ' h-' + height : '';
    const paddingClassName = prefix ? ' py-4 pl-16 pr-4' : ' px-4';

    return (
        <div className={'relative' + widthClassName}>
            {prefix ? (
                <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-center items-center text-xs text-gray-600 w-12 h-8 border-r-2">
                    {prefix}
                </div>
            ) : null}
            <input
                className={
                    'text-xs border-2 border-gray-300 focus:border-gray-900 rounded focus:outline-none' +
                    paddingClassName +
                    widthClassName +
                    heightClassName
                }
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;