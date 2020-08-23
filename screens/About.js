import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import i18n from "i18n-js";

function About({ navigation, languageUI }) {
  const [lang, setLanguage] = useState(languageUI);

  if (languageUI === "jpn") {
    useEffect(() => {
      setLanguage("jpn");
      i18n.locale = lang;
    }, [setLanguage]);

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>{i18n.t("welcome")}</Text>
      </View>
    );
  } else {
    useEffect(() => {
      setLanguage("en");
      i18n.locale = lang;
    }, [setLanguage]);

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>{i18n.t("title_about")}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default About;
