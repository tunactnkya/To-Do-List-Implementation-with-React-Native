import React, { useState } from "react";
import { Text, View, SafeAreaView, TextInput, Button, TouchableOpacity, FlatList } from "react-native";
import { appStyles as styles } from './styles'


function App() {

  const [text, setText] = useState();
  const [tasks, setTasks] = useState(["Learn Angular", "Learn Vue.js"]);

  const handleAddTaskPress = () => {
    setTasks([...tasks, text]);
    setText("");
  }


  const handleDeleteTaskPress = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks)

  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1773BB' }} >
      <View style={styles.container} >
        <Text style={styles.title} >My Tasks ({text}) </Text>
        <Text style={styles.subtitle} >Enter your tasks in the text box below and hit the "Add" button</Text>

        <TextInput
          placeholder="Enter your task here"
          value={text}
          style={styles.input}
          onChangeText={setText}
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={handleAddTaskPress} >
          <Text style={styles.buttonText} >Add Task</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <FlatList
          data={tasks}
          renderItem={({ item, index }) => (
            <View style={styles.taskContainer} >
              <Text style={styles.taskText} >{item}</Text>
              <TouchableOpacity style={styles.taskDelete} onPress={() => handleDeleteTaskPress(index)} >
                <Text style={styles.taskDeleteText} >X</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item + Date.now() + Math.random()}
        />

      </View>


    </SafeAreaView>
  )
}


export default App;