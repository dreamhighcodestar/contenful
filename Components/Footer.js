import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-blue-800 pt-5">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="">
          <Image src="/assets/fnsLogo.png" width={220} height={80} />
        </div>
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-center text-center py-4">
            <Link href="/products">
              <a className="text-orange px-3">Products</a>
            </Link>
            <Link href="/divisions">
              <a className="text-orange px-3">Divisions</a>
            </Link>
            <Link href="/events">
              <a className="text-orange px-3">Events</a>
            </Link>
            <Link href="/contact">
              <a className="text-orange px-3">Contact</a>
            </Link>
            <Link href="/careers">
              <a className="text-orange px-3">Careers</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center text-light mt-5">
        Copyright &copy; 2022 All rights reserved
      </div>
      <div className="text-center text-light pb-2">
        Design and Build by{" "}
        <a href="https://www.vinodpatel.co.uk">Vinod Patel</a>
      </div>
    </section>
  );
};

export default Footer;
