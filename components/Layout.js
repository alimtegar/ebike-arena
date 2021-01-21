import { ToastContainer } from 'react-toastify';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';

const Layout = ({ children, navbarMenu, footerMenu, footerPosts, footerSocialMedias }) => (
    <>
        <div className="sticky top-0 z-50 shadow">
            <Navbar />
            <SubNavbar menu={navbarMenu} />
        </div>

        <main>
            {children}
        </main>

        <Footer
            menu={footerMenu}
            posts={footerPosts}
            socialMedias={footerSocialMedias}
        />

        <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            // closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    </>
);

export default Layout;