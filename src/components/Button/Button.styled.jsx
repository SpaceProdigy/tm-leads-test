import styled from "styled-components";

export const Button = styled.button`
  font-size: 16px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.tertiaryText};
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  white-space: nowrap;
  box-sizing: border-box;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  border: ${({ theme }) => `${theme.colors.buttonBackground}`} 2px solid;
  box-shadow: 0px 0px 4px #57e1ff;
  transition: background-color 0.4s ease, color 0.4s ease, text-shadow 0.4s ease;

  &:focus {
    outline: ${({ theme }) => `${theme.colors.buttonBackground}`} 2px solid;
  }

  ${({ $disableHover, theme }) =>
    !$disableHover &&
    `
    &:hover,
    &:focus {
      background-color: ${theme.colors.buttonHover};
      color: ${theme.colors.buttonBackground};
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  `}

  &:hover *,
  &:focus * {
    color: ${({ theme }) => theme.colors.buttonBackground};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
