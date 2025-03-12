import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Title = styled.h3`
  font-size: clamp(28px, 5vw, 44px);
  line-height: clamp(36px, 5vw, 56px);
  color: rgba(0, 0, 0);
  font-weight: 700;
  letter-spacing: -0.04em;
  text-transform: uppercase;
`;

export const TextContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.tertiaryText};
  opacity: 0.8;
`;
