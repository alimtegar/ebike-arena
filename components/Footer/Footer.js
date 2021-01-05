import FooterMenu from "./FooterMenu";
import OutlineButton from "../OutlineButton";
import { TwitterIcon, FacebookIcon, InstagramIcon, WhatsAppIcon } from '../Icons';

const Footer = () => {
    const mainFooterMenu = [
        { title: 'Why EMTB', url: '/products/product-details', },
        { title: <span>About ebike arena<sup className="ml-1">.id</sup></span>, url: '/products/product-details', },
        { title: 'Products', url: '/products/product-details', },
        { title: 'Posts', url: '/products/product-details', },
        { title: 'How to Order', url: '/products/product-details', },
        { title: 'Contact Us', url: '/products/product-details', },
    ];
    const postsFooterMenu = [
        { title: 'Suspendisse Nec Leo Dapibus Ipsum Iaculis Blandit', url: '/products/product-details', },
        { title: 'Vivamus vel Metus ac Tellus Faucibus Pellentesque', url: '/products/product-details', },
        { title: 'Sed Euismod Risus Quis Euismod', url: '/products/product-details', },
        { title: 'Ut Egestas Tellus Vitae Aliquet Pulvinar', url: '/products/product-details', },
        { title: 'Sed Lobortis Eros Nec Magna Consequat Feugiat', url: '/products/product-details', },
    ];

    return (
        <footer className="bg-gray-900 text-white px-3 md:px-24">
            <div className="flex flex-wrap text-center md:text-left py-6 md:py-12 border-b-2 border-gray-700">
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <FooterMenu title="Menu" menu={mainFooterMenu} />
                </div>
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <FooterMenu title="Posts" menu={postsFooterMenu} />
                </div>
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h2 className="font-semibold mb-3">Follow Us</h2>
                    <ul className="flex justify-center md:justify-start -mx-1.5">
                        <li className="px-1.5">
                            <OutlineButton width={11} height={11}>
                                <TwitterIcon width={5} height={5} />
                            </OutlineButton>
                        </li>
                        <li className="px-1.5">
                            <OutlineButton width={11} height={11}>
                                <FacebookIcon width={5} height={5} />
                            </OutlineButton>
                        </li>
                        <li className="px-1.5">
                            <OutlineButton width={11} height={11}>
                                <InstagramIcon width={5} height={5} />
                            </OutlineButton>
                        </li>
                        <li className="px-1.5">
                            <OutlineButton width={11} height={11}>
                                <WhatsAppIcon width={5} height={5} />
                            </OutlineButton>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-xs py-6">
                © Copyright by ebike arena 2020. All Right Reserved.
            </div>
        </footer>
    );
};

export default Footer;