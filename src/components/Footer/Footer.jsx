import React from "react";
import {
  BottomBox,
  Box,
  FooterWrapper,
  InfoText,
  NavigationText,
  Text,
  WrapperNavigation,
} from "./Footer.styled";
import logo from "/bigLogo.png";
import { Link } from "react-scroll";
import TryNow from "../TryNow/TryNow";

const menuItems = [
  { label: "Цифры", id: "figures" },
  { label: "Сделки онлайн", id: "deals" },
  { label: "О компании", id: "about" },
  { label: "Tradeblad это", id: "tradeblad" },
  { label: "Как начать", id: "start" },
  { label: "Тарифы", id: "pricing" },
  { label: "FAQ", id: "faq" },
];

export default function Footer() {
  return (
    <div>
      <TryNow
        textButton="зарегистрироваться"
        title={
          "Начните прямо сейчас с бесплатным 5–и дневным пробным периодом!"
        }
      />
      <FooterWrapper>
        <WrapperNavigation>
          <InfoText>Быстрая навигация</InfoText>
          <Box>
            {menuItems.map(({ label, id }, index) => (
              <Link key={index} to={id} smooth={true} duration={500}>
                <NavigationText tabIndex={0}>{label}</NavigationText>
              </Link>
            ))}
          </Box>
        </WrapperNavigation>

        <BottomBox>
          <img src={logo} width={"165px"} alt="Logo Trade Blade" />
          <Text>© 2022 TradeBlade. All rights reserved</Text>
        </BottomBox>
      </FooterWrapper>
    </div>
  );
}
