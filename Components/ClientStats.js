import ClientStat from "./ClientStat";

const ClientStats = () => {
  return (
    <div className="row justify-content-center mx-3 py-2 py-lg-5">
      <ClientStat num="800" text="Customers we serve" />
      <ClientStat num="9" text="Operating Countries" />
      <ClientStat num="18" text="Supply Partners" />
    </div>
  );
};

export default ClientStats;
