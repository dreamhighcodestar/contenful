import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

const ClientStat = ({ num, text, uniqueID }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(`#${uniqueID}`, {
      scrollTrigger: {
        trigger: `#${uniqueID}`,
        toggleActions: "restart none none none",
      },
      innerText: num,
      snap: "innerText",
      duration: 1.5,
    });
  }, []);

  return (
    <div className="container col-xs-10 col-sm-8 col-md-3 m-2 text-center rounded-3 p-0">
      <div className="p-3">
        <h3
          id={uniqueID}
          className="py-1 display-1 fw-bold text-orange number"
        ></h3>
        <p className="text-orange fw-bold">{text}</p>
      </div>
    </div>
  );
};

export default ClientStat;
