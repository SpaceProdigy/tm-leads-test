import React from "react";
import {
  Card,
  Date,
  DotBox,
  Goal,
  GoalWrapper,
  ImageBox,
  MainContainer,
  Online,
  OnlineBox,
  Pair,
  Profit,
  ProfitText,
  Title,
  TransacrionWrapper,
  Type,
} from "./PastTransactions.styled";

import profitIcon from "/src/assets/profitIcon.png";

const trades = [
  {
    pair: "NEAR/USDT",
    type: "SPOT · 1 мин. назад",
    profit: "58.6206%",
    goal: "Цель 4",
    date: "Дата входа 06.10.2022",
  },
  {
    pair: "BTC/USDT",
    type: "SPOT · 1 мин. назад",
    profit: "6.02%",
    goal: "Цель 3",
    date: "Дата входа 06.10.2022",
  },
  {
    pair: "ETH/USDT",
    type: "SPOT · 1 мин. назад",
    profit: "16.3%",
    goal: "Цель 4",
    date: "Дата входа 06.10.2022",
  },
  {
    pair: "NEAR/USDT",
    type: "SPOT · 1 мин. назад",
    profit: "0.963%",
    goal: "Цель 4",
    date: "Дата входа 06.10.2022",
  },
  {
    pair: "NEAR/USDT",
    type: "SPOT · 1 мин. назад",
    profit: "58.6206%",
    goal: "Цель 4",
    date: "Дата входа 06.10.2022",
  },
];

export default function PastTransactions() {
  return (
    <MainContainer>
      <div>
        <Title id="deals">Прошедшие сделки</Title>
        <OnlineBox>
          <DotBox />
          <Online>Онлайн</Online>
        </OnlineBox>
      </div>
      <TransacrionWrapper>
        {trades.map((trade, index) => (
          <Card key={index}>
            <ImageBox>
              <img src={profitIcon} alt="Icon" width="123px" height="160px" />
            </ImageBox>
            <div>
              <Pair>{trade.pair}</Pair>
              <Type>{trade.type}</Type>
            </div>
            <div>
              <div>
                <ProfitText>Прибыль</ProfitText>
                <Profit>{trade.profit} ↑</Profit>
              </div>
              <GoalWrapper>
                <Goal>{trade.goal}</Goal>
                <Date>{trade.date}</Date>
              </GoalWrapper>
            </div>
          </Card>
        ))}
      </TransacrionWrapper>
    </MainContainer>
  );
}
