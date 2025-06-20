import CommonDropdown, {
  Option,
} from "../../shared-components/CommonDropdown/CommonDropdown";
import SingleDoctor from "../../shared-components/SingleDoctor/SingleDoctor";
import { useEffect, useState } from "react";
import { apiRequests } from "../../api/api_requests";
import noDataImage from "../../assets/no_doctor.png";

const Doctors = () => {
  const options: Option[] = [
    { title: "All", value: "all" },
    { title: "Monday", value: "monday" },
    { title: "Tuesday", value: "tuesday" },
    { title: "Wednesday", value: "wednesday" },
    { title: "Thursday", value: "thursday" },
    { title: "Friday", value: "friday" },
    { title: "Saturday", value: "saturday" },
    { title: "Sunday", value: "sunday" },
  ];

  const [doctors, setDoctors] = useState<any[]>([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    const visitingDays = await apiRequests.getAllVisitingDays();

    const groupedDoctors: { [doctorId: number]: any } = {};

    visitingDays.forEach((visit: any) => {
      const doctorId = visit.doctor.id;

      if (!groupedDoctors[doctorId]) {
        groupedDoctors[doctorId] = {
          id: doctorId,
          name: visit.doctor.name,
          degree: visit.doctor.degree,
          specialist: visit.doctor.specialist,
          profile_picture_url: visit.doctor.profile_picture_url,
          schedules: [],
        };
      }

      groupedDoctors[doctorId].schedules.push({
        day: visit.day,
        fromtime: formatTime(visit.start_time),
        totime: formatTime(visit.end_time),
      });
    });

    setDoctors(Object.values(groupedDoctors));
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    const date = new Date();
    date.setHours(+hours);
    date.setMinutes(+minutes);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handleDropdownChange = async (value: string | null) => {
    if (!value || value === "all") {
      fetchDoctors();
      return;
    }

    const filteredData = await apiRequests.getVisitingDaysByDay(value);

    const groupedDoctors: { [doctorId: number]: any } = {};

    filteredData.data.forEach((visit: any) => {
      const doctorId = visit.doctor.id;

      if (!groupedDoctors[doctorId]) {
        groupedDoctors[doctorId] = {
          id: doctorId,
          name: visit.doctor.name,
          degree: visit.doctor.degree,
          specialist: visit.doctor.specialist,
          profile_picture_url: visit.doctor.profile_picture_url,
          schedules: [],
        };
      }

      groupedDoctors[doctorId].schedules.push({
        day: visit.day,
        fromtime: formatTime(visit.start_time),
        totime: formatTime(visit.end_time),
      });
    });

    setDoctors(Object.values(groupedDoctors));
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
          {doctors.length > 0 ? (
            doctors.map((doctor: any) => (
              <div
                className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3 mb-md-4"
                key={doctor.id}
              >
                <SingleDoctor
                  id={doctor.id}
                  title={doctor.name}
                  degree={doctor.degree}
                  specialist={doctor.specialist}
                  image={doctor.profile_picture_url}
                  schedules={doctor.schedules}
                />
              </div>
            ))
          ) : (
            <div className="text-center w-100">
              <img
                src={noDataImage}
                alt="No Doctors Found"
                style={{ maxWidth: "300px", width: "100%" }}
                className="img-fluid"
              />
              <h5 className="mt-3">No Doctors Found</h5>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
