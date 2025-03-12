import React from "react";
import {
  Box,
  Container,
  Date,
  NumbersText,
  Text,
  Title,
  TitleWrapper,
  Wrapper,
} from "./Numbers.styled";
import SectionWithRegtangele from "../SectionWithRegtangele/SectionWithRegtangele";

export default function Numbers() {
  return (
    <SectionWithRegtangele
      children={
        <Container>
          <TitleWrapper id="figures">
            <Title>Цифры</Title>
            <Date>Cентябрь 2022</Date>
          </TitleWrapper>
          <Wrapper>
            {[
              { text: "Торговой прибыли", numbers: "2756%" },
              { text: "фьючерсных и спотовых сделок", numbers: "67" },
              { text: "прибыль подписчиков", numbers: "375000" },
            ].map(({ text, numbers }, index) => (
              <Box key={index}>
                <Text>{text}</Text>
                <NumbersText>{numbers}</NumbersText>
              </Box>
            ))}
          </Wrapper>
        </Container>
      }
    />
  );
}
