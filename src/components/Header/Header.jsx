import { useState, useEffect, useRef } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import {
  Box,
  BurgerButton,
  ButtonWrapper,
  HeaderWrapper,
  LogoImage,
  NavigationText,
} from "./Header.styled";
import img from "/iconLogoTrade.png";
import burgerSvg from "/src/assets/burger.svg";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import ButtonComponent from "../Button/Button";

const buttonsArr = [
  { label: "Цифры", id: "figures" },
  { label: "Сделки онлайн", id: "deals" },
  { label: "О компании", id: "about" },
  { label: "Как начать", id: "start" },
  { label: "Тарифы", id: "pricing" },
  { label: "FAQ", id: "faq" },
];

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    }

    if (modalOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [modalOpen]);

  return (
    <HeaderWrapper>
      <LogoImage src={img} alt="Trade Logo" />

      <Box>
        {buttonsArr.map(({ label, id }, index) => (
          <Link key={index} to={id} smooth={true} duration={500}>
            <NavigationText tabIndex={0}>{label}</NavigationText>
          </Link>
        ))}
      </Box>

      <ButtonWrapper>
        <ButtonComponent
          text={"вход"}
          btStyle={{ padding: "0 24px", height: "42px" }}
        />
        <ButtonComponent
          text={"регистрация"}
          btStyle={{ padding: "0 24px", height: "42px" }}
        />
      </ButtonWrapper>

      <AnimatePresence>
        {!modalOpen && (
          <BurgerButton
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            onClick={() => setModalOpen(true)}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={burgerSvg}
              alt="Burger Icon"
              width={"32px"}
              height={"32px"}
            />
          </BurgerButton>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {modalOpen && (
          <BurgerMenu setModalOpen={setModalOpen} modalRef={modalRef} />
        )}
      </AnimatePresence>
    </HeaderWrapper>
  );
}
