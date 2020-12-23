import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Slider from '../components/Slider';
import WhyUs from '../components/WhyUs';
import Products from '../components/Products';

const Home = () => {
    return (
        <div>
            <Navbar />
            <SubNavbar />
            <Slider />
            <WhyUs />
            
            <section className="flex justify-center text-center mb-16 px-32">
                <div className="w-9/12">
                    <h1 className="text-lg font-bold mb-6">About Us</h1>
                    <p className="text-xs text-gray-600 text-justify">
                        Curabitur id varius risus, a luctus erat. Pellentesque ac mollis ligula. Donec tellus odio, tincidunt sed congue in, euismod eu dui. Sed faucibus, ante at iaculis condimentum, nulla massa varius mi, in tincidunt nunc dolor at magna. Etiam in pellentesque metus, eget facilisis dolor. Sed tincidunt mollis tortor vel scelerisque. Praesent consectetur velit sed quam volutpat venenatis. Curabitur volutpat vitae ipsum et euismod. In sed odio in nisl rutrum pellentesque. Fusce sit amet orci nulla.
                </p>
                </div>
            </section>
            <Products />
        </div>
    );
};

export default Home;