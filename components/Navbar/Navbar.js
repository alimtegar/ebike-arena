import NavbarSearch from './NavbarSearch';
import NavbarMenu from './NavbarMenu';

const Navbar = () => (
    <nav className="flex justify-between items-center bg-white px-32">
        <span className="font-bold text-lg p-4">
            ebike arena

            <sup className="text-sm ml-0.5">
                .id
            </sup>
        </span>

        <NavbarSearch />
        <NavbarMenu />
    </nav>
);

export default Navbar;