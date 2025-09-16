import React from "react";
import { View, Text, StyleSheet} from "react-native";

export default function InfobContainer() {
  return (
    <View style={styles.infob_container}>
      <Text style={styles.info_bank}>Calculator</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  infob_container: {
    backgroundColor: "#76539e",
    padding: 7,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 2, height: 4 },
    elevation: 5,
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 0,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#7f8c8d",
  },
  info_bank: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#fff",
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },
});