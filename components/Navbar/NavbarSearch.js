import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { SearchIcon } from '../Icons';
import Link from '../Link';
import Input from '../Input';

const NavbarSearch = () => {
    // Use router
    const router = useRouter();
    const { search } = router.query;

    console.log('router = ', router);

    // Use state
    const [newSearch, setNewSearch] = useState('');

    // Use effect
    useEffect(() => { setNewSearch(search); }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault();

        router.push({
            pathname: router.pathname === '/products/categories/[...slug]' ? router.pathname : '/products/[...slug]',
            query: {
                ...router.query,
                search: newSearch,
            }
        });
    };

    return (
        <form
            className="relative flex w-full"
            onSubmit={(e) => handleSubmit(e)}>
            <Input
                name="search"
                type="text"
                placeholder="Searh our products here..."
                width="full"
                height={11}
                value={newSearch}
                onChange={(e) => setNewSearch(e.target.value)}
            />
            <button className="absolute top-0 right-0 flex justify-center items-center text-gray-400 w-11 h-11 hover:text-gray-900">
                <SearchIcon width={5} height={5} />
            </button>
        </form>
    );
};

export default NavbarSearch;