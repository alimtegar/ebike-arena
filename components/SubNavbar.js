const SubNavbar = () => {
    const menu = [
        { title: 'Bikes', url: '#', },
        { title: 'Spareparts', url: '#', },
        { title: 'Wheels & Tires', url: '#', },
        { title: 'Apparel', url: '#', },
        { title: 'Footwears', url: '#', },
        { title: 'Protection', url: '#', },
        { title: 'Maintenance', url: '#', },
        { title: 'Accessories', url: '#', },
        { title: 'Fuels & Supplements', url: '#', },
    ];

    return (
        <nav className="bg-gray-900 text-white py-3 shadow overflow-scroll">
            <ul className="flex md:justify-center">
                {menu.map((menuItem, i) => (
                    <li
                        className={`text-sm font-semibold px-4 whitespace-nowrap ${i > 0 && i < menu.length
                                ? 'border-l-2 border-gray-700'
                                : ''
                            }`}
                        key={menuItem.title}
                    >
                        <a href="#">
                            {menuItem.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SubNavbar;