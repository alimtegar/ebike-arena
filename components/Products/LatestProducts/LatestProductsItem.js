import ProductItemDiscountLabel from '../ProductsItemDiscountLabel';
import { getDiscountedPrice } from '../../../helpers';

const LatestProductsItem = ({ title, image, url, price, discount }) => (
    <div className="group relative flex flex-col bg-white h-60 text-center shadow rounded overflow-hidden transition hover:shadow-lg">
        {discount ? (
            <ProductItemDiscountLabel discount={discount} />
        ) : null}
        <div className="relative flex justify-center items-center h-1/2">
            <img className="absolute max-w-none h-full transform group-hover:scale-105 transition duration-300" src={image} alt={title} />
        </div>
        <div className="flex flex-col h-1/2 px-6 py-3">
            <a href="#" className="text-xs text-gray-600 hover:text-gray-900 hover:underline mb-3">
                <h2>
                    {title.substring(0, 30).trim() + '...'}
                </h2>
            </a>
            <div>
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
    </div>
);

export default LatestProductsItem;
