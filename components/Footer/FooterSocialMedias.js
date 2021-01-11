import OutlineButton from '../OutlineButton';
import { SocialMediaIcon } from '../Icons';

const FooterSocialMedias = ({ title, socialMedias }) => (
    <>
        <h2 className="font-semibold mb-3">{title}</h2>
        <ul className="flex justify-center md:justify-start -mx-1.5">
            {Object.keys(socialMedias).map((key) => (
                <li className="px-1.5" key={key}>
                    <OutlineButton width={11} height={11}>
                        <SocialMediaIcon title={key} width={5} height={5} />
                    </OutlineButton>
                </li>
            ))}
        </ul>
    </>
);

export default FooterSocialMedias;