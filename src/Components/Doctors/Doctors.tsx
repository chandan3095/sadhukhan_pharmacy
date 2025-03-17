import CommonDropdown, {
  Option,
} from "../../shared-components/CommonDropdown/CommonDropdown";
import data from "../../data/doctorData.js";
import { Doctor } from "../Home/Doctors-schedule/Schedule";
import SingleDoctor from "../../shared-components/SingleDoctor/SingleDoctor";

const Doctors = () => {
  const options: Option[] = [
    { title: "Monday", value: "monday" },
    { title: "Tuesday", value: "tuesday" },
    { title: "Wednesday", value: "wednesday" },
    { title: "Thursday", value: "thursday" },
    { title: "Friday", value: "friday" },
    { title: "Saturday", value: "saturday" },
    { title: "Sunday", value: "sunday" },
  ];

  const handleDropdownChange = (value: string | null) => {
    console.log("Selected:", value);
  };
  return (
    <section className="bg-image">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3 py-md-5">
          <h2 className="mb-0 page-title">Doctor’s Schedule</h2>
          <CommonDropdown
            title="Navigation"
            options={options}
            onChange={handleDropdownChange}
          />
        </div>

        <div className="row py-3 py-md-5">
          {data.map((doctor: Doctor) => (
            <div
              className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3 mb-md-4"
              key={doctor.id}
            >
              <SingleDoctor
                key={doctor.id}
                id={doctor.id}
                title={doctor.title}
                days={doctor.days}
                degree={doctor.degree}
                fromtime={doctor.fromtime}
                totime={doctor.totime}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
