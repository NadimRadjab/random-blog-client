import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../Components/Layout";
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <link rel="shortcut icon" href={prefix + "/favicon.ico"} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
