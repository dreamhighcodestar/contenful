import Link from "next/link";

const JobPost = ({ job }) => {
  return (
    <div className="container my-2 p-2 p-sm-4 border-bottom border-orange border-3 text-blue-800">
      <div className="row">
        <div className="col-sm-9">
          <h5 className="p-0 m-0">{job.jobTitle}</h5>
          <p className="p-0 m-0">{job.experienceLevel}</p>
          <p className="p-0 m-0">Closing Date: {job.closingDate}</p>
        </div>
        <div className="col-sm-3">
          <Link href={"https:" + job.jobProfilePdf.fields.file.url}>
            <a
              download
              target="_blank"
              className="text-blue-800 text-decoration-none"
            >
              <button className="btn btn-orange fw-bold"> Job Profile</button>
            </a>
          </Link>

          <a
            className="text-blue-800 text-decoration-none"
            href={job.applicationLink}
            target="_blank"
          >
            {" "}
            <button className="btn btn-lime fw-bold border-dark border-2">
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobPost;
