import CommonTitle from "../../../shared-components/CommonTitle/CommonTitle";
import img from "../../../assets/about.png";

const About = () => {
  return (
    <div className="container">
      <CommonTitle title="About Us" withIcon={true} />

      <div>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6 col-lg-7 mb-4 mb-md-0">
            <p className="mb-3 w-100 w-lg-50 w-md-75">
              <strong>Welcome to Sadhukhan Pharmacy</strong>, your trusted
              destination for all your healthcare needs. Established with a
              commitment to providing high-quality medicines and healthcare
              products, we have been serving the community with dedication and
              care.
            </p>

            <p className="mb-3 w-100 w-lg-50 w-md-75">
              At Sadhukhan Pharmacy, we believe that good health is the
              foundation of a happy life. Our mission is to ensure that you and
              your loved ones have access to safe, effective, and affordable
              medications. We stock a wide range of prescription drugs,
              over-the-counter medicines, health supplements, and personal care
              products, ensuring that you find everything you need under one
              roof.
            </p>

            <p className="mb-3 w-100 w-lg-50 w-md-75">
              Our knowledgeable and friendly staff are always available to guide
              you with expert advice and personalized service. We take pride in
              building long-lasting relationships with our customers based on
              trust, reliability, and care.
            </p>
            <p className="mb-3 w-100 w-lg-50 w-md-75">
              <strong>
                <em>Thank you for choosing Sadhukhan Pharmacy</em>
              </strong>{" "}
              – where your health comes first!
            </p>
          </div>
          <div className="col-md-6 col-lg-5 mb-4 mb-md-0">
            <img src={img} alt="" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
