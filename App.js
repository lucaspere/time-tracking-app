import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Cronômetros</Text>
      </View>
      <ScrollView style={styles.timerList}>
        <ToggleableTimerForm isOpen={false} />
        <EditableTimer
          id="1"
          title="Tempo de estudo"
          project="Estudo de matemática"
          elapsed="8986300"
          isRunning
        />
        <EditableTimer
          id="2"
          title="Tempo de natação"
          project="Treino de Natação"
          elapsed="10986300"
          editFormOpen
        />
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
