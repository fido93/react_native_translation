import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import i18n from "i18n-js";

function Home({ navigation, langChecking, languageUI }) {
  const [lang, setLanguage] = useState(languageUI);

  if (languageUI === "jpn") {
    useEffect(() => {
      setLanguage("jpn");
      i18n.locale = lang;
    }, [setLanguage]);

    return (
      <View style={styles.container}>
        <Text style={styles.mainTitle}>{i18n.t("title")}</Text>
        <View style={styles.subContainer}>
          <View style={styles.block}>
            <Text style={styles.title}>
              {i18n.t("welcome")} {i18n.t("name")}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 100,
            paddingHorizontal: 20,
            backgroundColor: "orange",
            paddingVertical: 10,
            borderRadius: 5,
            marginTop: 20,
          }}
          onPress={() => {
            const star = "en";
            langChecking(star);
          }}
        >
          <Text>Press me in english</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 100,
            paddingHorizontal: 20,
            backgroundColor: "orange",
            paddingVertical: 10,
            borderRadius: 5,
            marginTop: 20,
          }}
          onPress={() => {
            const star = "jpn";
            langChecking(star);
          }}
        >
          <Text>Press me in japan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "100%",
            paddingHorizontal: 20,
            backgroundColor: "purple",
            paddingVertical: 10,
            borderRadius: 5,
            marginTop: 20,
          }}
          onPress={() => navigation.navigate("About")}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>
            Go to about page
          </Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    useEffect(() => {
      setLanguage("en");
      i18n.locale = lang;
    }, [setLanguage]);

    return (
      <View style={styles.container}>
        <Text style={styles.mainTitle}>{i18n.t("title")}</Text>
        <View style={styles.subContainer}>
          <View style={styles.block}>
            <Text style={styles.title}>
              {i18n.t("welcome")} {i18n.t("name")}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 100,
            paddingHorizontal: 20,
            backgroundColor: "orange",
            paddingVertical: 10,
            borderRadius: 5,
            marginTop: 20,
          }}
          onPress={() => {
            const star = "en";
            langChecking(star);
          }}
        >
          <Text>Press me in english</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 100,
            paddingHorizontal: 20,
            backgroundColor: "orange",
            paddingVertical: 10,
            borderRadius: 5,
            marginTop: 20,
          }}
          onPress={() => {
            const star = "jpn";
            langChecking(star);
          }}
        >
          <Text>Press me in japan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "100%",
            paddingHorizontal: 20,
            backgroundColor: "purple",
            paddingVertical: 10,
            borderRadius: 5,
            marginTop: 20,
          }}
          onPress={() => navigation.navigate("About")}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>
            Go to about page
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    padding: 24,
  },
  subContainer: {
    flexDirection: "row",
  },
  mainTitle: {
    color: "#3b5998",
    fontSize: 30,
    marginBottom: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  buttonView: {
    backgroundColor: "#3b5998",
    padding: 10,
  },
  block: {
    width: 230,
  },
  textStyle: {
    marginTop: 10,
  },
  buttontext: {
    color: "#fff",
  },
  dropDownView: {
    backgroundColor: "#8b9dc3",
    padding: 10,
  },
  dropDownText: {
    paddingTop: 2,
    color: "#fff",
  },
});

export default Home;
