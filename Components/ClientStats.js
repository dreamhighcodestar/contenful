import ClientStat from "./ClientStat";
import { useEffect } from "react";
import { fadeUp } from "../animations/fadeUp";

const ClientStats = () => {
  useEffect(() => {
    fadeUp("#about-client-stats");
  }, []);
  return (
    <div
      id="about-client-stats"
      className="row justify-content-center mx-3 py-2 py-lg-5"
    >
      <ClientStat uniqueID="stat-1" num="800" text="Customers we serve" />
      <ClientStat uniqueID="stat-2" num="9" text="Operating Countries" />
      <ClientStat uniqueID="stat-3" num="18" text="Supply Partners" />
    </div>
  );
};

export default ClientStats;
