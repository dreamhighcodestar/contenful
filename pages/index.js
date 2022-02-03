import HeadComponent from "../Components/Head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Stats from "../Components/Stats";
import ClientStats from "../Components/ClientStats";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeadComponent />
      {/* Landing Page with Mission Statement */}
      <div className={styles.landing}>
        <div className="container">
          <div className="missionStatement mt-5">
            <div className="d-flex justify-content-center fs-2 mb-2 text-center">
              Our mission is to assist our customers in making Africa
            </div>
            <div className="d-flex justify-content-center text-blue-800 display-3 fw-bold text-center">
              <p>Cleaner, Safer and Healthier</p>
            </div>
            <div className="d-flex justify-content-center my-2">
              {" "}
              <Link href="/products" passHref>
                <button className="btn btn-lime text-blue-800 fw-bold">
                  view products
                </button>
              </Link>
            </div>
          </div>
        </div>{" "}
      </div>

      {/* About Section */}
      <section id="about" className="pt-5 bg-blue-100">
        <h2 className="text-center mt-5 text-blue-800">About</h2>
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
