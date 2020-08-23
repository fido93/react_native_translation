import React, { useEffect, useState } from "react";
import Home from "./screens/Home";
import i18n from "i18n-js";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import About from "./screens/About";

i18n.translations = {
  en: {
    welcome: "Hello",
    name: "Charlie",
    title: "Language translation change",
    title_about: "This About screen page",
  },
  jpn: {
    welcome: "こんにちは",
    title: "言語翻訳の変更",
    title_about: "このページについて",
  },
};

i18n.fallbacks = true;

const Stack = createStackNavigator();

export default function App() {
  const [lang, setLanguage] = useState("jpn");

  i18n.locale = lang;

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home">
            {(props) => (
              <Home
                langChecking={(languageChange) => {
                  // This is where callback function call from child component
                  setLanguage(languageChange);
                }}
                languageUI={lang}
                {...props}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="About">
            {(props) => <About languageUI={lang} {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
