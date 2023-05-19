import PropTypes from 'prop-types';
import Head from 'next/head';
import Script from 'next/script';
import Navabar from 'components/Navbar';
import 'styles/globals.css';

const App = ({ Component, pageProps }) => (
    <>
      <Head>
        <title>Nom de l'application</title>
        <meta name="description" content="Nom de l'application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://polyfill.io/v3/polyfill.min.js?features=default" />
      <Navabar />
      <div id="view">
        <Component {...pageProps} />
      </div>
    </>
);

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
