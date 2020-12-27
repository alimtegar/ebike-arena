import Button from '../../Button';
import { getDiscountedPrice } from '../../../helpers';

const RecommendedProductsItem = ({ title, image, url, price, discount }) => (
    <div className="relative flex flex-col justify-center items-center text-center h-full overflow-hidden">
        {discount ? (
            <div className="products-item-discount bg-primary font-semibold text-sm">
                -{discount}%
            </div>
        ) : null}
        <div className="flex-grow">
            <img className="object-cover object-none object-center h-full focus:outline-none" src={image} alt={title} />
        </div>
        <div className="flex flex-col py-6 px-20">
            <h2 className="text-xs text-gray-600 mb-3">
                {title}
            </h2>
            {discount ? (
                <s className="text-xs text-gray-400">
                    Rp{price.toLocaleString('id-ID')}
                </s>
            ) : null}
            <h3 className="font-semibold text-sm text-gray-900">
                Rp{getDiscountedPrice(price, discount).toLocaleString('id-ID')}
            </h3>
        </div>
        <Button height={11} width="full">Add to Cart</Button>
    </div>
);

export default RecommendedProductsItem;