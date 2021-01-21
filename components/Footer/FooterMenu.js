import Link from '../Link';

const formatSup = (str) => {
    let strArr = str.split('^');

    strArr = [
        strArr[0],
        strArr.slice(1).map((strArrItem) => strArrItem = '<sup class=" ml-1">' + strArrItem + '</sup>')
    ];


    return <span dangerouslySetInnerHTML={{ __html: strArr.join('') }} />
};

const FooterMenu = ({ title, menu }) => (
    <div>
        <h2 className="font-semibold mb-3">{title}</h2>
        <ul className="text-xs -my-1.5">
            {menu.map((menuItem, key) => (
                <li className="py-1.5" key={key}>
                    <Link href={menuItem.url}>
                        <a className="text-gray-400 hover:text-white hover:underline">
                            {formatSup(menuItem.title)}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default FooterMenu;