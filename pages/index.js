import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Slider from '../components/Slider';
import Services from '../components/Services';
import Products from '../components/Products';
import Posts from '../components/Posts';

const Home = () => {
    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar />
                <SubNavbar />
            </div>
            <Slider />
            <Services />
            
            <section className="flex justify-center text-center px-32 py-16">
                <div className="w-5/12">
                    <h1 className="text-lg font-bold mb-6">
                        About ebike arena<sup className="font-semibold text-sm ml-0.5">.id</sup>
                    </h1>
                    <p className="text-xs text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium. Aliquam sem et tortor consequat id porta. Enim neque volutpat ac tincidunt vitae. Tellus pellentesque eu tincidunt tortor aliquam. Sem nulla pharetra diam sit amet nisl. 
                </p>
                </div>
            </section>

            <Products />
            <Posts />
        </div>
    );
};

export default Home;