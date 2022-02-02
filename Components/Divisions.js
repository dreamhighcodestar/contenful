import Division from "./Division";

const Divisions = () => {
  return (
    <div className="pb-5">
      <h2 className="text-center mb-3 text-blue-800">Divisions</h2>
      <div className="row justify-content-center mx-5">
        <Division name="General Products" icon="fas fa-hammer" />
        <Division name="Clinical Diagnostics" icon="fas fa-clinic-medical" />
        <Division name="Analytical Science" icon="fas fa-atom" />
        <Division name="Climate Monitoring" icon="fas fa-temperature-high" />
        <Division name="Life Science" icon="fas fa-dna" />
        <Division name="Food Quality &amp; Safety" icon="fas fa-hard-hat" />
      </div>
    </div>
  );
};

export default Divisions;
