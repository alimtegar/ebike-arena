import NavbarSearch from './NavbarSearch';
import NavbarMenu from './NavbarMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
    <nav className="flex justify-between items-center bg-white py-3 px-3 md:px-32">
        <a className="flex items-center font-bold text-lg" href="#">
            <img className="h-11 mr-2" src="/images/logo512.png" alt="Logo" />

            ebike arena

            <sup className="font-semibold text-sm ml-0.5">
                .id
            </sup>
        </a>


        <NavbarSearch />
        <NavbarMenu />
    </nav>
);

export default Navbar;