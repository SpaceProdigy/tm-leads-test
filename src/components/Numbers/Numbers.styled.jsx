import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  @media (min-width: 1024px) {
    display: flex;

    justify-content: space-between;
  }
`;

export const TitleWrapper = styled.div``;

export const Title = styled.p`
  font-size: clamp(28px, 5vw, 44px);
  line-height: clamp(36px, 5vw, 56px);
  color: rgba(0, 0, 0);
  font-weight: 700;
  letter-spacing: -0.04em;
  text-transform: uppercase;
`;

export const Date = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.5);
  letter-spacing: -0.04em;
`;

export const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  @media (min-width: 630px) {
    gap: 40px;
    margin-top: 0;
  }
`;

export const Box = styled.div`
  max-width: 130px;
  @media (min-width: 630px) {
    max-width: none;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.8);
  letter-spacing: -0.04em;
  text-transform: uppercase;
`;

export const NumbersText = styled.p`
  margin-top: 4px;
  font-weight: 500;
  font-size: clamp(35px, 5vw, 60px);
  line-height: 110%;
  color: ${theme.colors.purple};
  text-transform: uppercase;
  letter-spacing: -0.02em;

  @media (min-width: 630px) {
    margin-top: 8px;
  }
`;
