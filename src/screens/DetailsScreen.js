import { React, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import yelp from "../Api/yelp";

function DetailsScreen({ navigation, route }) {
  const [result, setResult] = useState({});
  let { id } = route.params;
  const getResult = async () => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (err) {}
  };
  useEffect(() => {
    getResult();
  }, []);
  return (
    <View style={{ alignSelf: "center" }}>
      <Text
        style={{
          alignSelf: "center",
          margin: 10,
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        {result.name}
      </Text>
      <Text
        style={{
          alignSelf: "center",
          margin: 10,
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        Images
      </Text>
      <View>
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <FlatList
            data={result.photos}
            keyExtractor={(i) => result.photos.indexOf(i)}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ flex: 1, flexDirection: "column", margin: 1 }}
              >
                <Image
                  style={{ width: 200, height: 120, margin: 10 }}
                  source={{ uri: item }}
                />
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    </View>
  );
}

export default DetailsScreen;
