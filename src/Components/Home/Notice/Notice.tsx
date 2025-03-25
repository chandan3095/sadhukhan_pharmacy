import React from "react";
import "./Notice.css";
import { MdOutlineNotificationsActive } from "react-icons/md";

const DUMMY_NOTICES = [
  "Welcome to our application!",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  "Contrary to popular belief, Lorem Ipsum is not simply random text.",
];

const Notice: React.FC = () => {
  return (
    <div className="notice-container bg-green-700">
      <div className="notice-track">
        {[...DUMMY_NOTICES, ...DUMMY_NOTICES].map((notice, index) => (
          <div key={`${notice}-${index}`} className="notice-slider">
            <span className="notice-text d-flex align-items-center gap-2">
              <MdOutlineNotificationsActive color="yellow" />
              {notice}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notice;
