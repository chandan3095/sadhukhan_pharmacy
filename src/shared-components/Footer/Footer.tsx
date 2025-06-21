import { FaMapLocationDot, FaUserDoctor } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { FaWhatsapp, FaProductHunt, FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container">
        <div className="row py-3 py-md-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4 mb-md-0">
            <h3 className="page-title">
              <Link to="/">
                <img src={logo} alt="logo" className="logo" />
              </Link>
            </h3>

            <div className="d-flex flex-column gap-3 pt-2 pt-md-4">
              <h6 className="text-green-700 w-75 d-flex gap-2 fs-sm footer-text">
                <FaMapLocationDot size={40} style={{ color: "#fbb02e" }} />
                Bainchi G.T Road, Near Petrol Pump, Bainchi, Hooghly. PIN:
                712134
              </h6>

              <h6 className="text-green-700 d-flex gap-2 fs-sm footer-text">
                <MdAlternateEmail size={20} style={{ color: "#fbb02e" }} />
                sadhukhanpharmacy.med@gmail.com
              </h6>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4 mb-md-0">
            <h3 className="page-title text-blue-700">Links</h3>

            <ul className="list-unstyled d-flex flex-column gap-3 pt-2 pt-md-4 text-white">
              <li className="d-flex align-items-center gap-2 footer-text">
                <Link
                  to="/doctors"
                  style={{ textDecoration: "none" }}
                  className="text-green-700"
                >
                  <FaUserDoctor style={{ color: "#fbb02e" }} /> Doctor
                </Link>
              </li>
              <li className="d-flex align-items-center gap-2 footer-text">
                <Link
                  to="/products"
                  style={{ textDecoration: "none" }}
                  className="text-green-700"
                >
                  <FaProductHunt style={{ color: "#fbb02e" }} /> Product
                </Link>
              </li>
              <li className="d-flex align-items-center gap-2 footer-text text-green-700">
                <Link
                  to="/contact"
                  style={{ textDecoration: "none" }}
                  className="text-green-700"
                >
                  <IoIosSend style={{ color: "#fbb02e" }} /> Send Query
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4 mb-md-0">
            <h3 className="page-title text-blue-700">Contact</h3>

            <ul className="list-unstyled d-flex flex-column gap-3 pt-2 pt-md-4 text-white">
              <li className="d-flex align-items-center gap-2 footer-text text-green-700">
                <FaPhoneAlt style={{ color: "#fbb02e" }} /> 7866065406 /
                8350089864
              </li>
              <li className="d-flex align-items-center gap-2 footer-text text-green-700">
                <FaWhatsapp style={{ color: "#fbb02e" }} /> 8350089864
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-green-700 text-center text-white py-2 footer-text">
        © Copyright {new Date().getFullYear()} &nbsp;||&nbsp; All Rights
        Reserved
      </div>
    </footer>
  );
};

export default Footer;
