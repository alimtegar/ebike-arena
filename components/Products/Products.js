import RecommendedProducts from './RecommendedProducts';
import LatestProducts from './LatestProducts';

const Products = ({ recommendedProducts, latestProducts }) => (
    <section className="bg-gray-100 text-center md:text-left pt-6 md:pt-12 pb-3 md:pb-12 px-3 md:px-24">
        <div className="flex flex-wrap -m-3 md:-m-1.5">
            <div className="w-full md:w-1/3 p-3 md:p-1.5">
                <RecommendedProducts recommendedProducts={recommendedProducts} />
            </div>
            <div className="w-full md:w-2/3 p-3 md:p-1.5">
                <LatestProducts latestProducts={latestProducts} />
            </div>
        </div>
    </section>
);

export default Products;