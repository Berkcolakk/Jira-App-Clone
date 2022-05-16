import '../styles/globals.scss';
import '../styles/styles.css';
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
