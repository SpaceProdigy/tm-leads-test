import styled from "styled-components";
import { theme } from "../../styles/theme";

export const MainWrapper = styled.div`
  position: relative;
  width: calc(100% + 32px);
  margin-left: -16px;
  margin-right: -16px;
  padding: 24px 16px 48px;
  background-color: ${theme.colors.secondaryBackground};
  @media (min-width: 1024px) {
    margin-left: -80px;
    margin-right: -80px;
    padding: 60px 80px;
    width: calc(100% + 160px);
  }
`;

export const MainContainer = styled.div`
  z-index: 5;
`;
export const RectangularElement = styled.div`
  position: absolute;
  width: 326px;
  height: 82px;
  left: 0px;
  top: -24px;

  background: #fff;

  z-index: -1;
  border-top-right-radius: 10px;

  clip-path: polygon(0 0, 100% 0, 70% 0, 100% 100%, 0 100%);
`;
