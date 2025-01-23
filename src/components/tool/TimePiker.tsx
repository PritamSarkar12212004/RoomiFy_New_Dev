import formatToReadableTime from "@/src/function/IsoTimeConvator";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Color from "@/src/constant/Color";

const TimePiker = ({ title, action }: { title: string; action: any }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (time: any) => {
    action(formatToReadableTime(time));
    hideDatePicker();
  };

  return (
    <View className=" flex-row items-center justify-center ">
      <TouchableOpacity
        onPress={() => showDatePicker()}
        className="flex-row items-center justify-center gap-2"
      >
        <View>
          <MaterialIcons name="watch-later" size={24} color={Color.primary} />
        </View>
        <Text className="text-xl text-zinc-600">{title}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default TimePiker;
