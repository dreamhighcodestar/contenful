import HeadComponent from "../Components/Head";
import styles from "../styles/Home.module.css";

import Stats from "../Components/Stats";
import ClientStats from "../Components/ClientStats";
import Link from "next/link";
import { gsap } from "gsap/dist/gsap.js";
import { useEffect } from "react";
import About from "../Components/About";

export default function Home() {
  useEffect(() => {
    gsap.from("#header1", { duration: 1, x: 300, ease: "back" });
    gsap.from("#header2", { duration: 1, x: -300, ease: "back" });
    gsap.from("#viewProductsBtn", {
      duration: 1,
      y: 300,
      rotation: 90,
      ease: "back",
    });
  }, []);

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      backgroundColor: "#d34600",
      duration: 0.2,
      expand: 1.1,
    });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#80ff43", duration: 0.2 });
  };

  return (
    <>
      <HeadComponent />
      {/* Landing Page with Mission Statement */}
      <div className={styles.landing}>
        <div className="container">
          <div className="missionStatement mt-5">
            <div
              className="fs-2 mb-2 text-center fw-bold text-blue-900"
              id="header2"
            >
              Our <span className="text-orange px-1 fw-bolder"> mission </span>
              is to assist our customers in making Africa
            </div>
            <div
              className="d-flex justify-content-center text-blue-800 display-3 fw-bold text-center logo"
              id="header1"
            >
              <p>Cleaner, Safer and Healthier</p>
            </div>
            <div className="d-flex justify-content-center my-2">
              {" "}
              <Link href="/products" passHref>
                <button
                  id="viewProductsBtn"
                  className="btn btn-lime text-blue-800 fw-bold"
                  onMouseEnter={onEnter}
                  onMouseLeave={onLeave}
                >
                  view products
                </button>
              </Link>
            </div>
          </div>
        </div>{" "}
      </div>

      {/* About Section */}
      <section id="about" className="pt-3 bg-blue-100">
        <About />
        <Stats />
        <ClientStats />
      </section>
    </>
  );
}
