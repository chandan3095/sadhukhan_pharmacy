import { useState } from "react";
import Card from "react-bootstrap/Card";
import { LuSquareUser } from "react-icons/lu";
import "./doctor.css";

interface Schedule {
  day: string;
  fromtime: string;
  totime: string;
  description?: string;
}

interface SingleDoctorProps {
  id: number;
  title: string;
  degree: string;
  specialist: string;
  image?: string;
  schedules: Schedule[];
  description?: string;
}

const SingleDoctor: React.FC<SingleDoctorProps> = ({
  id,
  title,
  degree,
  specialist,
  image,
  schedules,
  description,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="col-12 col-sm-12 col-md-4 col-lg-3 mb-3 w-100">
      <Card className="doctor-card h-100" key={id}>
        <Card.Body className="d-flex flex-column justify-content-center align-items-center gap-3">
          {!image || imageError ? (
            <LuSquareUser size={60} color="#38cb82" opacity={0.8} />
          ) : (
            <img
              src={image}
              alt=""
              onError={() => setImageError(true)}
              className="rounded-circle"
              style={{ width: 60, height: 60, objectFit: "cover" }}
            />
          )}

          <Card.Title className="text-success text-center">{title}</Card.Title>
          <Card.Subtitle className="mb-1 text-muted text-center">
            {degree}
          </Card.Subtitle>
          <Card.Text className="mb-2 text-muted text-center">
            {specialist}
          </Card.Text>
          <div className="schedule-list text-center">
            {Array.isArray(schedules) &&
              schedules.map((slot, index) => (
                <div key={index}>
                  <Card.Text className="m-0 text-muted">
                    {slot.day}: {slot.fromtime} - {slot.totime}
                  </Card.Text>
                  {slot.description && (
                    <Card.Text className="mt-1 text-muted">
                      {slot.description}
                    </Card.Text>
                  )}
                </div>
              ))}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleDoctor;
