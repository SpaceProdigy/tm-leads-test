import React, { useState } from "react";
import {
  ButtonsWrapper,
  CenterButtonsWrapper,
  Discount,
  ExstraTextButton,
  MainContainer,
  PriceBox,
  PriceWrapper,
  Prise,
  Tariff,
  TariffBox,
  TariffWrapper,
  Text,
  TextWraper,
  Title,
} from "./Tariffs.styled";
import ButtonComponent from "../Button/Button";
import { theme } from "../../styles/theme";
import tickIcon from "/src/assets/tick.svg";
import SelectComponent from "../SelectComponent/SelectComponent";
import notifyFn from "../Notify/notifyFn";

const notActiveStyle = {
  height: "44px",
  width: "100%",
  fontWeight: 500,
  fontSize: "18px",
  background: "transparent",
  border: "none",
  boxShadow: "none",
};

const activeStyle = {
  height: "44px",
  width: "100%",
  fontWeight: 700,
  fontSize: "18px",
  background: theme.colors.buttonBackground,
  boxShadow: "none",
};

const tariffArr = [
  {
    tariff: "standart",
    discount: "-35%",
    prise: "$234",
    text: [
      "Ручной трейдинг",
      "Автоматическое или полуавтоматическое копирование сделок",
      "Личный кабинет со статистикой",
      "Среднесрочные сделки с уровнями набора портфеля",
    ],
  },
  {
    tariff: "vip",
    discount: "-35%",
    prise: "$585",
    text: [
      "Ручной трейдинг",
      "Автоматическое или полуавтоматическое копирование сделок",
      "Личный кабинет со статистикой",
      "Краткосрочные, среднесрочные и инвест сделки",
      "Доступ в Vip чат с командой",
      "Наш авторский курс по трейдингу",
    ],
  },
];

export default function Tariffs() {
  const [active, setActive] = useState("spot");
  const [selectedValues, setSelectedValues] = useState({
    standart: "STANDART $234 6 месяцев",
    vip: "VIP $585 6 месяцев",
  });

  const handleClickBt = (tariff) => {
    if (selectedValues[tariff]) {
      notifyFn("success", `Вы выбрали: ${selectedValues[tariff]}`);
    } else {
      notifyFn("warning", "Выберите тариф!");
    }
  };

  const handleSelectChange = (tariff, value) => {
    setSelectedValues((prev) => ({
      ...prev,
      [tariff]: value,
    }));
  };

  const handleClick = (v) => {
    setActive(v);
  };
  return (
    <MainContainer>
      <Title id="pricing">Тарифы</Title>
      <CenterButtonsWrapper>
        <ButtonsWrapper>
          <ButtonComponent
            disableHover={true}
            onClick={() => handleClick("spot")}
            btStyle={active === "spot" ? activeStyle : notActiveStyle}
            text={"СПОТ"}
          />
          <ButtonComponent
            disableHover={true}
            onClick={() => handleClick("futures")}
            btStyle={active === "futures" ? activeStyle : notActiveStyle}
            text={"фьючерс"}
          />
        </ButtonsWrapper>
      </CenterButtonsWrapper>
      <TariffWrapper>
        {tariffArr.map(({ tariff, discount, prise, text }, index) => (
          <TariffBox
            key={index}
            style={{
              background:
                tariff === "vip" ? theme.colors.purple : "transparent",
            }}
          >
            <div style={{ width: "100%" }}>
              <Tariff>{tariff}</Tariff>
            </div>
            <div style={{ marginTop: "24px" }}>
              {text.map((t, index) => (
                <TextWraper key={index}>
                  <img
                    src={tickIcon}
                    alt="Tick icon"
                    width="12px"
                    height="12px"
                  />
                  <Text>{t}</Text>
                </TextWraper>
              ))}
            </div>
            <PriceBox>
              <PriceWrapper>
                <Prise>{prise}</Prise>
                <Discount>{discount}</Discount>
              </PriceWrapper>
              <SelectComponent
                value={selectedValues[tariff]}
                onChange={(e) => handleSelectChange(tariff, e.target.value)}
                options={[
                  {
                    value: `${tariff.toUpperCase()} ${prise} 12 месяцев`,
                    label: "12 месяцев",
                  },
                  {
                    value: `${tariff.toUpperCase()} ${prise} 6 месяцев`,
                    label: "6 месяцев",
                  },
                  {
                    value: `${tariff.toUpperCase()} ${prise} 3 месяца`,
                    label: "3 месяца",
                  },
                  {
                    value: `${tariff.toUpperCase()} ${prise} 1 месяц`,
                    label: "1 месяц",
                  },
                ]}
              />
            </PriceBox>

            <ButtonComponent
              onClick={() => handleClickBt(tariff)}
              btStyle={{ width: "100%", height: "52px", marginTop: "24px" }}
              exstraText={<ExstraTextButton>5 дней бесплатно</ExstraTextButton>}
              text={"Попробовать"}
            />
          </TariffBox>
        ))}
      </TariffWrapper>
    </MainContainer>
  );
}
