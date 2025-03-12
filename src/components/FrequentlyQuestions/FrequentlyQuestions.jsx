import React, { useState } from "react";
import {
  AccordionContainer,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  MainWraper,
  Title,
  TitleBox,
  TitleWrapper,
} from "./FrequentlyQuestions.styled";
import darkIcon from "/src/assets/accordionDarkIcon.svg";
import whiteIcon from "/src/assets/selectIcon.svg";
import { theme } from "../../styles/theme";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

const FrequentlyQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Что такое TradeBlade",
      content: [
        `Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance.`,
        `Платформа TradeBlade предлагает пользователям широкий спектр функционала и преимуществ для торговли на криптовалютных рынках, обеспечивая высокий уровень безопасности и эффективности.`,
        `Особенности включают более высокую скорость синхронизации API, что дает трейдерам возможность работать с данными в реальном времени и быстро реагировать на изменения на рынке.`,
        `Платформа также позволяет создать учетную запись Binance через TradeBlade всего за один клик, значительно упрощая процесс регистрации и начала торговли.`,
        `Мы стремимся предоставить всем нашим пользователям самые современные инструменты и надежную поддержку на каждом шаге их пути в мире криптовалют.`,
      ],
    },
    {
      title: "Что TradeBlade предлагает инвесторам",
      content: [
        `TradeBlade предлагает инвесторам уникальные возможности для получения прибыли в сфере криптовалют.`,
        `Платформа предоставляет доступ к инвестиционным стратегиям, разработанным с учетом последних тенденций на рынке, что позволяет пользователям минимизировать риски и максимизировать прибыль.`,
        `Для инвесторов TradeBlade предлагает аналитические инструменты, такие как прогнозы трендов, торговые сигналы и подробные отчеты о состоянии рынка, чтобы помочь принимать обоснованные решения.`,
        `Также платформа предлагает специальные условия для долгосрочных инвесторов, включая низкие комиссии и персонализированное обслуживание, что делает TradeBlade идеальным выбором для тех, кто хочет войти в криптовалютный рынок с минимальными усилиями и максимальной отдачей.`,
      ],
    },
    {
      title: "Должен ли я перевести свои средства на TradeBlade",
      content: [
        `Перевод средств на платформу TradeBlade не является обязательным для начала использования некоторых функций платформы.`,
        `Однако для полной интеграции с функционалом и для получения максимальной выгоды от всех сервисов, включая торговлю и инвестиционные стратегии, пользователи могут перевести средства на TradeBlade.`,
        `Важно отметить, что TradeBlade обеспечивает высокий уровень безопасности, что позволяет защитить средства от внешних угроз.`,
        `Все переводы осуществляются через защищенные каналы, и средства хранятся на защищенных кошельках, что гарантирует их безопасность.`,
        `Платформа также предоставляет множество способов пополнения и вывода средств, включая работу с Binance и другими популярными криптовалютными биржами, что дает пользователям гибкость в управлении своими активами.`,
      ],
    },
  ];

  return (
    <MainWraper id="faq">
      <TitleBox>
        <Title>часто задаваемые вопросы</Title>
      </TitleBox>

      <AccordionContainer>
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            style={{
              background: openIndex === index ? theme.colors.purple : "#eaeff0",
            }}
          >
            <TitleWrapper onClick={() => toggleAccordion(index)}>
              <AccordionHeader
                style={{
                  color:
                    openIndex === index
                      ? theme.colors.primaryText
                      : theme.colors.tertiaryText,
                }}
              >
                {item.title}
              </AccordionHeader>

              {openIndex === index ? (
                <img
                  src={whiteIcon}
                  alt="Icon"
                  width={"24px"}
                  height={"24px"}
                />
              ) : (
                <img src={darkIcon} alt="Icon" width={"24px"} height={"24px"} />
              )}
            </TitleWrapper>

            <motion.div
              initial={{ opacity: 0, maxHeight: 0 }}
              animate={{
                opacity: openIndex === index ? 1 : 0,
                maxHeight: openIndex === index ? "500px" : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <AccordionContent $isOpen={openIndex === index}>
                {item.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </AccordionContent>
            </motion.div>
          </AccordionItem>
        ))}
      </AccordionContainer>
    </MainWraper>
  );
};

export default FrequentlyQuestions;
