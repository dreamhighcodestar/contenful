const Skeleton = () => {
  return (
    <div>
      <div className="mt-5 m-1">
        <div className="m-5 pt-5">
          <h2 className="text-center mt-5 text-blue-800">Loading</h2>
        </div>

        <div className="m-0 m-lg-5 p-0 row justify-content-center">
          <div className="col-10 col-md-6 p-0 p-md-3">
            {" "}
            {/* <Image
            src={"https:" + productImages[0].fields.file.url}
            width={productImages[0].fields.file.details.image.width}
            height={productImages[0].fields.file.details.image.height}
          /> */}
          </div>
          <div className="col-10 col-md-6 p-0 p-md-3">
            {/* {documentToReactComponents(productDescription)} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
