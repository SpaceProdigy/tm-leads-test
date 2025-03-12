import { Link } from "react-scroll";
import {
  AuthButton,
  AuthButtonsWrapper,
  Button,
  ButtonsWrapper,
  CrossWrapper,
  MainWrapper,
} from "./BurgerMenu.styled";

import cross from "/src/assets/crossIcon.svg";

const buttonsArr = [
  { label: "Цифры", id: "figures" },
  { label: "Сделки онлайн", id: "deals" },
  { label: "О компании", id: "about" },
  { label: "Как начать", id: "start" },
  { label: "Тарифы", id: "pricing" },
  { label: "FAQ", id: "faq" },
];

const menuVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut", delay: 0.2 },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

export default function BurgerMenu({ setModalOpen, modalRef }) {
  return (
    <MainWrapper
      ref={modalRef}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
    >
      <CrossWrapper>
        <img
          onClick={() => setModalOpen(false)}
          src={cross}
          alt="Cross Icon"
          width="32px"
          height="32px"
        />
      </CrossWrapper>

      <ButtonsWrapper>
        {buttonsArr.map((item, index) => (
          <Link
            key={index}
            to={item.id}
            smooth={true}
            duration={500}
            onClick={() => setModalOpen(false)}
          >
            <Button key={index}>{item.label}</Button>
          </Link>
        ))}
      </ButtonsWrapper>
      <AuthButtonsWrapper>
        <AuthButton>Регистрация</AuthButton>
        <AuthButton>Войти</AuthButton>
      </AuthButtonsWrapper>
    </MainWrapper>
  );
}
