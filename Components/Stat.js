const Stat = ({ title, icon, description }) => {
  return (
    <div className="container col-xs-10 col-sm-8 col-md-3 m-2 text-center border border-primary rounded-3 p-0 bg-blue-800 text-lime">
      <div className="p-3">
        <i className={icon + " fs-1 pt-3"}></i>
        <h3 className="py-4">{title}</h3>
        <p className="text-orange fw-bold">{description}</p>
      </div>
    </div>
  );
};

export default Stat;
