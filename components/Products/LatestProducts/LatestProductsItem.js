import Link from '../../Link';
import ProductItemDiscountLabel from '../ProductsItemDiscountLabel';
import { slugify, getDiscountedPx } from '../../../helpers';

const LatestProductsItem = ({ id, title, image, price, old_price, discount, amount }) => (
    <div className="group relative flex flex-col bg-white h-60 text-center shadow-sm hover:shadow rounded-lg overflow-hidden transition">
        {discount ? (
            <ProductItemDiscountLabel discount={discount} />
        ) : null}


        {amount ? (
            <div className="absolute z-10 font-semibold text-sm text-gray-900 p-3">
                {amount}x
            </div>
        ) : null}

        <div className="relative flex justify-center items-center h-1/2">
            <img className="absolute max-w-none h-full transform group-hover:scale-105 transition duration-300" src={image} alt={title} />
        </div>
        <div className="flex flex-col h-1/2 px-6 py-3">
            <Link href={'/products/' + id + '/' + slugify(title)}>
                <a className="text-xs text-gray-600 hover:text-gray-900 hover:underline mb-3">
                    <h2>
                        {title.substring(0, 30).trim() + '...'}
                    </h2>
                </a>
            </Link>
            <div>
                {discount ? (
                    <s className="text-xs text-gray-400">
                        Rp{old_price.toLocaleString('id-ID')}
                    </s>
                ) : null}
                <h3 className="font-semibold text-sm text-gray-900">
                    Rp{price.toLocaleString('id-ID')}
                </h3>
            </div>
        </div>
    </div>
);

export default LatestProductsItem;
