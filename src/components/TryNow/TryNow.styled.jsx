import styled from "styled-components";
import { theme } from "../../styles/theme";

export const MainContainer = styled.div`
  padding: 16px;
  margin-left: -16px;
  margin-right: -16px;
  background-color: ${theme.colors.purple};

  @media (min-width: 1024px) {
    margin-left: -80px;
    margin-right: -80px;
    display: flex;
    align-items: center;
    padding: 40px 80px;
    justify-content: space-between;
  }
`;

export const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    height: 60px;
    background: #4a3bb3;
    padding: 4px;
    border-radius: 4px;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.04em;
  color: ${theme.colors.primaryText};
  @media (min-width: 1024px) {
    max-width: 350px;
  }
`;
