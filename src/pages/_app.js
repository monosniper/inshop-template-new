import '@/styles/globals.scss'
import {ApolloProvider} from "@apollo/client";
import client from "../apollo/client";
import {appWithTranslation} from "next-i18next";

function App({ Component, pageProps }) {
  return <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
}

export default appWithTranslation(App)