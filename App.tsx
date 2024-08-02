import { StyleSheet } from "react-native";
import React, { useState } from "react";
import useToken from "./src/hooks/useToken";
import MainTab from "./src/screens/MainTab";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/style/theme';

const App = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [token] = useToken();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <MainTab />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 100,
  },
});
