import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function SearchBar({ search, onChange, onSubmit }) {
  return (
    <View style={styles.SearchInput}>
      <AntDesign name="search1" size={24} color="black" />
      <TextInput
        style={styles.Input}
        placeholder="search"
        value={search}
        onEndEditing={onSubmit}
        onChangeText={(newText) => onChange(newText)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  SearchInput: {
    backgroundColor: "rgb(230,230,230)",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    padding: 10,
    marginBottom:20
  },
  Input: { height: 50, margin: 10, color: "black", fontSize: 18, flex: 1 },
});

export default SearchBar;
