import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-blue-800 navbar-expand-md fixed-top py-1">
      <div className="container-lg">
        <div>
          <Link href="/">
            <a>
              <Image src="/assets/fnsLogo.png" width={220} height={80} />
            </a>
          </Link>
        </div>
        {/* Drop down Button for small screens */}
        <div id={styles.dropDown}>
          <div className="btn-group dropstart">
            <button
              type="button"
              class="btn btn-blue-800 dropdown-toggle text-lime"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-align-left fs-1"></i>
            </button>
            <ul className="dropdown-menu p-0">
              <li className="bg-blue-200 ">
                <Link href="/">
                  <a className="dropdown-item fw-bold text-blue-800">Home</a>
                </Link>
              </li>
              <li className="bg-blue-200">
                <Link href="/#about">
                  <a className="dropdown-item fw-bold text-blue-800">About</a>
                </Link>
              </li>
              <li className="bg-blue-200">
                <Link href="/products">
                  <a className="dropdown-item fw-bold text-blue-800">
                    Products
                  </a>
                </Link>
              </li>
              <li className="bg-blue-200">
                <Link href="/divisions">
                  <a className="dropdown-item fw-bold text-blue-800">
                    Divisions
                  </a>
                </Link>
              </li>
              <li className="bg-blue-200">
                <Link href="/events">
                  <a className="dropdown-item fw-bold text-blue-800">Events</a>
                </Link>
              </li>
              <li className="bg-blue-200">
                <Link href="/contact">
                  <a className="dropdown-item fw-bold text-blue-800">Contact</a>
                </Link>
              </li>
              <li className="bg-blue-200">
                <Link href="/careers">
                  <a className="dropdown-item fw-bold text-blue-800">Careers</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/*End of  Drop down Button for small screens */}
        <div className={styles.navList}>
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
      </div>
    </nav>
  );
};

export default Navbar;
