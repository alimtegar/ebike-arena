import NavbarSearch from './NavbarSearch';
import NavbarMenu from './NavbarMenu';

const Navbar = () => (
    <nav className="flex justify-between items-center bg-white py-3 px-32">
        <span className="flex items-center font-bold text-lg">
            <img className="h-11 mr-2" src="/images/logo512.png" alt="Logo"/>

            ebike arena

            <sup className="font-semibold text-sm ml-0.5">
                .id
            </sup>
        </span>

        <NavbarSearch />
        <NavbarMenu />
    </nav>
);

export default Navbar;