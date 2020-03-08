import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TimerForm from './TimerForm';
import Timer from './Timer';


const EditableTimer = ({
   id,
   title,
   project,
   elapsed,
   isRunning
}) => {

   const [editFormOpen, setEditFormOpen] = useState(false);
   if (editFormOpen) {
      return <TimerForm id={id} title={title} project={project} />
   }

   return (
      <View>
         <Timer
            id={id}
            title={title}
            project={project}
            elapsed={elapsed}
            isRunning={isRunning}
         />
      </View>
   )
};

export default EditableTimer