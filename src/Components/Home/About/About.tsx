import CommonTitle from "../../../shared-components/CommonTitle/CommonTitle";
import img from "../../../assets/about.png";
import "./about.css";

const About = () => {
  return (
    <div className="container">
      <CommonTitle title="About Us" withIcon={true} />

      <div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-7 mb-4 mb-md-0">
            <div>
              <p className=" w-100 text-success about-section-text">
                আপনার সকল স্বাস্থ্যসেবা চাহিদা পূরণের জন্য আপনার বিশ্বস্ত
                গন্তব্য,{" "}
                <strong style={{ color: "#fbb02e" }}>
                  {" "}
                  সাধুখান ফার্মেসিতে{" "}
                </strong>{" "}
                আপনাকে স্বাগতম। উচ্চমানের ওষুধ এবং স্বাস্থ্যসেবা পণ্য সরবরাহের
                প্রতিশ্রুতি নিয়ে প্রতিষ্ঠিত, আমরা নিষ্ঠা এবং যত্নের সাথে
                সম্প্রদায়ের সেবা করে আসছি।
              </p>

              <p className=" w-100 text-success about-section-text">
                <strong style={{ color: "#fbb02e" }}>সাধুখান ফার্মেসিতে</strong>
                , আমরা বিশ্বাস করি যে সুস্বাস্থ্য হল একটি সুখী জীবনের ভিত্তি।
                আমাদের লক্ষ্য হল আপনার এবং আপনার প্রিয়জনদের নিরাপদ, কার্যকর এবং
                সাশ্রয়ী মূল্যের ওষুধের অ্যাক্সেস নিশ্চিত করা। আমরা প্রেসক্রিপশন
                ওষুধ স্বাস্থ্য পরিপূরক এবং ব্যক্তিগত যত্ন পণ্যের বিস্তৃত পরিসর
                মজুত করি, যাতে আপনি এক ছাদের নীচে আপনার প্রয়োজনীয় সবকিছু খুঁজে
                পান।
              </p>

              <p className=" w-100 text-success about-section-text">
                আমাদের জ্ঞানী এবং বন্ধুত্বপূর্ণ কর্মীরা সর্বদা বিশেষজ্ঞ পরামর্শ
                এবং ব্যক্তিগতকৃত পরিষেবা প্রদানের জন্য আপনাকে গাইড করার জন্য
                উপলব্ধ। বিশ্বাস, নির্ভরযোগ্যতা এবং যত্নের উপর ভিত্তি করে আমাদের
                গ্রাহকদের সাথে দীর্ঘস্থায়ী সম্পর্ক গড়ে তোলার জন্য আমরা গর্বিত।
              </p>

              <p className=" w-100 text-success about-section-text">
                <strong>
                  <em>
                    <span style={{ color: "#fbb02e" }}>সাধুখান ফার্মেসি</span>{" "}
                    বেছে নেওয়ার জন্য আপনাকে ধন্যবাদ
                  </em>
                </strong>{" "}
                – যেখানে আপনার স্বাস্থ্য সবার আগে আসে!
              </p>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-5 mb-4 mb-md-0">
            <div className="w-100">
              <img
                src={img}
                alt="About SadhuKhan Pharmacy"
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
