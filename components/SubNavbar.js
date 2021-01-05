const SubNavbar = () => {
    const menu = [
        { title: 'Why EMTB', url: '#', },
        { title: 'Bikes', url: '/products', },
        { title: 'Spareparts', url: '/products', },
        { title: 'Wheels and Tires', url: '/products', },
        { title: 'Apparel', url: '/products', },
        { title: 'Footwears', url: '/products', },
        { title: 'Protection', url: '/products', },
        { title: 'Maintenance', url: '/products', },
        { title: 'Accessories', url: '/products', },
        { title: 'Fuels and Supplements', url: '/products', },
    ];

    return (
        <nav className="bg-gray-900 text-white py-3 overflow-scroll">
            <ul className="flex md:justify-center">
                {menu.map((menuItem, i) => (
                    <li
                        className={`text-xs font-semibold px-4 whitespace-nowrap ${i > 0 && i < menu.length
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