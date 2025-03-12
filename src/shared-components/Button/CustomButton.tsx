import { ReactNode } from "react";
import { Button } from "react-bootstrap";
import "./custombutton.css";

interface props {
  title: string;
  variant: string;
  icon?: ReactNode;
  handleClick: () => void;
  customBgColor?: string;
  customTextColor?: string;
}
const CustomButton: React.FC<props> = ({
  title,
  variant,
  icon,
  handleClick,
  customBgColor,
  customTextColor,
}) => {
  const customStyles = {
    backgroundColor: customBgColor,
    color: customTextColor,
    border: "none",
  } as React.CSSProperties;

  return (
    <Button
      variant={variant}
      onClick={handleClick}
      className="d-flex gap-2 align-items-center rounded-pill shadow"
      style={customStyles}
    >
      {title}
      {icon}
    </Button>
  );
};

export default CustomButton;
