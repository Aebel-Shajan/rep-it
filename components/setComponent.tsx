import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";

interface setComponentProps {
  data: setType;
  setData: CallableFunction;
}

export default function SetComponent({ data, setData }: setComponentProps) {
  const [weight, setWeight] = useState<string>(data.weight);
  const [reps, setReps] = useState<string>(data.reps);
  const [isComplete, setIsComplete] = useState<Boolean>(data.isComplete);

  useEffect(() => {
    setData({
      weight: weight,
      reps: reps,
      isComplete: isComplete,
    });
  }, [weight, reps]);

  const containerStyle = StyleSheet.compose(
    styles.container,
    isComplete ? successStyle.container : null,
  );

  const inputStyle = StyleSheet.compose(
    styles.input,
    isComplete ? successStyle.input : null,
  );

  const doneStyle = StyleSheet.compose(
    styles.done,
    isComplete ? successStyle.done : null,
  );

  return (
    <View style={containerStyle}>
      <TextInput
        style={inputStyle}
        onChangeText={(value) => setWeight(value)}
        value={weight}
        selectTextOnFocus={true}
      />
      <TextInput
        style={inputStyle}
        onChangeText={(value) => setReps(value)}
        value={reps}
        selectTextOnFocus={true}
      />
      <Pressable onPress={() => setIsComplete(!isComplete)} style={doneStyle}>
        <Text>
          <Feather
            name="check"
            size={24}
            color={isComplete ? "white" : "black"}
          />
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
    columnGap: 10,
  },
  input: {
    width: 200,
    padding: 10,
    textAlign: "center",
    verticalAlign: "middle",
    backgroundColor: "#e9ebe9",
    color: "#abacac",
    borderRadius: 10,
  },
  done: {
    padding: 5,
    backgroundColor: "#e9ebe9",
    color: "#abacac",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

const successStyle = StyleSheet.create({
  container: {
    backgroundColor: "#e9f9ef",
    color: "#000",
  },
  input: {
    backgroundColor: "#e9f9ef",
    color: "#000",
  },
  done: {
    backgroundColor: "#29ce6d",
  },
});
