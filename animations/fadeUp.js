import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const fadeUp = (element) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      toggleActions: "restart none none none",
    },
    y: 75,
    duration: 1.5,
  });
};
