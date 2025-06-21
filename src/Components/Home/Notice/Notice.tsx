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

  const renderNoticeContent = (notice: any, index: number) => (
    <div key={`${notice.title}-${index}`} className="notice-slider">
      <span className="notice-text d-flex align-items-center gap-2 text-white">
        <MdOutlineNotificationsActive color="yellow" />
        <span>
          <strong>{notice.title}</strong>
          {notice.description && (
            <>
              : <span className="font-normal">{notice.description}</span>
            </>
          )}
        </span>
      </span>
    </div>
  );

  return (
    <div className="notice-container">
      <div className="notice-track">
        {isLoading ? (
          <>
            <div className="notice-slider">
              <span className="notice-text d-flex align-items-center gap-2 text-white">
                Loading notices...
              </span>
            </div>
            <div className="notice-slider">
              <span className="notice-text d-flex align-items-center gap-2 text-white">
                Loading notices...
              </span>
            </div>
          </>
        ) : notices.length > 0 ? (
          [...notices, ...notices].map(renderNoticeContent)
        ) : (
          <>
            <div className="notice-slider">
              <span className="notice-text d-flex align-items-center gap-2 text-white">
                <MdOutlineNotificationsActive color="yellow" />
                No notices available now.
              </span>
            </div>
            <div className="notice-slider">
              <span className="notice-text d-flex align-items-center gap-2 text-white">
                <MdOutlineNotificationsActive color="yellow" />
                No notices available now.
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Notice;
