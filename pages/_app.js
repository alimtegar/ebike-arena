import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import NextNProgress from 'nextjs-progressbar';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles.css'


// This default export is required in a new `pages/_app.js` file.
const App = ({ Component, pageProps }) => (
  <>
    <DefaultSeo {...SEO} />
    <NextNProgress color="#FED830" />
    <Component {...pageProps} />
  </>
);

export default App;