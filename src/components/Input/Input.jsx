import React from "react";
import { Input } from "./Input.styled";

export default function InputComponent({
  type = "text",
  placeholder = "ВАШ E–MAIL",
  inputStyle,
  onChange,
  value,
  onKeyDown,
}) {
  return (
    <Input
      value={value}
      onChange={onChange}
      style={inputStyle}
      type={type}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
    />
  );
}
