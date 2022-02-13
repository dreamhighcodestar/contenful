import Image from "next/image";
import { fadeUp } from "../animations/fadeUp";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    fadeUp("#about-title");
    fadeUp("#about-img-text");
  }, []);
  return (
    <>
      <h2 id="about-title" className="text-center mt-5 pt-5 text-blue-800">
        About
      </h2>
      <div id="about-img-text" className="container">
        <div className="row justify-content-center pb-5">
          <div className="d-flex flex-column justify-content-center col-sm-10 col-lg-6 mt-2">
            <Image
              className="p-0 p-sm-1 p-md-2 m-1"
              src="/assets/staff.jpg"
              width={1300}
              height={950}
            />
          </div>
          <div className="col-sm-10 col-lg-6 p-xs-1 p-md-3 p-lg-5 mt-4">
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
    </>
  );
};

export default About;
