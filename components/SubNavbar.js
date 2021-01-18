import Link from './Link';

const SubNavbar = ({ menu }) => (
    <nav className="bg-gray-900 text-white py-3 overflow-scroll">
        <ul className="flex md:justify-center">
            {menu.map((menuItem, i) => (
                <li
                    className={`text-xs font-semibold px-2 whitespace-nowrap ${i > 0 && i < menu.length
                        ? 'border-l-2 border-gray-700'
                        : ''
                        }`}
                    key={menuItem.title}
                >
                    <Link 
                        href={menuItem.url} 
                        // activeClassName="bg-gray-700"
                    >
                        <a className="hover:bg-gray-700 px-2 py-1 rounded-lg">
                            {menuItem.title}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
);

export default SubNavbar;