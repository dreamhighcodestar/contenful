const Division = ({ name, icon, description }) => {
  return (
    <div className="container col-sm-5 col-md-5 col-lg-3 my-2 mx-sm-2 text-center border border-orange bg-blue-800 text-lime rounded-3">
      <div className="p-3">
        <i className={icon + " fs-1 pt-2"}></i>
        <p className="fw-bold pt-2 text-orange">{name}</p>
        <p className="text-light">{description}</p>
      </div>
    </div>
  );
};

export default Division;
