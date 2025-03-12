import CustomButton from "../../../shared-components/Button/CustomButton";
import CommonTitle from "../../../shared-components/CommonTitle/CommonTitle";
import { GrSchedule } from "react-icons/gr";
import Card from "react-bootstrap/Card";
import { LuSquareUser } from "react-icons/lu";
import Slider from "react-slick";
import "./schedule.css";
import data from "./data.js";

const Schedule = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
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
    ],
  };

  return (
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

      <div className="slider-container pt-5">
        <Slider {...settings}>
          {data.map((item: any) => (
            <div className="d-flex" key={item.id}>
              <Card className="doctor-card">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center gap-3">
                  <LuSquareUser size={60} color="#38cb82" opacity={0.8} />
                  <Card.Title className="text-green-700">
                    {item.title}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {item.degree}
                  </Card.Subtitle>
                  <div>
                    <Card.Text className="m-0 text-center text-muted">
                      {item.fromtime} to {item.totime}
                    </Card.Text>
                    <Card.Text className="m-0 text-center text-muted">
                      {item.days}
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Schedule;
