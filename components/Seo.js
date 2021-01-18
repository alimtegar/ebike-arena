import { NextSeo, CorporateContactJsonLd } from 'next-seo';

const Seo = ({ title, subtitle, description, url, phone }) => (
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
                        url: url + 'android-icon-1024x1024.png',
                        width: 1024,
                        height: 1024,
                        alt: title + ' Logo',
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