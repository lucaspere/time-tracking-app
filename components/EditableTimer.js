import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TimerForm from './TimerForm';
import Timer from './Timer';


const EditableTimer = ({
   id,
   title,
   project,
   elapsed,
   isRunning, setTimers, timers
}) => {

   const [editFormOpen, setEditFormOpen] = useState(false);

   const onRemovePress = () => {
      const timerDelete = timers.filter(timer => timer.id !== id);

      setTimers(timerDelete);
   }

   const handleStartPress = () => {
      const data = timers.map(timer => {
         if(timer.id === id) {
            return {
               ...timer,
               isRunning: true
            }
         }

         return timer
      })

      setTimers(data)
   };

   const handleStopPress = () => {
      const data = timers.map(timer => {
         if(timer.id === id) {

            return {
               ...timer,
               isRunning: false
            }
         }

         return timer
      })

      setTimers(data)
   };

   if (editFormOpen) {
      return <TimerForm
         setEditFormOpen={setEditFormOpen}
         timers={timers}
         setTimers={setTimers}
         id={id}
         title={title}
         project={project}
      />
   }

   return (
      <View>
         <Timer
            id={id}
            title={title}
            project={project}
            elapsed={elapsed}
            isRunning={isRunning}
            setEditFormOpen={setEditFormOpen}
            onRemovePress={onRemovePress}
            handleStopPress={handleStopPress}
            handleStartPress={handleStartPress}
         />
      </View>
   )
};

export default EditableTimer