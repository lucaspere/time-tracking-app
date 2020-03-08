import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import uuidv4 from 'uuid/v4';
import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';

const App = () => {

  const [timers, setTimers] = useState([
    {
      id: uuidv4(),
      title: "Estudo de funções",
      project: "Curso de matemática",
      elapsed: 5456099,
      isRunning: true
    },
    {
      id: uuidv4(),
      title: "Tempo de mergulho",
      project: "Treino de natação",
      elapsed: 1273998,
      isRunning: false
    },
  ])
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Cronômetros</Text>
      </View>
      <ScrollView style={styles.timerList}>
        <ToggleableTimerForm setTimers={setTimers} />

        {timers.map(({ title, project, id, elapsed, isRunning }) => (
          <EditableTimer
            key={id}
            id={id}
            title={title}
            project={project}
            elapsed={elapsed}
            isRunning={isRunning}
          />
        ))}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#d6d7da'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timerList: {
    paddingBottom: 15,
  }
});

export default App;
