import "../styles/style.sass";
import { AppWrapper } from "../context/AppContext";
import { Layout } from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp;
