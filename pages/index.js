import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Slider from '../components/Slider';
import Services from '../components/Services';
import Products from '../components/Products';
import Posts from '../components/Posts';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar />
                <SubNavbar />
            </div>
            <Slider />
            <Services />
            
            <section className="flex justify-center text-center px-6 md:px-3 md:px-24 py-6 md:py-12">
                <div className="w-full md:w-1/2">
                    <h1 className="text-lg font-bold mb-6">
                        About ebike arena <sup className="font-semibold text-sm">.id</sup>
                    </h1>
                    <p className="text-xs text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etos dolore magna aliqua. Fusce id velit ut tortor pretium. Aliquam sem et tortor consequat id porta. 
                </p>
                </div>
            </section>

            <Products />
            <Posts />
            <Footer />
        </div>
    );
};

export default Home;