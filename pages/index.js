import HeadComponent from "../Components/Head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Stats from "../Components/Stats";
import ClientStats from "../Components/ClientStats";
import Link from "next/link";
import { gsap } from "gsap/dist/gsap.js";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
  const header = React.createRef();
  const header2 = React.createRef();
  const button = React.createRef();

  useEffect(() => {
    gsap.from(header.current, { duration: 2, x: 300, ease: "back" });
    gsap.from(header2.current, { duration: 2, x: -300, ease: "back" });
    gsap.from(button.current, {
      duration: 2,
      y: 300,
      rotation: 90,
      ease: "back",
    });
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#about-title", {
      scrollTrigger: {
        trigger: "#about-title",
        toggleActions: "play none none none",
      },
      y: 75,
      duration: 1.5,
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
              ref={header2}
            >
              Our <span className="text-orange px-1 fw-bolder"> mission </span>
              is to assist our customers in making Africa
            </div>
            <div
              ref={header}
              className="d-flex justify-content-center text-blue-800 display-3 fw-bold text-center logo"
            >
              <p>Cleaner, Safer and Healthier</p>
            </div>
            <div className="d-flex justify-content-center my-2">
              {" "}
              <Link href="/products" passHref>
                <button
                  ref={button}
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
        <h2 id="about-title" className="text-center mt-5 pt-5 text-blue-800">
          About
        </h2>
        <div className="container">
          <div className="row justify-content-center py-5">
            <div className="d-flex flex-column justify-content-center col-sm-10 col-lg-6">
              <Image
                className="p-0 p-sm-1 p-md-2"
                src="/assets/staff.jpg"
                width={1300}
                height={950}
              />
            </div>
            <div className="col-sm-10 col-lg-6 p-xs-1 p-md-3 p-lg-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nihil
              ducimus assumenda, harum in voluptatem cum modi pariatur? Eum
              quibusdam aliquid quodesentium! Quidem, inventore asperiores error
              ad, ea minus repudiandae mollitia quisquam voluptatum nostrum
              necessitatibus unde nobis omnis. <br></br>
              <br></br>Quasi recusandae atque exercitationem enim quod labore
              magnam optio eveniet dolores voluptate numqpisci nemo ea nam
              repellendus eveniet, incidunt similique placeat illo deserunt,
              dolorum soluta voluptatibus, magnam libero excepturi omnis magni?
              Quia sapiente dicta ullam blanditiis
            </div>
          </div>
        </div>
        <Stats />
        <ClientStats />
      </section>
    </>
  );
}
