import { motion } from "framer-motion";
import styled from "styled-components";

export const CrossWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  right: 9px;
  top: 9px;

  img {
    opacity: 1;
    transition: opacity 0.4s ease;
  }

  &:hover img {
    opacity: 0.5;
  }
`;

export const MainWrapper = styled(motion.div)`
  z-index: 10;
  width: 100%;
  height: 100%;
  max-width: 375px;
  position: absolute;
  right: 0;
  top: 0;
  background-color: ${({ theme }) => theme.colors.tertiaryBackground};
  display: flex;
  flex-direction: column;
  gap: 36px;
  box-shadow: -5px 0 10px rgba(0, 0, 0, 0.1);
  overflow: auto;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  margin-top: 84px;
  margin-left: 16px;
`;

export const ButtonBase = styled.button`
  font-size: 24px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.primaryText};
  text-transform: uppercase;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  white-space: nowrap;
  box-sizing: border-box;
  transition: color 0.4s ease;

  &:hover {
    color: ${({ theme }) => `${theme.colors.buttonBackground}`};
  }
`;

export const AuthButton = styled(ButtonBase)`
  width: 163.5px;
  font-size: 16px;
  padding: 16px 24px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  border: ${({ theme }) => `${theme.colors.buttonBackground}`} 2px solid;
  box-shadow: 0px 0px 4px #57e1ff;
  transition: background-color 0.4s ease, color 0.4s ease, text-shadow 0.4s ease;
  &:hover {
    background-color: ${({ theme }) => `${theme.colors.buttonHover}`};
    color: ${({ theme }) => `${theme.colors.buttonBackground}`};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const Button = styled(ButtonBase)`
  font-size: 24px;
`;

export const AuthButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 16px;
`;
