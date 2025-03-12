import { useState } from "react";
import { theme } from "../../styles/theme";
import { Button } from "../Button/Button.styled";
import { notifyFn } from "../Notify/notifyFn";
import {
  BoxCover,
  BoxOne,
  BoxTwo,
  BoxWrapper,
  HelperText,
  Input,
  InputWrapper,
  LineElementBottom,
  LineElementTop,
  MainContainer,
  StartText,
  Text,
  Title,
  TitleWrapper,
} from "./Hero.styled";

export default function Hero() {
  const [text, setText] = useState("");

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
      <BoxWrapper>
        <BoxOne>
          <BoxCover>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <div>
                <Text>ETH/USDT</Text>
                <Text style={{ fontWeight: 400, fontSize: "13px" }}>Short</Text>
              </div>
              <Text style={{ marginTop: "auto" }}>+141%</Text>
            </div>
          </BoxCover>
        </BoxOne>
        <BoxTwo>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <LineElementTop />
            <LineElementBottom />
            <div>
              <Text style={{ color: theme.colors.primaryText }}>ETH/USDT</Text>
              <Text
                style={{
                  fontWeight: 400,
                  fontSize: "13px",
                  color: theme.colors.secondaryText,
                }}
              >
                Short
              </Text>
            </div>
            <Text
              style={{ marginTop: "auto", color: theme.colors.primaryText }}
            >
              +116%
            </Text>
          </div>
        </BoxTwo>
      </BoxWrapper>

      <TitleWrapper>
        <Title>Моментально Копируй сделки профи трейдеров</Title>
        <StartText>
          Начни копировать сделки с успешной командой профессиональных трейдеров
          в автоматическом режиме.
        </StartText>
        <div>
          <InputWrapper>
            <Input
              value={text}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              type="email"
              placeholder="ВАШ E–MAIL"
            />
            <Button
              onClick={handleClick}
              onKeyDown={handleKeyDown}
              style={{
                position: "absolute",
                height: "42px",
                padding: "0 24px",
                marginRight: "4px",
              }}
            >
              Начать
            </Button>
          </InputWrapper>
          <HelperText>5 дней бесплатного пользования</HelperText>
        </div>
      </TitleWrapper>
    </MainContainer>
  );
}
