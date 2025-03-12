import { motion } from "framer-motion";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HeaderWrapper = styled.div`
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1024px) {
    padding: 0 80px;
  }
`;

export const LogoImage = styled.img`
  height: 52px;

  @media (min-width: 1024px) {
    height: 65px;
  }
`;

export const BurgerButton = styled(motion.div)`
  cursor: pointer;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 32px;
  @media (max-width: 1220px) {
    display: none;
  }
`;

export const NavigationText = styled.p`
  cursor: pointer;
  font-weight: 500;
  line-height: 17px;
  text-transform: uppercase;
  color: #ffffff;
  transition: background-color 0.4s ease, color 0.4s ease, text-shadow 0.4s ease;
  opacity: 0.67;
  &:hover,
  &:focus {
    color: ${theme.colors.buttonBackground};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
  @media (max-width: 1024px) {
    display: none;
  }
`;
