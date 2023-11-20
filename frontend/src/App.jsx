import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import Header1 from "./components/1-header/Header1";
import Header2 from "./components/1-header/Header2";
import Header3 from "./components/1-header/Header3";
import Main from "./components/3-main/Main";
import Footer from "./components/4-footer/Footer";
import ScrollToTop from "./components/scroll/ScrollToTop";
import Hero from "./components/2-hero/Hero";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header1 />
          <Header2 />
          <Header3 />
          <Box bgcolor={theme.palette.bg.main}>
            <Hero />
            <Main />
          </Box>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
