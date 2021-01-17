import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { SearchIcon } from '../Icons';
import Input from '../Input';

const NavbarSearch = () => {
    // Use router
    const router = useRouter();
    const slug = router.query.slug;
    const qKey = Object.keys(router.query).length && slug.includes('q') ? slug.indexOf('q') + 1 : false;
    const q = qKey ? slug[qKey] : '';

    // Use state
    const [newQ, setNewQ] = useState('');

    // Use effect
    useEffect(() => { setNewQ(q); }, [q]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newSlug = qKey 
            ? slug.map((slugItem, key) => key === qKey ? newQ : slugItem) 
            : ['q', newQ];

        router.push({
            pathname: '/products/all/[[...slug]]',
            query: {
                slug: newSlug,
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
                value={newQ}
                onChange={(e) => setNewQ(e.target.value)}
            />
            <button className="absolute top-0 right-0 flex justify-center items-center text-gray-400 w-11 h-11 hover:text-gray-900" type="submit">
                <SearchIcon width={5} height={5} />
            </button>
        </form>
    );
};

export default NavbarSearch;