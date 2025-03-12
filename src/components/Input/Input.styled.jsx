import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px;
  font-family: ${({ theme }) => theme.fonts.main};
  border-radius: 4px;
  font-size: clamp(14px, 2vw, 16px);
  color: ${({ theme }) => theme.colors.primaryText};
  background-color: #201a4f;
  outline: none;
`;
