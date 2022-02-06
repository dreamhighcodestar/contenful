import { useEffect } from "react";
import { fadeUp } from "../animations/fadeUp";
import Division from "./Division";

const Divisions = () => {
  useEffect(() => {
    fadeUp("#page-title");
    fadeUp("#divisions");
  });
  return (
    <div className="pb-5">
      <h2 id="page-title" className="text-center mb-3 text-blue-800">
        Divisions
      </h2>
      <div id="divisions" className="row justify-content-center mx-5">
        <Division
          name="General Products"
          icon="fas fa-hammer"
          description="We support your entire workflow starting with basic items"
        />
        <Division
          name="Clinical Diagnostics"
          icon="fas fa-clinic-medical"
          description="A broad range of diagnostic kits and quality assurance for hospitals and diagnostic laboratories."
        />
        <Division
          name="Analytical Science"
          icon="fas fa-atom"
          description="We offer specialized equipment, reagents and consumables for laboratories of numerous industries."
        />
        <Division
          name="Climate Monitoring"
          icon="fas fa-temperature-high"
          description="Temperature and humidity monitoring solutions for transportation and storage."
        />
        <Division
          name="Life Science"
          icon="fas fa-dna"
          description="We offer specialized equipment, reagents and consumables for laboratories of numerous industries."
        />
        <Division
          name="Food Quality &amp; Safety"
          icon="fas fa-hard-hat"
          description="Testing kits to ensure the safety and quality of food manufacturers, and also drive efficiency and savings for the client."
        />
      </div>
    </div>
  );
};

export default Divisions;
