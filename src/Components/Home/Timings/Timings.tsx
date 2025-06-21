import CommonTitle from "../../../shared-components/CommonTitle/CommonTitle";
import { RiTimerLine } from "react-icons/ri";
import MapComponent from "../../../shared-components/MapComponent/MapComponent";

const Timings = () => {
  return (
    <div className="container">
      <CommonTitle title="Timings" withIcon={true} />

      <div className="container py-3 py-md-5">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4 mb-md-0">
            <div className="">
              {/* Days & Time Section */}
              <div className="pb-4">
                <h3 className="card-title mb-3">Days & Time</h3>
                <p className="card-text">Opens All Weekdays except Tuesday</p>
                <p className="card-text d-flex align-items-center">
                  <RiTimerLine className="me-2" />
                  08:30 AM - 10:00 PM
                </p>

                {/* Facebook Link Section */}
                <div className="mt-4">
                  <h3 className="card-title mb-3">Facebook Link</h3>
                  <a
                    href="/"
                    className="text-decoration-none text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook Page will Be Available Soon..
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="">
              <MapComponent latitude={23.1212} longitude={88.1926} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timings;
