const Select = ({ id, name, options, width, height }) => {
    const widthClassName = width ? ' w-' + width : '';
    const heightClassName = height ? ' h-' + height : '';

    return (
        <select
            className={
                'text-xs border-2 border-gray-300 px-4 rounded focus:outline-none focus:border-gray-900 appearance-none' +
                widthClassName + 
                heightClassName
            }
            id={id}
            name={name}
        >
            {options.map((option, key) => (
                <option value={option.value} selected={option.selected} key={key}>{option.title}</option>
            ))}
        </select>
    );
};

export default Select;