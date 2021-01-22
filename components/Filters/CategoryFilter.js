import { useRouter } from 'next/router'
import {Select} from '../Form';

import { slugify } from '../../helpers';

const CategoryFilter = ({ options }) => {
    // Use router
    const router = useRouter();
    const slug = Object.keys(router.query).length ? router.query.slug : [];
    const catIdKey = Object.keys(router.query).length && slug.includes('cat') ? slug.indexOf('cat') + 1 : false;
    const catId = catIdKey ? slug[catIdKey] : '';
    const catTitleKey = Object.keys(router.query).length && slug.includes('cat') ? slug.indexOf('cat') + 2 : false;
    const catTitle = catTitleKey ? slug[catTitleKey] : '';

    const handleChange = (e) => {
        const newCatId = e.target.value;
        const newCatTitle = options.find((option) => option.value == newCatId).title;

        console.log('options', JSON.stringify(options));

        const newSlug = catIdKey 
            ? slug.map((slugItem, key) => 
                key === catIdKey 
                    ? newCatId 
                    : key === catTitleKey
                        ? slugify(newCatTitle)
                        : slugItem
            ) 
            : [...slug, 'cat', newCatId, slugify(newCatTitle)];

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
                <span className="font-semibold">Category</span>
            </div>
            <div>
                <Select
                    id="cat-select"
                    name="cat-select"
                    options={options}
                    selectedOption={catId}
                    width="full"
                    height={11}
                    onChange={(e) => handleChange(e)}
                />
            </div>
        </div>
    );
};

export default CategoryFilter;