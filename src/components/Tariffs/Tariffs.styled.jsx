import styled from "styled-components";
import { theme } from "../../styles/theme";

export const MainContainer = styled.div`
  padding: 181px 0 64px;
`;
export const Title = styled.p`
  font-weight: 700;
  line-height: clamp(36px, 5vw, 44px);
  letter-spacing: -0.04em;
  font-size: clamp(35px, 5vw, 56px);
  text-transform: uppercase;
  color: ${theme.colors.primaryText};
`;

export const CenterButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
  max-width: 413px;
  display: flex;
  flex-shrink: 0;
  background-color: ${theme.colors.purple}80;
  padding: 4px;
  border-radius: 4px;
`;

export const TariffWrapper = styled.div`
  margin-top: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const TariffBox = styled.div`
  width: 100%;
  padding: 16px;
  max-width: 413px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: ${theme.colors.purple} 1px solid;
  border-radius: 8px;
`;

export const Tariff = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.04em;
  color: ${theme.colors.primaryText};
  text-transform: uppercase;
`;

export const TextWraper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: baseline;
  padding: 8px;
  border-bottom: 1px dashed #ffffff40;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.primaryText};
`;

export const PriceBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;

export const PriceWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 4px;
`;

export const Discount = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: #35ff9e;
`;

export const Prise = styled.p`
  font-weight: 500;
  font-size: 35px;
  line-height: 40px;
  letter-spacing: -0.04em;
  color: ${theme.colors.primaryText};
`;

export const ExstraTextButton = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: #030718;
  opacity: 0.56;
  transition: background-color 0.4s ease, color 0.4s ease, text-shadow 0.4s ease;
`;
