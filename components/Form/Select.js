import { ChevronDownIcon } from '../Icons';

const Select = ({ id, name, options, selectedOption, width, height, onChange }) => {
    const widthClassName = width ? ' w-' + width : '';
    const heightClassName = height ? ' h-' + height : '';

    return (
        <div className="relative">
            <select
                className={
                    'text-xs border-2 border-gray-300 px-4 rounded-lg focus:outline-none focus:border-gray-900 appearance-none' +
                    widthClassName +
                    heightClassName
                }
                id={id}
                name={name}
                onChange={onChange}
            >
                {options.map((option, key) => (
                    <option value={option.value} selected={option.value == selectedOption} key={key}>{option.title}</option>
                ))}
            </select>
            <span className="absolute top-1/2 right-3 transform -translate-y-1/2">
                <ChevronDownIcon width={5} height={5} color="gray-400" />
            </span>
        </div>
    );
};

export default Select;