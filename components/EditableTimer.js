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
         />
      </View>
   )
};

export default EditableTimer