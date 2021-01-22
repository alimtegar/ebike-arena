import { NextSeo, CorporateContactJsonLd } from 'next-seo';

const Seo = ({ title, subtitle, description, url, phone, image }) => (
    <>
        <NextSeo
            title={title}
            titleTemplate={process.env.NEXT_PUBLIC_WEB_TITLE + (subtitle ? ' | ' + subtitle : '')}
            description={description}
            openGraph={{
                url: url,
                title: process.env.NEXT_PUBLIC_WEB_TITLE + (subtitle ? ' | ' + subtitle : ''),
                description: description,
                site_name: title,
                type: 'website',
                locale: 'id_ID',
                images: [
                    {
                        url: image ? image : process.env.NEXT_PUBLIC_WEB_URL + 'android-icon-1024x1024.png',
                        width: 1024,
                        height: 1024,
                        alt: subtitle ? subtitle : title,
                    },
                ],
            }}
        />
        <CorporateContactJsonLd
            url={process.env.NEXT_PUBLIC_WEB_URL}
            logo={process.env.NEXT_PUBLIC_WEB_URL + 'images/android-icon-1024x1024.png'}
            contactPoint={[
                {
                    telephone: phone,
                    contactType: 'customer service',
                    availableLanguage: ['English', 'Indonesia'],
                },
            ]}
        />
    </>
);

export default Seo;