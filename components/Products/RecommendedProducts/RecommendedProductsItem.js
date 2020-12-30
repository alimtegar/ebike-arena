import Button from '../../Button';
import { getDiscountedPrice } from '../../../helpers';

const RecommendedProductsItem = ({ title, image, url, price, discount }) => (
    <div className="relative flex flex-col justify-center items-center text-center min-h-120 h-full overflow-hidden">
        {discount ? (
            <div className="z-10 products-item-discount bg-primary font-semibold text-sm">
                -{discount}%
            </div>
        ) : null}
        <div className="bg-yellow-500 relative flex justify-center items-center h-2/3">
            <img className="absolute max-w-none h-full transform group-hover:scale-105 transition" src={image} alt={title} />
        </div>
        <div className="flex flex-col w-full h-1/3">
            <div className="flex flex-col justify-betweenx flex-grow w-full h-full px-24 py-3">
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900 hover:underline mb-3">
                    <h2>
                        {title}
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
            <div className="flex-grow">
                <Button height={11} width="full">Add to Cart</Button>
            </div>
        </div>

    </div>
);

export default RecommendedProductsItem;