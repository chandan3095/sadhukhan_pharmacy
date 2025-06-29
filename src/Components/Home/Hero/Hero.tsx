import Slider, { Settings } from "react-slick";
import "./hero.css";
import img1 from "../../../assets/hero.png";
import img2 from "../../../assets/hero2.jpeg";
import img3 from "../../../assets/hero3.jpeg";
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
          {offers.length > 0
            ? offers.map((item) => (
                <div className="slide-item" key={item.id}>
                  <div className="image-overlay"></div>
                  <img
                    src={item.image_url}
                    alt="Offer"
                    className="slide-image"
                  />
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
                  </div>
                </div>
              ))
            : [img1, img2, img3].map((img, index) => (
                <div className="slide-item" key={index}>
                  <div className="image-overlay"></div>
                  <img
                    src={img}
                    alt={`Fallback ${index + 1}`}
                    className="slide-image"
                  />
                  <div className="offer-detail">
                    <h1 className="text-green-800 d-flex align-items-center gap-2">
                      Welcome To Sadhukhan Pharmacy
                    </h1>
                    <p className="text-white sub-title px-0 pt-3 leading-relaxed">
                      আপনার সকল স্বাস্থ্যসেবা চাহিদা পূরণের জন্য আপনার বিশ্বস্ত
                      গন্তব্য,{" "}
                      <span style={{ color: "#fbb02e", fontWeight: "bold" }}>
                        সাধুখাঁ ফার্মেসিতে{" "}
                      </span>
                      আপনাকে স্বাগতম।
                    </p>
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
