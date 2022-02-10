import Image from "next/image";
import Link from "next/link";

const Product = ({ product }) => {
  const { productTitle, productThumbnail, slug } = product;

  return (
    <div className="m-3 col-11 col-sm-5 col-lg-3">
      <div id="product-card" className="card">
        <Link href={"/products/" + slug}>
          <a>
            <Image
              src={"https:" + productThumbnail.fields.file.url}
              width={1300}
              height={900}
              className="card-img-top"
              alt={productTitle}
            />
          </a>
        </Link>
        <div className="card-body">
          <Link href={"/products/" + slug}>
            <a
              className="card-title fw-bold text-blue-800 text-decoration-none"
              title={productTitle}
            >
              {productTitle}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
