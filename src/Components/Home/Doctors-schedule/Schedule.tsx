import CustomButton from "../../../shared-components/Button/CustomButton";
import CommonTitle from "../../../shared-components/CommonTitle/CommonTitle";
import { GrSchedule } from "react-icons/gr";
import Slider from "react-slick";
import data from "../../../data/doctorData.js";
import SingleDoctor from "../../../shared-components/SingleDoctor/SingleDoctor";
import "./schedule.css";
import { Row } from "react-bootstrap";

export interface Doctor {
  id: number;
  title: string;
  degree: string;
  fromtime: string;
  totime: string;
  days: string;
}
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
              handleClick={() => console.log("Clicked")}
            />
          </div>
        </div>

        <Row>
          <div className="slider-container pt-3 pt-md-5">
            <Slider {...settings}>
              {data.map((item: Doctor) => (
                <div className="" key={item.id}>
                  <SingleDoctor
                    id={item.id}
                    title={item.title}
                    days={item.days}
                    degree={item.degree}
                    fromtime={item.fromtime}
                    totime={item.totime}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </Row>
      </div>
    </section>
  );
};

export default Schedule;
