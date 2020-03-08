import React, { useState, useEffect } from 'react';
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
      isRunning: false
    },
    {
      id: uuidv4(),
      title: "Tempo de mergulho",
      project: "Treino de natação",
      elapsed: 1273998,
      isRunning: true
    },
  ])

  useEffect(() => {

    const _TIME_INTERVAL = 1000;

    const interval = setInterval(() => {
      const incrementTime = timers.map(timer => {

        const { elapsed, isRunning } = timer;

        return {
          ...timer,
          elapsed: isRunning ? elapsed + 1000 : elapsed
        }
      })
      
      setTimers(incrementTime);
    }, _TIME_INTERVAL);

    return () => clearInterval(interval)
  })

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Cronômetros</Text>
      </View>
      <ScrollView style={styles.timerList}>
        <ToggleableTimerForm timers={timers} setTimers={setTimers} />

        {timers.map(({ title, project, id, elapsed, isRunning }) => (
          <EditableTimer
            key={id}
            id={id}
            title={title}
            project={project}
            elapsed={elapsed}
            isRunning={isRunning}
            timers={timers}
            setTimers={setTimers}
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
