import { BiPlusMedical } from "react-icons/bi";
import "./commontitle.css";

interface Props {
  title: string;
  color?: string;
  withIcon?: boolean;
}
const CommonTitle: React.FC<Props> = ({
  title,
  color = "#2eb774",
  withIcon,
}) => {
  return (
    <>
      <h2 className="section-title">
        {withIcon ? (
          <>
            <BiPlusMedical
              color={color}
              size={90}
              opacity={0.4}
              className="title-icon"
            />{" "}
            <span className="title-text">{title}</span>
          </>
        ) : (
          title
        )}
      </h2>
    </>
  );
};

export default CommonTitle;
