export default {
    title: process.env.NEXT_PUBLIC_WEB_TITLE,
    description: process.env.NEXT_PUBLIC_WEB_DESCRIPTION,
    openGraph: {
        url: process.env.NEXT_PUBLIC_WEB_URL,
        title: process.env.NEXT_PUBLIC_WEB_TITLE,
        description: process.env.NEXT_PUBLIC_WEB_DESCRIPTION,
        site_name: process.env.NEXT_PUBLIC_WEB_TITLE,
        type: 'website',
        locale: 'id_ID',
        images: [
            {
                url: process.env.NEXT_PUBLIC_WEB_URL + 'android-icon-1024x1024.png',
                width: 1024,
                height: 1024,
                alt: process.env.NEXT_PUBLIC_WEB_TITLE + ' Logo',
            },
        ],
    },
};