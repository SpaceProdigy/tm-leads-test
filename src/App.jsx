import Header from "./components/Header/Header";
import { ThemeProvider } from "styled-components";

import { theme } from "./styles/theme";
import GlobalStyle from "./styles/globalStyles";
import Hero from "./components/Hero/Hero";
import Numbers from "./components/Numbers/Numbers";
import PastTransactions from "./components/PastTransactions/PastTransactions";
import AboutCompany from "./components/AboutCompany/AboutCompany";
import TryNow from "./components/TryNow/TryNow";

import Tariffs from "./components/Tariffs/Tariffs";
import Notify from "./components/Notify/Notify";
import FrequentlyQuestions from "./components/FrequentlyQuestions/FrequentlyQuestions";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import { Container } from "./App.styled";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Notify />
        <Header />
        <Container>
          <Hero />
          <Numbers />
          <PastTransactions />
          <AboutCompany />
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-93px",
              }}
            >
              <TryNow
                textButton="Попробовать"
                title="Попробуйте сейчас и получите
5 дней бесплатного пользования"
              />
            </div>
          </div>
          <Tariffs />
          <FrequentlyQuestions />

          <Footer />
          <ScrollToTopButton />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
