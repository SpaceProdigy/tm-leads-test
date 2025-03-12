import React, { useEffect, useState } from "react";
import { MainContainer, Text, Wrapper } from "./TryNow.styled";
import InputComponent from "../Input/Input";
import ButtonComponent from "../Button/Button";
import { notifyFn } from "../Notify/notifyFn";

export default function TryNow({ textButton = "Попробовать", title }) {
  const [text, setText] = useState("");

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    const trimText = text.trim();
    if (!trimText) {
      notifyFn("warning", "Введите E-MAIL");
      return;
    }
    notifyFn("success", text);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <MainContainer>
      <Text style={{}}>{title}</Text>

      <Wrapper>
        <InputComponent
          type="email"
          value={text}
          onChange={handleInput}
          inputStyle={
            windowWidth < 1024
              ? {
                  maxWidth: "400px",
                }
              : {
                  background: "transparent",
                  fontSize: "16px",
                  minWidth: "250px",
                }
          }
          onKeyDown={handleKeyDown}
        />
        <ButtonComponent
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          btStyle={
            windowWidth < 1024
              ? {
                  maxWidth: "400px",
                  width: "100%",
                  height: "52px",
                }
              : { height: "52px", padding: "0 24px" }
          }
          text={textButton}
        />
      </Wrapper>
    </MainContainer>
  );
}
