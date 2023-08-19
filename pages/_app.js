import '@unstop/styles/globals.css'
import {AppContextProvider} from '@unstop/context';

export default function App({ Component, pageProps }) {
  return <AppContextProvider><Component {...pageProps} /></AppContextProvider>
}
