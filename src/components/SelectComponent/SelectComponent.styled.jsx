import styled from "styled-components";
import { theme } from "../../styles/theme";
import { motion } from "framer-motion";

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
`;

export const SelectedOption = styled.div`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  background: #ffffff33;
  color: ${theme.colors.primaryText};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  gap: 4px;
  outline: none;

  &:focus {
    background-color: ${theme.colors.tertiaryText}50;
  }
`;

export const Dropdown = styled(motion.ul)`
  position: absolute;
  width: 100%;
  background: ${theme.colors.purple};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-top: 4px;
  list-style: none;
  padding: 0;
  z-index: 10;
`;

export const Option = styled.li`
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
  outline: none;

  &:hover,
  &:focus {
    background: #ffffff33;
  }
`;
