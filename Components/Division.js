const Division = ({ name, icon }) => {
  return (
    <div className="container col-sm-4 col-md-4 col-lg-2 my-2 mx-sm-2 text-center border border-orange bg-blue-800 text-lime rounded-3">
      <div className="p-3">
        <i className={icon + " fs-1 pt-2"}></i>
        <p className="fw-bold pt-2 text-orange">{name}</p>
      </div>
    </div>
  );
};

export default Division;
