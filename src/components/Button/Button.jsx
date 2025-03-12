import React from "react";
import { Button } from "./Button.styled";

export default function ButtonComponent({
  text,
  btStyle,
  onClick,
  onKeyDown,
  disableHover = false,
  exstraText,
}) {
  return (
    <Button
      onClick={onClick}
      style={btStyle}
      onKeyDown={onKeyDown}
      tabIndex={0}
      $disableHover={disableHover}
    >
      {text}
      {exstraText}
    </Button>
  );
}
