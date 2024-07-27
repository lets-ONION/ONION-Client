import { ThemeProvider } from 'styled-components';
import { theme } from './src/style/theme';
// import { GlobalStyle } from './src/style/global';
import Main from "./src/screens/Main";
import AuthStackNav from './src/navigator/AuthStackNav';
import {NavigationContainer} from '@react-navigation/native';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthStackNav/>
      </NavigationContainer>

    </ThemeProvider>
  );
};