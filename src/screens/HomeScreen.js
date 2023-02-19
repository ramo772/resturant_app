import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import Resturants from "../components/Resturants";
import SearchBar from "./../components/SearchBar";
import useResults from "../hooks/useResults";

function HomeScreen() {
  const [search, setSearch] = useState("");
  const [data, result, errorMessage] = useResults();
  function filteredResults(price) {
    return result.filter((i) => i.price === price);
  }
  return (
    <View style={{ margin: 20, flex: 1 }}>
      <SearchBar
        input={search}
        onChange={setSearch}
        onSubmit={() => data(search)}
      />
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <ScrollView>
          <Resturants type="Cost Effictive" result={filteredResults("$")} />
          <Resturants type="Bit Pricer" result={filteredResults("$$")} />
          <Resturants type="Bit Spender" result={filteredResults("$$$")} />
        </ScrollView>
      )}

      {/* <Button
        title="De"
        onPress={() => {
          navigation.navigate("Details");`
        }}
      /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  SearchInput: {
    backgroundColor: "rgb(230,230,230)",
    alignSelf: "stretch",
    margin: 20,
    height: 50,
  },
});
export default HomeScreen;
