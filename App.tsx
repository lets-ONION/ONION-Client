import { ThemeProvider } from 'styled-components';
import { theme } from './src/style/theme';
// import { GlobalStyle } from './src/style/global';
import Main from "./src/screens/Main";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main/>
    </ThemeProvider>
  );
};