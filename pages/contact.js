import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

const Contact = () => {
  const MapWithNoSSR = dynamic(() => import("../Components/Map.js"), {
    ssr: false,
  });
  return (
    <>
      <div className="mt-3 py-5">
        <h2 id="coming-soon" className="text-center mt-5 pt-5 text-blue-800">
          Contact Us
        </h2>
      </div>
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="container">
              <table className="table">
                <tbody>
                  <tr className="border-orange">
                    <td>
                      <i className="fas fa-map-marker-alt"></i>
                    </td>
                    <td className="text-end">
                      1st Floor Shamneel Court, 2 Muthiti Road, Westlands
                    </td>
                  </tr>

                  <tr className="border-orange">
                    <td>
                      <i className="fas fa-envelope"></i>
                    </td>
                    <td className="text-end">info@fnsientific.com</td>
                  </tr>
                  <tr className="border-orange">
                    <td>
                      <i className="fas fa-clock"></i>
                    </td>
                    <td className="text-end">9:00am - 5:00pm</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fas fa-phone"></i>
                    </td>
                    <td className="text-end">555-01356535654</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <form
              id="contact-form"
              method="post"
              action="/"
              className="php-email-form"
            >
              <div className="row">
                <div className="form-floating mb-3 col-md-6">
                  <input
                    type="name"
                    className="form-control"
                    id="floatingInputName"
                    placeholder=" "
                  />
                  <label className="ps-4" htmlFor="floatingInputName">
                    Name
                  </label>
                </div>
                <div className="form-floating mb-3 col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInputEmail"
                    placeholder=" "
                  />
                  <label className="ps-4" htmlFor="floatingInputEmail">
                    Email address
                  </label>
                </div>
              </div>
              <div className="mt-1 mb-0">
                <div className="form-floating mb-3">
                  <textarea
                    type="email"
                    className="form-control"
                    id={styles.floatingInputMessage}
                    rows="7"
                    placeholder=" "
                  ></textarea>
                  <label htmlFor="floatingInputMessage">Your message</label>
                </div>
              </div>
              <div className="mb-3">
                <div className="error-message text-center fw-bold"></div>
                <div className="sent-message text-center text-custom-green fw-bold"></div>
              </div>
              <div className="text-center my-3">
                <button
                  className="btn btn-orange fw-bold"
                  id="emailer-button"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div id={styles.map}>
              <MapWithNoSSR />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
