import "../styles/globals.css";
import Layout from "../Components/Layout";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../node_modules/bootstrap/dist/js/bootstrap.min.js");
    import("../node_modules/@fortawesome/fontawesome-free/css/all.css");
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />{" "}
    </Layout>
  );
}

export default MyApp;
