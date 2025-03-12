import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Product } from "../../Components/Home/Productssec/Products";
import "./singleproduct.css";

const SingleProduct: React.FC<Product> = ({
  id,
  img,
  basePrice,
  currentPrice,
  desc,
  title,
}) => {
  return (
    <Card key={id} className="border-0 shadow">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="text-green-800">{title}</Card.Title>
        <Card.Text className="text-secondary">{desc}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Title className="text-danger text-decoration-line-through">
            ₹{basePrice}.00
          </Card.Title>
          <Card.Title className="text-green-700">₹{currentPrice}.00</Card.Title>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SingleProduct;
