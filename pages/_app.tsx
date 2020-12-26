import GlobalStyles from "../styles/global";
import { ThemeProvider } from '../context/ThemeContext';
import Head from "next/head";
import Layout from "../components/Layout";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Head>
        <script src="/static/theme.js" />
      </Head>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App
