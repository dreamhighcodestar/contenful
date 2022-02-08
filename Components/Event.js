import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

const Event = ({ event }) => {
  const date = new Date(event.eventDateAndTime);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function timeString(number) {
    return number < 10 ? "0" + number.toString() : number.toString();
  }
  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-9 my-2">
              {" "}
              <h5 className="card-title text-blue-800 fw-bold">
                {event.eventTitle}
              </h5>
            </div>
            <div className="col-sm-3 my-2">
              {" "}
              <Link href={event.eventLink} className="card-link">
                <button className="btn btn-lime text-blue-800 fw-bold ">
                  Event Link
                </button>
              </Link>
            </div>
          </div>
          <h6 className="card-subtitle my-2 text-orange">
            {`${day}th  ${monthName[month]}  ${year} ${timeString(
              hours
            )}:${timeString(minutes)} UTC`}
          </h6>

          <div className="card-text">
            {documentToReactComponents(event.eventDescription)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
