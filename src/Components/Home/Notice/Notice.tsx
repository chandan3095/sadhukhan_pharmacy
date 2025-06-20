import React, { useEffect, useState } from "react";
import "./Notice.css";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { apiRequests } from "../../../api/api_requests";

const Notice: React.FC = () => {
  const [notices, setNotices] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getNoticesData = async () => {
      try {
        const noticesData = await apiRequests.getAllNotices();
        setNotices(noticesData.data);
      } catch (error) {
        console.error("Failed to fetch notices:", error);
        setNotices([]);
      } finally {
        setIsLoading(false);
      }
    };

    getNoticesData();
  }, []);

  return (
    <div className="notice-container bg-green-700">
      <div className="notice-track">
        {isLoading ? (
          <div className="notice-slider">
            <span className="notice-text d-flex align-items-center gap-2 text-white">
              Loading notices...
            </span>
          </div>
        ) : notices.length > 0 ? (
          [...notices, ...notices].map((notice, index) => (
            <div key={`${notice.title}-${index}`} className="notice-slider">
              <span className="notice-text d-flex align-items-center gap-2 text-white">
                <MdOutlineNotificationsActive color="yellow" />
                <span>
                  <strong>{notice.title}</strong>
                  {notice.description ? (
                    <>
                      :{" "}
                      <span className="font-normal">{notice.description}</span>
                    </>
                  ) : null}
                </span>
              </span>
            </div>
          ))
        ) : (
          <div className="notice-slider">
            <span className="notice-text d-flex align-items-center gap-2 text-white">
              <MdOutlineNotificationsActive color="yellow" />
              No notices available now.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notice;
