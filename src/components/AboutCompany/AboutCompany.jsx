import React from "react";
import SectionWithRegtangele from "../SectionWithRegtangele/SectionWithRegtangele";
import { Text, TextContainer, Title } from "./AboutCompany.styled";

export default function AboutCompany() {
  return (
    <SectionWithRegtangele
      style={{ paddingBottom: "133px" }}
      children={
        <>
          <Title id="about">О компании</Title>
          <TextContainer>
            <Text>
              Мы опытная команда, для которой трейдинг – профессия. TradeBlade
              является авторизованным официальным брокером биржи Binance.
            </Text>
            <Text>
              Он представляет пользователям множество преимуществ, таких как
              более високая скорость синхронизации API и возможность создать
              учетную запись Binance через платформу TradeBlade всего в 1 клик.
            </Text>
          </TextContainer>
        </>
      }
    />
  );
}
