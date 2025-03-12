import styled from "styled-components";
import { theme } from "../../styles/theme";

export const MainContainer = styled.div`
  padding: 48px 0;
`;
export const Online = styled.p`
  line-height: 20px;
  letter-spacing: -0.04em;

  color: ${theme.colors.onlineColor};
`;

export const DotBox = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50px;
  background-color: ${theme.colors.onlineColor};
`;

export const OnlineBox = styled.div`
  align-items: center;
  display: flex;
  gap: 4px;
  margin-top: 2px;
`;

export const Title = styled.p`
  font-weight: 700;
  line-height: clamp(36px, 5vw, 56px);
  letter-spacing: -0.04em;
  font-size: clamp(28px, 5vw, 44px);
  color: ${theme.colors.primaryText};
  text-transform: uppercase;
`;

export const TransacrionWrapper = styled.div`
  display: flex;
  gap: 8px;
  padding: 24px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    margin: 40px;
    background: #434f70;
    opacity: 0.4;
    border-radius: 56px;
  }

  &::-webkit-scrollbar-thumb {
    background: #6073a1;
    border-radius: 56px;
  }
`;

export const Card = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: 299px;
  height: 208px;
  background: ${theme.colors.purple};
  padding: 16px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &::after {
    content: "";
    position: absolute;
    top: -1px;
    right: -1px;
    width: 40px;
    height: 40px;
    background: ${theme.colors.primaryBackground};
    clip-path: polygon(100% 0, 0 0, 100% 100%);
  }
`;

export const ImageBox = styled.h3`
  position: absolute;
  top: 8px;
  right: 0;
`;

export const Pair = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;

  letter-spacing: -0.04em;
  text-transform: uppercase;

  color: ${theme.colors.primaryText};
`;

export const Type = styled.p`
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${theme.colors.primaryText};
  opacity: 0.4;
`;

export const ProfitText = styled.p`
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: ${theme.colors.primaryText};
  opacity: 0.7;
`;

export const Profit = styled.p`
  margin-top: 2px;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #35ff9e;
`;

export const GoalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 9px;
`;

export const Goal = styled.p`
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${theme.colors.primaryText};
  opacity: 0.7;
`;

export const Date = styled.p`
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${theme.colors.primaryText};
  opacity: 0.4;
`;
