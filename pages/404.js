import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <div className="mt-5 m-1">
        <div className="m-5 pt-5">
          <h2 className="text-center mt-5 text-blue-800">Page not found</h2>
          <div className="text-center text-blue-800 fw-bold">
            <Link href="/">
              <a>Home Page</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
