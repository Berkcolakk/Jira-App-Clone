import "styles/globals.scss";
import "styles/styles.css";
import { Provider } from "react-redux";
import store from "stores/store";

function MyApp({ Component, pageProps }) {
  debugger;
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
