import { SearchIcon } from '../Icons';
import Input from '../Input';

const NavbarSearch = () => (
    <form className="relative flex w-full">
        <Input type="text" placeholder="Searh our products here..." width="full" height={11} />
        <button className="absolute top-0 right-0 flex justify-center items-center text-gray-400 w-11 h-11 hover:text-gray-900">
            <SearchIcon width={5} height={5} />
        </button>
    </form>
);

export default NavbarSearch;