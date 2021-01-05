import NavbarSearch from './NavbarSearch';
import NavbarMenu from './NavbarMenu';

const Navbar = () => (
    <nav className="flex justify-between items-center bg-white py-3 px-3 md:px-32">
        <div className="w-1/4">
            <a className="flex items-center font-bold text-lg" href="/">
                <img className="h-11 mr-1" src="/images/logo512.png" alt="Logo" />
            ebike arena
            <sup className="font-semibold text-sm ml-0.5">.id</sup>
            </a>
        </div>

        <div className="w-1/2">
            <NavbarSearch />
        </div>
        <div className="flex w-1/4 justify-end">
            <NavbarMenu />
        </div>
    </nav>
);

export default Navbar;