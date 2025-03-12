import React, { useEffect, useState } from "react";
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
import { useInView } from "react-intersection-observer";

const AnimatedNumber = ({ value, isPercent = false }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const fps = 60;
      const stepTime = duration / fps;
      const increment = value / (duration / stepTime);

      const timer = setInterval(() => {
        start += increment;
        setCount((prev) =>
          prev + increment <= value ? prev + increment : value
        );

        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <NumbersText ref={ref}>
      {Math.round(count).toLocaleString()}
      {isPercent && "%"}
    </NumbersText>
  );
};

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
              { text: "Торговой прибыли", numbers: 2756, isPercent: true },
              { text: "Фьючерсных и спотовых сделок", numbers: 67 },
              { text: "Прибыль подписчиков", numbers: 375000 },
            ].map(({ text, numbers, isPercent }, index) => (
              <Box key={index}>
                <Text>{text}</Text>
                <AnimatedNumber value={numbers} isPercent={isPercent} />
              </Box>
            ))}
          </Wrapper>
        </Container>
      }
    />
  );
}
