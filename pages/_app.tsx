import "../styles/globals.css";
import type { AppProps } from "next/app";
// Mui packages
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
// Third party packages
import { CacheProvider, EmotionCache } from "@emotion/react";
import createCache from "@emotion/cache";
import { SnackbarProvider } from "notistack";
// Custom packages
import theme from "themes";

const cache = createCache({ key: "css" });

interface CareerChatRecruitersProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: CareerChatRecruitersProps) {
  /** props */
  const { Component, emotionCache = cache, pageProps } = props;
  return (
    <CacheProvider value={cache}>
      {/* Material UI theme injection */}
      <ThemeProvider theme={theme}>
        {/* CssBaseline == Normalize.css */}
        <CssBaseline />
        <SnackbarProvider
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          autoHideDuration={2000}
        >
          <Component {...pageProps} />
        </SnackbarProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
