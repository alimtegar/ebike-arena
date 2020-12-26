import { ShoppingCartIcon, SearchIcon, ChevronDownIcon } from '../Icons';

const NavbarMenu = () => (
    <div className="flex">
        <div className="flex items-center font-bold ml-4">
            <ShoppingCartIcon className="w-5 h-5" />
            <span className="hidden md:flex ml-1">Cart</span><sup className="font-semibold text-sm ml-0.5">0</sup>
        </div>
        <div className="navbar-menu-item-products relative hidden md:flex items-center font-bold ml-4">
            Products
            
            <ChevronDownIcon className="w-5 h-5 ml-1 text-gray-400" />
        </div>
        <div className="flex md:hidden items-center font-bold ml-4 mr-2">
            <SearchIcon className="w-5 h-5" />
        </div>
    </div>
);

export default NavbarMenu;