import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function ResturantDetail({ item }) {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Details", { id: item.id });
        }}
      >
        <Image
          style={{ width: 250, height: 120, marginBottom: 10, borderRadius: 4 }}
          source={{ uri: item.image_url }}
        />
      </TouchableOpacity>

      <Text style={{ fontWeight: "bold", marginBottom: 5 }}>{item.name}</Text>
      <Text style={{ fontWeight: "500", color: "grey", marginBottom: 5 }}>
        {item.rating} Stars, {item.review_count} Reviews
      </Text>
    </View>
  );
}

export default ResturantDetail;
