import { ThemeProvider } from 'styled-components';
import { theme } from './src/style/theme';
import { GlobalStyle } from './src/style/global';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
};