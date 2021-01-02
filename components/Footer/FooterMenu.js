const FooterMenu = ({ title, menu }) => (
    <div>
        <h2 className="font-semibold mb-3">{title}</h2>
        <ul className="text-xs -my-1.5">
            {menu.map((menuItem, key) => (
                <li className="py-1.5" key={key}>
                    <a className="text-gray-400 hover:text-white hover:underline" href={menuItem.url}>
                        {menuItem.title}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export default FooterMenu;