import Link from '../../Link';
import Button from '../../Button';
import ProductItemDiscountLabel from '../ProductsItemDiscountLabel';
import { slugify, getDiscountedPx } from '../../../helpers';

const RecommendedProductsItem = ({ id, title, image, price, discount }) => (
    <div className="relative flex flex-col justify-center items-center text-center min-h-120 h-full overflow-hidden">
        {discount ? (
            <ProductItemDiscountLabel discount={discount} />
        ) : null}
        <div className="relative flex justify-center items-center w-full h-2/3">
            <img className="absolute max-w-none w-full transform group-hover:scale-105 transition" src={image} alt={title} />
        </div>
        <div className="flex flex-col w-full h-1/3">
            <div className="flex flex-col justify-betweenx flex-grow w-full h-full px-24 py-3">
                <Link href={'/products/' + id + '/' + slugify(title)}>
                    <a className="text-xs text-gray-600 hover:text-gray-900 hover:underline mb-3">
                        <h2>
                            {title}
                        </h2>
                    </a>
                </Link>
                <div>
                    {discount ? (
                        <s className="text-xs text-gray-400">
                            Rp{price.toLocaleString('id-ID')}
                        </s>
                    ) : null}
                    <h3 className="font-semibold text-sm text-gray-900">
                        Rp{getDiscountedPx(price, discount).toLocaleString('id-ID')}
                    </h3>
                </div>
            </div>
            <div className="flex-grow">
                <Link href={'/products/' + id + '/' + slugify(title)}>
                    <Button height={11} width="full">Add to Cart</Button>
                </Link>
            </div>
        </div>

    </div>
);

export default RecommendedProductsItem;