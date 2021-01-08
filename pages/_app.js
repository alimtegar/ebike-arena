import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles.css'

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }) => (
  <>
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
  </>
);

export default MyApp;