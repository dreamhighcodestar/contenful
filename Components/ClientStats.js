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
      <ClientStat num="800" text="Customers we serve" />
      <ClientStat num="9" text="Operating Countries" />
      <ClientStat num="18" text="Supply Partners" />
    </div>
  );
};

export default ClientStats;
