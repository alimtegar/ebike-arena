import { useRouter } from 'next/router'
import Select from './Select';

const SortFilter = () => {
    const sortOptions = [
        { title: 'Latest', value: 'latest' },
        { title: 'Name', value: 'name' },
        // { title: 'Price', value: 'price' },
    ];
    
    // Use router
    const router = useRouter();
    const slug = router.query.slug;
    const sortKey = Object.keys(router.query).length && slug.includes('sort') ? slug.indexOf('sort') + 1 : false;
    const sort = sortKey ? slug[sortKey] : '';

    const handleChange = (e) => {
        const newSort = e.target.value;
        const newSlug = sortKey 
            ? slug.map((slugItem, key) => key === sortKey ? newSort : slugItem) 
            : ['sort', newSort];

        router.push({
            pathname: '/products/all/[[...slug]]',
            query: {
                slug: newSlug,
            }
        });
    }

    return (
        <div className="mb-6">
            <div className="mb-3">
                <span className="font-semibold">Sort by</span>
            </div>
            <div>
                <Select
                    id="sort-select"
                    name="sort-select"
                    options={sortOptions}
                    selectedOption={sort}
                    width="full"
                    height={11}
                    onChange={(e) => handleChange(e)}
                />
            </div>
        </div>
    );
};

export default SortFilter;