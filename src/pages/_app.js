import '@component/styles/globals.css'
import Layout from "@component/components/layout";

export default function App({ Component, pageProps }) {
  return(

      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}
