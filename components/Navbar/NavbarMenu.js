import { ShoppingCartIcon, SearchIcon, ChevronDownIcon } from '../Icons';

const NavbarMenu = () => (
    <div className="flex">
        <div className="flex items-center font-bold ml-6">
            <ShoppingCartIcon width={5} height={5} />
            <span className="hidden md:flex ml-1">Cart</span><sup className="font-semibold text-sm ml-0.5">0</sup>
        </div>
        <div className="navbar-menu-item-products relative hidden md:flex items-center font-bold ml-4">
            Category
            
            <span className="ml-1">
                <ChevronDownIcon width={5} height={5} color="gray-400"/>
            </span>
        </div>
        <div className="flex md:hidden items-center font-bold ml-6 mr-2">
            <SearchIcon width={5} height={5} />
        </div>
    </div>
);

export default NavbarMenu;