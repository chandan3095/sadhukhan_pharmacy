import CustomButton from "../../../shared-components/Button/CustomButton";
import CommonTitle from "../../../shared-components/CommonTitle/CommonTitle";
import { GrSchedule } from "react-icons/gr";
import Slider from "react-slick";
import SingleDoctor from "../../../shared-components/SingleDoctor/SingleDoctor";
import "./schedule.css";
import { Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { apiRequests } from "../../../api/api_requests";
import { useNavigate } from "react-router-dom";
import CustomLoader from "../../../shared-components/CustomLoader/CustomLoader";

const Schedule = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: "linear",
    pauseOnFocus: false,
    pauseOnHover: false,
    waitForAnimate: false,
    draggable: false,
    touchMove: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true);
      try {
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
            description: visit.description,
          });
        });
        console.log("Grouped Doctors:", groupedDoctors);
        setDoctors(Object.values(groupedDoctors));
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

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

  return (
    <section className="schedule-sec">
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-6 col-md-8 col-lg-9 col-xl-10">
            <CommonTitle title="Doctor’s" withIcon={true} />
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-end align-items-center">
            <CustomButton
              title="View Schedule"
              variant="light"
              customBgColor="#fff"
              customTextColor="#000"
              icon={<GrSchedule />}
              handleClick={() => navigate("/doctors")}
            />
          </div>
        </div>

        <Row>
          <div className="slider-container pt-3 pt-md-5">
            {loading ? (
              <div
                className="d-flex justify-content-center align-items-center w-100"
                style={{ minHeight: "200px" }}
              >
                <CustomLoader />
              </div>
            ) : doctors.length === 1 ? (
              <div className="d-flex justify-content-center">
                <SingleDoctor
                  id={doctors[0].id}
                  title={doctors[0].name}
                  degree={doctors[0].degree}
                  specialist={doctors[0].specialist}
                  image={doctors[0].profile_picture_url}
                  schedules={doctors[0].schedules}
                  description={doctors[0].description}
                />
              </div>
            ) : (
              <Slider
                {...{
                  ...settings,
                  slidesToShow: Math.min(doctors.length, 3),
                  centerMode: doctors.length > 1,
                }}
              >
                {doctors.map((doctor: any) => (
                  <div key={doctor.id}>
                    <SingleDoctor
                      id={doctor.id}
                      title={doctor.name}
                      degree={doctor.degree}
                      specialist={doctor.specialist}
                      image={doctor.profile_picture_url}
                      schedules={doctor.schedules}
                      description={doctor.description}
                    />
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </Row>
      </div>
    </section>
  );
};

export default Schedule;
