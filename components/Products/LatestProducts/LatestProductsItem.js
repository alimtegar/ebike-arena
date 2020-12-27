import { getDiscountedPrice } from '../../../helpers';

const LatestProductsItem = ({ title, image, url, price, discount }) => (
    <div className="relative flex flex-col bg-white text-center shadow rounded overflow-hidden transition hover:shadow-lg">
        {discount ? (
            <div className="products-item-discount bg-primary font-semibold text-sm">
                -{discount}%
            </div>
        ) : null}
        <img src={image} alt={title} />
        <div className="flex flex-col flex-grow justify-between p-6">
            <a href="#" className="text-xs text-gray-600 hover:text-gray-900 hover:underline mb-3">
                <h2>
                    {title.substring(0, 30).trim() + '...'}
                </h2>
            </a>
            {discount ? (
                <s className="text-xs text-gray-400">
                    Rp{price.toLocaleString('id-ID')}
                </s>
            ) : null}
            <h3 className="font-semibold text-sm text-gray-900">
                Rp{getDiscountedPrice(price, discount).toLocaleString('id-ID')}
            </h3>
        </div>
    </div>
);

export default LatestProductsItem;
