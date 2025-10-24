import { useState, useRef } from "react";
import styles from "../../public/assets/css/CustomSelect.module.css";

const CustomSelect = ({ options, onChange, placeholder = "Select" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) onChange(option);
  };

  return (
    <div className={styles.customSelect} ref={dropdownRef}>
      <div
        className={`${styles.selectBox} ${isOpen ? styles.open : ""}`}
        onClick={toggleDropdown}
      >
        {selectedOption ? selectedOption.label : placeholder}
      </div>
      {isOpen && (
        <div className={styles.options}>
          {options.map((option) => (
            <div
              key={option.value}
              className={styles.option}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
