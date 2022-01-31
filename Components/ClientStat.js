const ClientStat = ({ num, text }) => {
  return (
    <div className="container col-xs-10 col-sm-8 col-md-3 m-2 text-center rounded-3 p-0">
      <div className="p-3">
        <h3 className="py-1 display-1 fw-bold text-orange">{num}</h3>
        <p className="text-orange fw-bold">{text}</p>
      </div>
    </div>
  );
};

export default ClientStat;
