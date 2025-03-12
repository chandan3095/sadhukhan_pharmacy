import { FaMapLocationDot, FaUserDoctor } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { FaWhatsapp, FaProductHunt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-700">
      <div className="container">
        <div className="row py-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4 mb-md-0">
            <h3>LOGO</h3>

            <div className="d-flex flex-column gap-3 pt-4">
              <h6 className="text-light w-75 d-flex gap-2 fs-sm">
                <FaMapLocationDot size={40} />
                Bainchi G.T Road, Near Petrol Pump, Bainchi, Hooghly. PIN:
                712134
              </h6>

              <h6 className="text-light d-flex gap-2 fs-sm">
                <MdAlternateEmail size={20} />
                sadhukhan.pharmacy@gmail.com
              </h6>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4 mb-md-0">
            <h3>Links</h3>

            <ul className="list-unstyled d-flex flex-column gap-3 pt-4 text-white">
              <li className="d-flex align-items-center gap-2">
                <FaUserDoctor /> Doctor
              </li>
              <li className="d-flex align-items-center gap-2">
                <FaProductHunt /> Product
              </li>
              <li className="d-flex align-items-center gap-2">
                <IoIosSend /> Send Query
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4 mb-md-0">
            <h3>Contact</h3>

            <ul className="list-unstyled d-flex flex-column gap-3 pt-4 text-white">
              <li className="d-flex align-items-center gap-2">
                <FaPhoneAlt /> 7866065406
              </li>
              <li className="d-flex align-items-center gap-2">
                <FaWhatsapp /> 7866065406
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-dark text-center text-white py-2">
        © Copyright {new Date().getFullYear()} &nbsp;||&nbsp; All Rights
        Reserved
      </div>
    </footer>
  );
};

export default Footer;
