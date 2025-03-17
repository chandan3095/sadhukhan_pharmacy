import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

export interface Option {
  title: string;
  value: string;
}
interface DropdownProps {
  title: string;
  options: Option[];
  onChange?: (value: string | null) => void;
}
const CommonDropdown: React.FC<DropdownProps> = ({
  title = "default",
  options = [],
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value || null;
    setSelectedOption(value);
    onChange?.(value);
  };
  return (
    <div>
      <select
        id="dropdown"
        name="dropdown"
        className="rounded-pill p-2 bg-white text-green-700 w-100 "
        value={selectedOption || ""}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CommonDropdown;
