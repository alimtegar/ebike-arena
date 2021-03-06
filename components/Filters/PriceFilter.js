import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {Input, Button} from '../Form';

const PriceFilter = () => {
    // Use router
    const router = useRouter();
    const slug = Object.keys(router.query).length ? router.query.slug : [];
    const pxKey = Object.keys(router.query).length && slug.includes('px') ? slug.indexOf('px') + 1 : false;
    const px = pxKey ? slug[pxKey] : '';
    const pxArr = px.split('-');
    const minPx = pxArr[0];
    const maxPx = pxArr[1];

    // Use state
    const [newMinPx, setNewMinPx] = useState(null);
    const [newMaxPx, setNewMaxPx] = useState(null);

    // Use effect
    useEffect(() => {
        setNewMinPx(minPx);
        setNewMaxPx(maxPx);
    }, [px]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPx = newMinPx + '-' + newMaxPx;
        const newSlug = pxKey
            ? slug.map((slugItem, key) => key === pxKey ? newPx : slugItem)
            : [...slug, 'px', newPx];

        router.push({
            pathname: '/products/all/[[...slug]]',
            query: {
                slug: newSlug,
            }
        });
    };

    return (
        <div>
            <div className="mb-3">
                <span className="font-semibold mr-1">Price</span>
            </div>
            <form className="text-center" onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3">
                    <Input
                        type="number"
                        placeholder="Minimal price..."
                        width="full"
                        height={11}
                        prefix="Rp"
                        value={newMinPx}
                        onChange={(e) => setNewMinPx(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <Input
                        type="number"
                        placeholder="Maximal price..."
                        width="full"
                        height={11}
                        prefix="Rp"
                        value={newMaxPx}
                        onChange={(e) => setNewMaxPx(e.target.value)}
                    />
                </div>
                <Button type="submit" width="full" height={11} rounded={true}>Apply</Button>
            </form>
        </div>
    );
};

export default PriceFilter;