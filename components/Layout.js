import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';

const Layout = ({ children }) => (
    <>
        <div className="sticky top-0 z-50 shadow">
            <Navbar />
            <SubNavbar />
        </div>

        <main>
            {children}
        </main>

        <Footer />
    </>
);

export default Layout;