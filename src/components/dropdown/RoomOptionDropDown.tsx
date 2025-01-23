import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import Color from "@/src/constant/Color";

const RoomOptionDropDown = ({ title, option, action }: any) => {
  const selectAction = (item: any) => {
    action(item);
  };
  return (
    <View>
      <SelectDropdown
        data={option}
        onSelect={(selectedItem) => {
          selectAction(selectedItem);
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              {selectedItem && (
                <Text className="font-bold text-lg text-zinc-800">{title}</Text>
              )}
              <Text style={styles.dropdownButtonTxtStyle}>
                {(selectedItem && selectedItem.title) || title}
              </Text>
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View
              style={{
                ...styles.dropdownItemStyle,
                ...(isSelected && { backgroundColor: "#D2D9DF" }),
              }}
            >
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: "100%",
    height: 50,
    backgroundColor: "#E9ECEF",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: Color.text,
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
export default RoomOptionDropDown;
