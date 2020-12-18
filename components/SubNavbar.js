const SubNavbar = () => {
    const menu = [
        { title: 'Bikes', url: '#', },
        { title: 'Spare Parts', url: '#', },
        { title: 'Wheels & Tires', url: '#', },
        { title: 'Apparel', url: '#', },
        { title: 'Footwears', url: '#', },
        { title: 'Protection', url: '#', },
        { title: 'Maintenance', url: '#', },
        { title: 'Accessories', url: '#', },
        { title: 'Training', url: '#', },
    ];

    return (
        <nav className="bg-gray-900 text-white py-3">
            <ul className="flex justify-center">
                {menu.map((menuItem, i) => (
                    <li 
                        className={`text-sm font-semibold px-4 ${
                            i > 0 && i < menu.length 
                                ? 'border-l-2 border-gray-700' 
                                : ''
                        }`}
                        key={menuItem.title}
                    >
                        {menuItem.title}
                    </li>        
                ))}
            </ul>
        </nav>
    );
};

export default SubNavbar;