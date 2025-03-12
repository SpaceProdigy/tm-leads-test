import React from "react";
import {
  MainContainer,
  MainWrapper,
  RectangularElement,
} from "./SectionWithRegtangele.styled";

export default function SectionWithRegtangele({ children, style }) {
  return (
    <MainWrapper style={style}>
      <RectangularElement />
      <MainContainer>{children}</MainContainer>
    </MainWrapper>
  );
}
