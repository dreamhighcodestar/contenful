import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Stat = ({ title, icon, description, uniqueID }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(`#${uniqueID}`, {
      scrollTrigger: {
        trigger: `#${uniqueID}`,
        toggleActions: "restart none none none",
      },
      scale: 0,
      duration: 2,
    });
  }, []);

  return (
    <div className="container col-xs-10 col-sm-8 col-md-3 m-2 text-center border border-primary rounded-3 p-0 bg-blue-800 text-lime">
      <div className="p-3">
        <div id={uniqueID}>
          <i className={icon + " fs-1 pt-3"}></i>
          <h3 className="py-4">{title}</h3>
        </div>
        <p className="text-orange fw-bold">{description}</p>
      </div>
    </div>
  );
};

export default Stat;
