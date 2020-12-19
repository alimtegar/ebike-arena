import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Slider from '../components/Slider';
import WhyUs from '../components/WhyUs';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <SubNavbar/>
            <Slider />
            <WhyUs />
        </div>
    );
};

export default Home;