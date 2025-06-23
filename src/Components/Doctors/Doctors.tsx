import CommonDropdown, {
  Option,
} from "../../shared-components/CommonDropdown/CommonDropdown";
import SingleDoctor from "../../shared-components/SingleDoctor/SingleDoctor";
import { useEffect, useState } from "react";
import { apiRequests } from "../../api/api_requests";
import noDataImage from "../../assets/no_doctor.png";
import CustomLoader from "../../shared-components/CustomLoader/CustomLoader";

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
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    setLoading(true);
    try {
      const visitingDays = await apiRequests.getAllVisitingDays();
      groupDoctors(visitingDays);
    } catch (error) {
      console.error("Error fetching doctors:", error);
      setDoctors([]);
    } finally {
      setLoading(false);
    }
  };

  const groupDoctors = (data: any[]) => {
    const groupedDoctors: { [doctorId: number]: any } = {};

    data.forEach((visit: any) => {
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
    setLoading(true);
    try {
      const visitingDays = await apiRequests.getAllVisitingDays();

      if (!value || value === "all") {
        groupDoctors(visitingDays);
      } else {
        const filtered = visitingDays.filter(
          (visit: any) => visit.day.toLowerCase() === value.toLowerCase()
        );
        groupDoctors(filtered);
      }
    } catch (error) {
      console.error("Error filtering doctors:", error);
      setDoctors([]);
    } finally {
      setLoading(false);
    }
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
          {loading ? (
            <div
              className="d-flex justify-content-center align-items-center w-100"
              style={{ minHeight: "200px" }}
            >
              <CustomLoader />
            </div>
          ) : doctors.length > 0 ? (
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
              <h5 className="mt-3" style={{ color: "red" }}>
                No Doctors Found!
              </h5>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
