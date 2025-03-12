import styled from "styled-components";
import { theme } from "../../styles/theme";
export const FooterWrapper = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    gap: 50px;
  }
`;

export const WrapperNavigation = styled.div`
  padding: 40px 26px 57px 0;
  display: flex;
  justify-content: space-between;
  @media (min-width: 1024px) {
    padding: 40px 0;
    flex-direction: column;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const InfoText = styled.p`
  width: 107px;
  line-height: 20px;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.4;
`;

export const NavigationText = styled.p`
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.67;
  transition: background-color 0.4s ease, color 0.4s ease, text-shadow 0.4s ease;
  white-space: nowrap;
  &:hover,
  &:focus {
    color: ${theme.colors.buttonBackground};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const BottomBox = styled.div`
  padding: 20px 0;
  height: 226px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: rgba(255, 255, 255, 0.3) 1px solid;
  margin-left: -16px;
  margin-right: -16px;
  padding: 20px 16px;

  @media (min-width: 1024px) {
    width: 100%;
    padding: 40px 0 0 10px;
    margin-left: 0;
    margin-right: 0;
    align-items: flex-end;
    border-top: 0;
    border-left: rgba(255, 255, 255, 0.3) 1px solid;
  }
`;

export const Text = styled.p`
  line-height: 20px;
  color: #ffffff;
  opacity: 0.5;
`;
