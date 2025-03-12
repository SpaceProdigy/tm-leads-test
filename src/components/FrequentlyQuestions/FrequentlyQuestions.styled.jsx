import styled from "styled-components";
import { theme } from "../../styles/theme";

export const MainWraper = styled.div`
  margin-left: -16px;
  margin-right: -16px;
  width: calc(100% + 32px);
  padding: 54px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.secondaryBackground};
  @media (min-width: 1024px) {
    margin-left: -80px;
    margin-right: -80px;
    width: calc(100% + 160px);
    padding: 96px 0;
  }
`;

export const TitleBox = styled.div`
  text-align: center;
`;

export const Title = styled.p`
  font-size: clamp(28px, 5vw, 44px);
  line-height: clamp(36px, 5vw, 56px);
  color: ${theme.colors.tertiaryText};
  font-weight: 700;
  letter-spacing: -0.04em;
  text-transform: uppercase;
`;

export const AccordionContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  max-width: 413px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  @media (min-width: 1024px) {
    margin-top: 64px;
    max-width: 846px;
  }
`;

export const AccordionItem = styled.div`
  width: 100%;
  background: #eaeff0;
  border-radius: 4px;
  cursor: pointer;
  padding: 16px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const AccordionHeader = styled.div`
  font-weight: 500;
  font-size: clamp(20px, 5vw, 24px);
  line-height: clamp(28px, 5vw, 32px);
  letter-spacing: -0.04em;
  color: #030718;
  gap: 16px;
`;

export const AccordionContent = styled.div`
  max-height: ${({ $isOpen }) => ($isOpen ? "500px" : "0")};
  display: flex;
  margin-top: 12px;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  opacity: 0.8;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;
