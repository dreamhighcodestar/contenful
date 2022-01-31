import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-blue-800 navbar-expand-lg fixed-top py-1 opa">
      <div className="container-lg">
        {/* <h1 className="navbar-brand fw-bold fs-5 p-0 m-0">FNSscientific</h1> */}
        <div>
          <Link href="/">
            <a>
              <Image src="/assets/fnsLogo.png" width={220} height={80} />
            </a>
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav-links"
          aria-controls="nav-links"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="nav-links"
        >
          <ul className="navbar-nav fw-bold">
            <li className="nav-item text-center">
              <Link href="/#about">
                <a className="nav-link">About</a>
              </Link>
            </li>

            <li className="nav-item text-center">
              <Link href="/products">
                <a className="nav-link">Products</a>
              </Link>
            </li>
            <li className="nav-item text-center">
              <Link href="/divisions">
                <a className="nav-link">Divisions</a>
              </Link>
            </li>
            <li className="nav-item text-center">
              <Link href="/events">
                <a className="nav-link">Events</a>
              </Link>
            </li>
            <li className="nav-item text-center">
              <Link href="/contact">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
            <li className="nav-item text-center">
              <Link href="/careers">
                <a className="nav-link">Careers</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
