import React, { useEffect, useRef, useState } from "react";
import {
  SelectWrapper,
  SelectedOption,
  Dropdown,
  Option,
} from "./SelectComponent.styled";
import selectIcon from "/src/assets/selectIcon.svg";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function SelectComponent({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleSelect = (option) => {
    onChange({ target: { value: option.value } });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setIsOpen(!isOpen);
    }
  };

  const handleKeyDownOption = (option) => (event) => {
    if (event.key === "Enter") {
      handleSelect(option);
      setIsOpen(false);
    }
  };

  return (
    <SelectWrapper ref={selectRef}>
      <SelectedOption
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {options.find((opt) => opt.value === value)?.label || "Выберите"}
        <motion.div
          style={{ display: "inline-block" }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={selectIcon}
            alt="Select Icon"
            width={"24px"}
            height={"24px"}
          />
        </motion.div>
      </SelectedOption>
      <AnimatePresence>
        {isOpen && (
          <Dropdown
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {options.map((option) => (
              <Option
                key={option.value}
                onClick={() => handleSelect(option)}
                tabIndex={0}
                onKeyDown={handleKeyDownOption(option)}
              >
                {option.label}
              </Option>
            ))}
          </Dropdown>
        )}
      </AnimatePresence>
    </SelectWrapper>
  );
}
