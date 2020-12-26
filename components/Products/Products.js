import RecommendedProducts from './RecommendedProducts';
import LatestProducts from './LatestProducts';

const Products = () => (
    <section className="bg-gray-50 py-12 px-24">
        <div className="flex -mx-1.5">
            <RecommendedProducts className="flex flex-col w-1/3 mx-1.5" />
            <LatestProducts className="w-2/3 mx-1.5" />
        </div>
    </section>
);

export default Products;