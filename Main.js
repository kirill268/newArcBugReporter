import React from 'react';
import App from './App';
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

const Main = () => (
  <NavigationContainer>
    <PaperProvider>
      <App />
    </PaperProvider>
  </NavigationContainer>
)

export default Main;
