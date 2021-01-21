const TextArea = ({ id, name, width, height, placeholder, value, onChange }) => {
    const widthClassName = width ? ' w-' + width : '';
    const heightClassName = height ? ' h-' + height : '';

    return (
        <textarea
            className={
                'text-xs p-3 border-2 border-gray-300 focus:border-gray-900 rounded-lg focus:outline-none' +
                widthClassName +
                heightClassName
            }
            id={id}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
        >
            {value}
        </textarea>
    );
};

export default TextArea;