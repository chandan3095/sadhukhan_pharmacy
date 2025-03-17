import Card from "react-bootstrap/Card";
import { LuSquareUser } from "react-icons/lu";
import "./doctor.css";
import { Doctor } from "../../Components/Home/Doctors-schedule/Schedule";

const SingleDoctor: React.FC<Doctor> = ({
  id,
  title,
  days,
  degree,
  fromtime,
  totime,
}) => {
  return (
    <div className="col-12 col-sm-12 col-md-4 col-lg-3 mb-3 w-100">
      <Card className="doctor-card h-100 " key={id}>
        <Card.Body className="d-flex flex-column justify-content-center align-items-center gap-3">
          <LuSquareUser size={60} color="#38cb82" opacity={0.8} />
          <Card.Title className="text-success text-center">{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-center">
            {degree}
          </Card.Subtitle>
          <div>
            <Card.Text className="m-0 text-center text-muted">
              {fromtime} to {totime}
            </Card.Text>
            <Card.Text className="m-0 text-center text-muted">{days}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleDoctor;
