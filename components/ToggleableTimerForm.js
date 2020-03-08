import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TimerButton from './TimerButton';
import TimerForm from './TimerForm';


const ToggleableTimerForm = (props) => {
console.log(props)
   const [isOpen, setIsOpen] = useState(false);

   return (
      <View style={[styles.container, !isOpen && styles.buttonPadding]}>
         {isOpen ? <TimerForm setTimers={props.setTimers}/> : <TimerButton title="+" color="black" onPress={()=> setIsOpen(true)}/>}
      </View>
   )
};

const styles = StyleSheet.create({
   container: {
      paddingVertical: 10,
   },
   buttonPadding: {
      paddingHorizontal: 15,
   }
})

export default ToggleableTimerForm;