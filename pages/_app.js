import NextNProgress from 'nextjs-progressbar';

import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles.css'


// This default export is required in a new `pages/_app.js` file.
const App = ({ Component, pageProps }) => (
  <>
    <NextNProgress color="#FED830" height={3} />
    <Component {...pageProps} />
  </>
);

export default App;