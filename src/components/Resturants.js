import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import ResturantDetail from "./ResturantDetail";

function Resturants({ type, result }) {
  if (!result.length) {
    return null;
  }
  return (
    <View>
      <Text style={styles.Header}>{type} </Text>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={result}
          ItemSeparatorComponent={() => <View style={{ margin: 20 }} />}
          keyExtractor={(result) => result.id}
          renderItem={({ item }) => {
            return <ResturantDetail item={item} />;
          }}
        />
        <View
          style={{
            borderBottomColor: "grey",
            borderBottomWidth: 1,
            marginBottom: 5,
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Header: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
});
export default Resturants;
