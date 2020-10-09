import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import TimerButton from './TimerButton';
import { millisecondsToHuman } from '../utils/TimerUtils';


const Timer = ({ handleStopPress, handleStartPress, onRemovePress, title, project, elapsed, setEditFormOpen, isRunning }) => {

   const elapsedString = millisecondsToHuman(elapsed);

   const renderActionButton = () => {

      if (!isRunning) {
         return <TimerButton color="#21BA45" title="Iniciar" onPress={handleStartPress} />
      }

      return <TimerButton color="#db2828" title="Parar" onPress={handleStopPress} />
   }

   return (
      <View style={styles.timerContainer}>
         <Text style={styles.title}>{title}</Text>
         <Text>{project}</Text>
         <Text style={styles.elapsedTime}>{elapsedString}</Text>
         <View style={styles.buttonGroup}>
            <TimerButton color="blue" small title="Editar" onPress={() => setEditFormOpen(true)} />
            <TimerButton color="#db2828" small title="Remover" onPress={onRemovePress} />
         </View>
         {renderActionButton()}

      </View>
   );
}

const styles = StyleSheet.create({
   timerContainer: {
      backgroundColor: '#f5f5f5',
      borderColor: '#d6d7da',
      borderWidth: 2,
      borderRadius: 10,
      margin: 15,
      marginBottom: 0,
   },
   title: {
      fontSize: 14,
      fontWeight: 'bold',
   },
   elapsedTime: {
      fontSize: 26,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: 15,
   },
   elapsedTime: {
      fontSize: 26,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: 15
   },
   buttonGroup: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   }
})

Timer.prototype = {
   onRemovePress: PropTypes.func.isRequired,
   setEditFormOpen: PropTypes.fun.isRequired,
   handleStartPress: PropTypes.func.isRequired.isRequired,
   handleStopPress: PropTypes.func.isRequired.isRequired,
   title: PropTypes.string.isRequired,
   project: PropTypes.string.isRequired,
   elapsed: PropTypes.number.isRequired,
   isRunning: PropTypes.bool.isRequired,
}

export default Timer