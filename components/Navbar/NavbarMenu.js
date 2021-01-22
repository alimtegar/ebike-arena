import { useState } from 'react';
import createPersistedState from 'use-persisted-state';
import Link from '../Link';
import NavbarSearch from './NavbarSearch';
import { ShoppingCartIcon, SearchIcon, XIcon, ChevronDownIcon } from '../Icons';

// Helpers
import { getTotalAmount } from '../../helpers';

const useCartState = createPersistedState('cart');

const NavbarMenu = () => {
    const [cart, _] = useCartState([]);
    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <div className="flex">
            {/* Cart */}
            {/* <div > */}
            <Link href="/cart">
                <a className="flex items-center font-bold ml-6">
                    <ShoppingCartIcon width={5} height={5} />

                    <span className="hidden md:flex ml-1">Cart</span>

                    <sup className="font-semibold text-sm ml-0.5 md:ml-1">{getTotalAmount(cart)}</sup>
                </a>
            </Link>
            {/* </div> */}

            {/* Products */}
            <div className="navbar-menu-item-products relative hidden md:flex items-center font-bold ml-4">
                <Link href="/products">
                    <a>Products</a>
                </Link>

                <span className="ml-1">
                    <ChevronDownIcon width={5} height={5} color="gray-400" />
                </span>
            </div>

            {/* Searh toggle */}
            <button 
                type="button"
                className="flex md:hidden items-center font-bold ml-6 mr-2 focus:outline-none"
                onClick={() => setShowNavbar(!showNavbar)}
            >
                {showNavbar ? (
                    <XIcon width={5} height={5} />
                ) : (
                    <SearchIcon width={5} height={5} />
                )}
            </button>

            {showNavbar ? (
                <div className="absolute top-16 left-0 bg-white w-screen shadow">
                    <div className="px-3 pb-3">
                        <NavbarSearch />
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default NavbarMenu;