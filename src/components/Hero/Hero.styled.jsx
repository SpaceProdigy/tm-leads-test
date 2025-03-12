import styled from "styled-components";
import { theme } from "../../styles/theme";

export const MainContainer = styled.div`
  padding: 40px 0;

  @media (min-width: 1024px) {
    padding: 160px 0 134px;
    display: flex;
    gap: 128px;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const BoxWrapper = styled.div`
  position: relative;

  @media (min-width: 1024px) {
    width: 469px;
    margin-right: 53px;
  }
`;

export const TitleWrapper = styled.div`
  position: relative;
  margin-top: 44px;

  @media (min-width: 1024px) {
    margin: 0;
    width: 630px;
  }
`;

export const BoxOne = styled.div`
  position: relative;
  width: 176px;
  height: 104px;
  border-radius: 4px;
  border: 8px dashed ${({ theme }) => theme.colors.purple};

  @media (min-width: 1024px) {
    width: 260px;
    height: 141px;
  }
`;

export const BoxTwo = styled.div`
  top: 30px;
  left: 124px;
  position: absolute;
  width: 176px;
  height: 104px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.purple};
  padding: 6px 10px;

  @media (min-width: 1024px) {
    top: 40px;
    width: 260px;
    height: 141px;
  }
`;
export const LineElementTop = styled.div`
  position: absolute;
  width: 23px;
  height: 1px;
  left: 55px;
  top: -16px;
  opacity: 0.7;
  background-color: #6a54ff;
  transform: rotate(45deg);
  @media (min-width: 1024px) {
    width: 30px;
    left: 140px;
    top: -20px;
  }
`;

export const LineElementBottom = styled.div`
  position: absolute;
  width: 23px;
  height: 1px;
  left: -25px;
  bottom: 16px;
  opacity: 0.7;
  background-color: #6a54ff;
  transform: rotate(45deg);
  @media (min-width: 1024px) {
    width: 30px;
    left: -35px;
    bottom: 20px;
  }
`;

export const BoxCover = styled.div`
  position: absolute;
  top: -7px;
  left: -7px;
  width: 174px;
  height: 102px;
  border-radius: 4px;
  padding: 6px 10px;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  @media (min-width: 1024px) {
    width: 258px;
    height: 139px;
  }
`;
export const Text = styled.p`
  font-weight: 500;
  font-size: 20px;

  color: ${({ theme }) => theme.colors.purple};
`;

export const Title = styled.p`
  font-weight: 600;
  line-height: clamp(44px, 5vw, 72px);
  letter-spacing: -0.04em;
  font-size: clamp(35px, 5vw, 60px);
  color: ${theme.colors.primaryText};
`;

export const InputWrapper = styled.div`
  position: relative;
  max-width: 400px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 24px;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px 125px 10px 10px;
  font-family: ${({ theme }) => theme.fonts.main};
  border-radius: 4px;
  font-size: clamp(14px, 2vw, 16px);
  color: ${({ theme }) => theme.colors.primaryText};
  background-color: #201a4f;
  outline: none;
`;

export const HelperText = styled.p`
  color: #ffffff30;
  margin-top: 12px;
`;

export const StartText = styled.p`
  margin-top: 12px;
  font-size: 16px;
  color: ${theme.colors.secondaryText};
`;
