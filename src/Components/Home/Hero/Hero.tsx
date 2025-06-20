import Slider, { Settings } from "react-slick";
import "./hero.css";
// import CustomButton from "../../../shared-components/Button/CustomButton";
// import { GiMedicines } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";
import { useEffect, useState } from "react";
import { apiRequests } from "../../../api/api_requests";

const Hero = () => {
  const settings: Settings = {
    dots: true,
    fade: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  const [offers, setOffers] = useState<any[]>([]);

  useEffect(() => {
    const fetchAllOffers = async () => {
      const offerData = await apiRequests.getAllOffers();
      setOffers(offerData.data);
    };

    fetchAllOffers();
  }, []);

  return (
    <section className="hero-sec">
      <div className="slider-container">
        <Slider {...settings}>
          {offers.map((item) => (
            <div className="slide-item" key={item.id}>
              <div className="image-overlay"></div>
              <img src={item.image_url} alt="Offer 1" className="slide-image" />
              <div className="offer-detail">
                <h1 className="text-green-800 d-flex align-items-center gap-2">
                  <BiSolidOffer color="white" /> Offers
                </h1>
                <div className="py-3 py-md-1">
                  <h3 className="text-green-700 title">{item.title}</h3>
                  <p className="text-white sub-title px-0">
                    {item.description}
                  </p>
                </div>
                {/* <div>
                  <CustomButton
                    title="Get Details"
                    variant="light"
                    icon={<GiMedicines className="text-green-700" size={25} />}
                    handleClick={handleClick}
                  />
                </div> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;

interface ArrowProps {
  onClick?: () => void;
}

export const SampleNextArrow = ({ onClick }: ArrowProps) => (
  <div className="slick-arrow next" onClick={onClick}>
    <svg
      width="60"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M9 18L15 12L9 6" />
    </svg>
  </div>
);

export const SamplePrevArrow = ({ onClick }: ArrowProps) => (
  <div className="slick-arrow prev" onClick={onClick}>
    <svg
      width="60"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M15 18L9 12L15 6" />
    </svg>
  </div>
);
