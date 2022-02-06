import Product from "../../Components/Product";
import { createClient } from "contentful";
import { fadeUp } from "../../animations/fadeUp";
import { useEffect } from "react";

export async function getServerSideProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "product",
  });

  return {
    props: {
      products: res.items,
    },
  };
}

const products = ({ products }) => {
  useEffect(() => {
    fadeUp("#page-title");
    fadeUp("#product-card");
  }, []);

  return (
    <div className="pt-5 my-5">
      <h2 id="page-title" className="text-center mt-5 text-blue-800">
        Products
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {products.map((product) => {
          return <Product key={product.sys.id} product={product.fields} />;
        })}
      </div>
    </div>
  );
};

export default products;
