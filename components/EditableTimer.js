import React, { useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
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
         if (timer.id === id) {
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
         if (timer.id === id) {

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

EditableTimer.propTypes = {
   id: PropTypes.number.isRequired,
   title: PropTypes.string.isRequired,
   project: PropTypes.string.isRequired,
   elapsed: PropTypes.number.isRequired,
   isRunning: PropTypes.bool.isRequired,
   timers: PropTypes.array.isRequired,
   setTimers: PropTypes.func.isRequired.isRequired,
   handleStartPress: PropTypes.func.isRequired.isRequired,
   handleStopPress: PropTypes.func.isRequired.isRequired,
   onRemovePress: PropTypes.func.isRequired.isRequired,

}
export default EditableTimer