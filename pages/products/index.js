import Product from "../../Components/Product";
import { createClient } from "contentful";

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
  return (
    <div className="pt-5 mt-5">
      <h2 className="text-center mt-5 text-blue-800">Products</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {products.map((product) => {
          return <Product key={product.sys.id} product={product.fields} />;
        })}
      </div>
    </div>
  );
};

export default products;
