import '../styles/globals.scss';
// import Store from '../store';
import { Provider } from 'react-redux';
import store from '../stores/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
