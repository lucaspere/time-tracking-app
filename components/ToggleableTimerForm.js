import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import TimerButton from './TimerButton';
import TimerForm from './TimerForm';


const ToggleableTimerForm = (props) => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <View style={[styles.container, !isOpen && styles.buttonPadding]}>
         {isOpen ? (
            <TimerForm
               timers={props.timers}
               setTimers={props.setTimers}
               setIsOpen={setIsOpen}
            />) : (
               <TimerButton title="+" color="black" onPress={() => setIsOpen(true)} />
            )}
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

ToggleableTimerForm.prototype = {
   isOpen: PropTypes.bool.isRequired,
   setIsOpen: PropTypes.func.isRequired,
   
}
export default ToggleableTimerForm;