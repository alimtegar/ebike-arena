const NavbarSearch = () => (
    <form className="relative w-1/2">
        <input
            className="w-full text-sm border-2 border-gray-300 px-4 h-11 focus:outline-none focus:border-gray-900"
            placeholder="Search our products here..."
            type="text"
        />
        <button className="absolute top-0 right-0 flex justify-center items-center text-gray-400 w-11 h-11 hover:text-gray-900">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
        </button>
    </form>
);

export default NavbarSearch;