import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';

const App = () => {

  const [timers, setTimers] = useState([])

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
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.timerListContainer}
      >
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
      </KeyboardAvoidingView>
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
  timerListContainer: {
    flex: 1
  },
  timerList: {
    paddingBottom: 15,
  }
});

export default App;
