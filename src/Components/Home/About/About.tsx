import CommonTitle from "../../../shared-components/CommonTitle/CommonTitle";
import Slider, { Settings } from "react-slick";
import "./about.css";
import img1 from "../../../assets/imgs/1.jpg";
import img2 from "../../../assets/imgs/2.jpg";
import img3 from "../../../assets/imgs/3.jpg";
import img4 from "../../../assets/imgs/4_cleanup.jpeg";
import img5 from "../../../assets/imgs/5_cleanup.jpeg";
import img6 from "../../../assets/imgs/6_cleanup.jpeg";
import img7 from "../../../assets/imgs/7_cleanup.jpeg";
import img8 from "../../../assets/imgs/8_cleanup.jpeg";
import img9 from "../../../assets/imgs/9_cleanup.jpeg";
import img10 from "../../../assets/imgs/10_cleanup.jpeg";
import img11 from "../../../assets/imgs/11_cleanup.jpeg";
import img13 from "../../../assets/imgs/13_cleanup.jpeg";
import img14 from "../../../assets/imgs/14_cleanup.jpeg";
import img15 from "../../../assets/imgs/15_cleanup.jpeg";
import img16 from "../../../assets/imgs/16_cleanup.jpeg";
import img21 from "../../../assets/imgs/21_cleanup.jpeg";
import img22 from "../../../assets/imgs/22_cleanup.jpeg";
import img23 from "../../../assets/imgs/23_cleanup.jpeg";
import img24 from "../../../assets/imgs/24_cleanup.jpeg";

const About = () => {
  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img13,
    img14,
    img15,
    img16,
    img21,
    img22,
    img23,
    img24,
  ];

  return (
    <div className="container">
      <CommonTitle title="About Us" withIcon={true} />

      <div className="row">
        <div className="col-12 col-md-12 col-lg-7 mb-4 mb-md-0">
          <div>
            <p className="w-100 text-success about-section-text">
              আপনার সকল স্বাস্থ্যসেবা চাহিদা পূরণের জন্য আপনার বিশ্বস্ত গন্তব্য,{" "}
              <strong style={{ color: "#fbb02e" }}>সাধুখাঁ ফার্মেসিতে</strong>{" "}
              আপনাকে স্বাগতম। উচ্চমানের ওষুধ এবং স্বাস্থ্যসেবা পণ্য সরবরাহের
              প্রতিশ্রুতি নিয়ে আমরা নিষ্ঠা এবং যত্নের সাথে সম্প্রদায়ের সেবা
              করে আসছি।
            </p>

            <p className="w-100 text-success about-section-text">
              <strong style={{ color: "#fbb02e" }}>সাধুখাঁ ফার্মেসিতে</strong>,
              আমরা বিশ্বাস করি যে সুস্বাস্থ্য হল একটি সুখী জীবনের ভিত্তি। আমাদের
              লক্ষ্য হল আপনার এবং আপনার প্রিয়জনদের নিরাপদ, কার্যকর এবং সাশ্রয়ী
              মূল্যের ওষুধের অ্যাক্সেস নিশ্চিত করা। আমরা প্রেসক্রিপশন ওষুধ
              স্বাস্থ্য পরিপূরক এবং ব্যক্তিগত যত্ন পণ্যের বিস্তৃত পরিসর মজুত
              করি, যাতে আপনি এক ছাদের নীচে আপনার প্রয়োজনীয় সবকিছু খুঁজে পান।
            </p>

            <p className="w-100 text-success about-section-text">
              আমাদের জ্ঞানী এবং বন্ধুত্বপূর্ণ কর্মীরা সর্বদা বিশেষজ্ঞ পরামর্শ
              এবং ব্যক্তিগতকৃত পরিষেবা প্রদানের জন্য আপনাকে গাইড করার জন্য
              উপলব্ধ। বিশ্বাস, নির্ভরযোগ্যতা এবং যত্নের উপর ভিত্তি করে আমাদের
              গ্রাহকদের সাথে দীর্ঘস্থায়ী সম্পর্ক গড়ে তোলার জন্য আমরা গর্বিত।
            </p>

            <p className="w-100 text-success about-section-text">
              <strong>
                <em>
                  <span style={{ color: "#fbb02e" }}>সাধুখাঁ ফার্মেসি</span>{" "}
                  বেছে নেওয়ার জন্য আপনাকে ধন্যবাদ
                </em>
              </strong>{" "}
              – যেখানে আপনার স্বাস্থ্য সবার আগে আসে!
            </p>
          </div>
        </div>

        <div className="col-12 col-md-12 col-lg-5 mb-4 mb-md-0">
          <div className="about-slider-container">
            <Slider {...settings}>
              {images.map((img, index) => (
                <div key={index} className="about-slide-item">
                  <img
                    src={img}
                    alt={`About Slide ${index + 1}`}
                    className="img-fluid w-100"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
