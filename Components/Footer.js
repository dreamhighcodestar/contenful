import Image from "next/image";

const Footer = () => {
  return (
    <section className="bg-blue-800 pt-5">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="">
          <Image src="/assets/fnsLogo.png" width={220} height={80} />
        </div>
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-center text-center py-4">
            <a href="" className="text-orange px-3">
              Products
            </a>
            <a href="" className="text-orange px-3">
              Divisions
            </a>
            <a href="" className="text-orange px-3">
              Events
            </a>
            <a href="" className="text-orange px-3">
              Contact
            </a>
            <a href="" className="text-orange px-3">
              Careers
            </a>
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
