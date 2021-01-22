import createPersistedState from 'use-persisted-state';

import Link from '../Link';
import { ShoppingCartIcon, SearchIcon, ChevronDownIcon } from '../Icons';

import { getTotalAmount } from '../../helpers';

const useCartState = createPersistedState('cart');

const NavbarMenu = () => {
    const [cart, _] = useCartState([]);

    return (
        <div className="flex">
            {/* <div > */}
                <Link href="/cart">
                    <a className="flex items-center font-bold ml-6">
                        <ShoppingCartIcon width={5} height={5} />

                        <span className="hidden md:flex ml-1">Cart</span>

                        <sup className="font-semibold text-sm ml-1">{getTotalAmount(cart)}</sup>
                    </a>
                </Link>
            {/* </div> */}
            <div className="navbar-menu-item-products relative hidden md:flex items-center font-bold ml-4">
                <Link href="/products">
                    <a>Products</a>
                </Link>

                <span className="ml-1">
                    <ChevronDownIcon width={5} height={5} color="gray-400" />
                </span>
            </div>
            <div className="flex md:hidden items-center font-bold ml-6 mr-2">
                <SearchIcon width={5} height={5} />
            </div>
        </div>
    );
};

export default NavbarMenu;