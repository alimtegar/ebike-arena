import FooterMenu from './FooterMenu';
import FooterSocialMedias from './FooterSocialMedias';

const Footer = ({ menu, posts, socialMedias }) => (
    <footer className="bg-gray-900 text-white px-3 md:px-24">
        <div className="flex flex-wrap text-center md:text-left py-6 md:py-12 border-b-2 border-gray-700">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
                <FooterMenu title="Menu" menu={menu} />
            </div>
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <FooterMenu title="Posts" menu={posts} />
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
                <FooterSocialMedias title="Follow Us" socialMedias={socialMedias} />
            </div>
        </div>
        <div className="text-center text-xs py-6">
            © Copyright by {process.env.NEXT_PUBLIC_WEB_TITLE} 2020. All Right Reserved.
            </div>
    </footer>
);

export default Footer;