import { useRouter } from 'next/router'
import Link from './Link';
import { Button, OutlineButton } from './Form';

// Helpers
import { range } from '../helpers'

const Pagination = ({ total, active }) => {
    const router = useRouter();
    const slug = Object.keys(router.query).length ? router.query.slug : [];
    const pageKey = Object.keys(router.query).length && slug.includes('page') ? slug.indexOf('page') + 1 : false;
    const page = pageKey ? slug[pageKey] : '';

    return (
        < div className="flex justify-center mt-6" >
            <ol className="flex">
                {range(total).map((i) => (
                    <li className="mx-0.75">
                        <a href="#">
                            {i + 1 == active ? (
                                <Button color="gray-900" width={6} height={6} rounded={true}>
                                    {i + 1}
                                </Button>
                            ) : (
                                <Link href={{
                                    pathname: '/products/all/[[...slug]]',
                                    query: {
                                        slug: pageKey 
                                            ? slug.map((slugItem, key) => key === pageKey ? i + 1 : slugItem)
                                            : [...slug, 'page', i + 1],
                                    }
                                }}>
                                    <a>
                                        <OutlineButton color="gray-900" contrastColor="white" width={6} height={6} rounded={true}>
                                            {i + 1}
                                        </OutlineButton>
                                    </a>
                                </Link>
                            )}
                        </a>
                    </li>
                ))}
            </ol>
        </div >
    );
};

export default Pagination;