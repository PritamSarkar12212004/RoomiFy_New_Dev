import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import React from "react";
import RoomLikeButton from "../button/RoomLikeButton";
import Entypo from "@expo/vector-icons/Entypo";
import Color from "@/src/constant/Color";
import AllRoomData from "@/src/data/AllRoomData";
import { useRouter } from "expo-router";

const Allroom = () => {
  const router = useRouter();
  const renderItem = ({ item, index }) => (
    <View>
      {/* Room Item */}
      <TouchableOpacity
        onPress={() => router.push("/(show)")}
        activeOpacity={0.9}
        style={styles.card}
      >
        {/* Room Image */}
        <Image
          source={{ uri: item.uri }}
          style={styles.image}
          resizeMode="cover"
        />

        {/* Like Button */}
        <View style={styles.likeButton}>
          <RoomLikeButton />
        </View>

        {/* Room Details */}
        <View style={styles.details}>
          <View style={styles.rowBetween}>
            <Text style={styles.roomTitle}>{item.title}</Text>
            <Text style={styles.roomPrice}>{item.price}</Text>
          </View>

          <View style={styles.rowBetween}>
            <View style={styles.locationRow}>
              <Entypo name="pin" size={20} color="#888" />
              <Text style={styles.locationText}>{item.location}</Text>
            </View>
            <Text style={styles.roomType}>
              Type: <Text style={styles.boldText}>{item.type}</Text>
            </Text>
          </View>

          <Text style={styles.description}>{item.facility}</Text>
        </View>
      </TouchableOpacity>

     
    </View>
  );

  return (
    <FlatList
      data={AllRoomData}
      renderItem={renderItem}
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      initialNumToRender={4} // Limit initial renders
      maxToRenderPerBatch={4} // Limit items rendered per batch
      windowSize={4} // Limit the window size for rendering
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 3,
    marginBottom: 20,
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, // For Android shadow
  },
  image: {
    width: "100%",
    height: 200,
  },
  likeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  details: {
    padding: 15,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  roomTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  roomPrice: {
    fontSize: 18,
    fontWeight: "600",
    color: Color.text || "#007BFF",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 14,
    color: "#555",
    marginLeft: 5,
  },
  roomType: {
    fontSize: 14,
    color: "#555",
  },
  boldText: {
    fontWeight: "bold",
    color: Color.text || "#007BFF",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
    lineHeight: 20,
  },

  separatorText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default Allroom;
