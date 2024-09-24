import { useState } from "react";
import {
  Button,
  FlatList,
  ListRenderItem,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SetComponent from "./components/setComponent";

export default function App() {
  const [tasks, setTasks] = useState<setType[]>([]);

  const addTask = () => {
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        weight: "0",
        reps: "1",
        isComplete: false,
      },
    ]);
  };

  const renderSetComponent: ListRenderItem<setType> = ({ item }) => {
    const setData = (newData: setType) => {
      const newTasks = [...tasks];
      const indexToChange = newTasks.findIndex((item) => item.id === item.id);
      newTasks[indexToChange] = newData;
      setTasks(newTasks);
    };

    return <SetComponent data={item} setData={setData} key={item.id} />;
  };

  // const deleteTask = (id: string) => {
  //   setTasks(tasks.filter((task) => task.id !== id));
  // };

  return (
    <View style={styles.appContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Rep-It</Text>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>kg</Text>
          <Text style={styles.header}>reps</Text>
          <Text style={styles.headerLast}></Text>
        </View>
        <FlatList
          data={tasks}
          renderItem={renderSetComponent}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
        <Pressable onPress={addTask}>
          <Text style={styles.button}>Add Set</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    maxWidth: 500,
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
    columnGap: 10,
  },
  header: {
    width: 200,
    padding: 10,
    textAlign: "center",
    verticalAlign: "middle",
    color: "#abacac",
    fontWeight: "bold",
  },
  headerLast: {
    flexGrow: 1 / 3,
  },
  list: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    height: 50,
  },
  inputContainer: {
    justifyContent: "center",
    color: "#54a6e5",
  },
  button: {
    padding: 20,
    color: "#54a6e5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  setList: {
    flex: 1,
    flexDirection: "column",
    rowGap: 10,
  },
});
