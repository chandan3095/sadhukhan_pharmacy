import Card from "react-bootstrap/Card";
import { Product } from "../../Components/Home/Productssec/Products";
import "./singleproduct.css";

const SingleProduct: React.FC<Product> = ({
  id,
  img,
  basePrice,
  // currentPrice,
  desc,
  title,
}) => {
  return (
    <Card key={id} className="border-0 shadow equal-height-card">
      <Card.Img variant="top" src={img} className="card-img-top" />
      <Card.Body>
        <Card.Title className="text-green-800 card-title">{title}</Card.Title>
        <Card.Text className="text-secondary section-text">{desc}</Card.Text>
        <div className="d-flex justify-content-between align-items-center pt-2">
          <Card.Title className="section-text card-title">
            M.r.p Price:
          </Card.Title>
          <Card.Title className="text-green-800 card-title">
            ₹{basePrice}.00
          </Card.Title>
          {/* <Card.Title className="text-green-700 card-title">
            ₹{currentPrice}.00
          </Card.Title> */}
        </div>
      </Card.Body>
    </Card>
  );
};

export default SingleProduct;
