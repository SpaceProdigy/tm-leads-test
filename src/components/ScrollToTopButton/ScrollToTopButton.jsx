import { useState, useEffect } from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

import upArrow from "/src/assets/selectIcon.svg";

const ScrollButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  transition: opacity 0.3s, visibility 0.3s;

  img {
    width: 24px;
    height: 24px;
    transform: rotate(180deg);
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollButton $isVisible={isVisible} onClick={() => scroll.scrollToTop()}>
      <img src={upArrow} alt="Scroll to top" />
    </ScrollButton>
  );
}
