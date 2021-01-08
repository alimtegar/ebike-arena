import Link from '../Link';
import NavbarSearch from './NavbarSearch';
import NavbarMenu from './NavbarMenu';

const Navbar = () => (
    <nav className="flex justify-between items-center bg-white py-3 px-3 md:px-32">
        <div className="md:w-1/4">
            <Link href="/">
                <a className="flex items-center font-bold text-lg">
                    <img className="h-11 mr-1" src="/images/logo512.png" alt="Logo" />
                    ebike arena
                    <sup className="font-semibold text-sm ml-1">.id</sup>
                </a>
            </Link>
        </div>

        <div className="hidden md:flex w-1/2">
            <NavbarSearch />
        </div>
        <div className="flex md:w-1/4 justify-end">
            <NavbarMenu />
        </div>
    </nav>
);

export default Navbar;