import "../styles/globals.css";
import Layout from "../Components/Layout";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../node_modules/bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />{" "}
    </Layout>
  );
}

export default MyApp;
