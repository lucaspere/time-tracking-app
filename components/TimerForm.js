import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import TimerButton from './TimerButton';

import { newTimer } from '../utils/TimerUtils';


const TimerForm = (props) => {

   const [title, setTitle] = useState(props.id ? props.title : '');
   const [project, setProject] = useState(props.id ? props.project : '');

   const submitText = props.id ? 'Atualizar' : 'Criar';


   const handleSubmitForm = () => {

      submitText === "Criar" ? handleCreatePress() : handleEditPress()
   };

   const handleEditPress = () => {
      const timerUpdate = props.timers.map(timer => {
         if (timer.id === props.id) {
            return {
               ...timer,
               title,
               project
            }
         }
         return timer
      });

      props.setTimers(timerUpdate);
      props.setEditFormOpen(false);
   };

   const handleCreatePress = () => {

      props.setTimers([
         newTimer({
            title,
            project,
         }),
         ...props.timers,
      ]);

      props.setIsOpen(false);
   }

   return (
      <View style={styles.formContainer}>
         <View style={styles.attributeContainer}>
            <Text style={styles.textInputTitle}>Projeto</Text>
            <View style={styles.textInputContainer}>
               <TextInput
                  style={styles.textInput}
                  underlineColorAndroid="transparent"
                  onChangeText={text => setTitle(text)}
                  value={title}
               />
            </View>
            <View style={styles.textInputContainer}>
               <TextInput
                  style={styles.textInput}
                  underlineColorAndroid="transparent"
                  onChangeText={text => setProject(text)}
                  value={project}
               />
            </View>
         </View>
         <View style={styles.buttonGroup}>
            <TimerButton small color="#21ba45" title={submitText} onPress={handleSubmitForm}
            />
            <TimerButton small color="#db2828" title="cancelar" onPress={() => submitText === "Criar" ? props.setIsOpen(false) : props.setEditFormOpen(false)} />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   formContainer: {
      backgroundColor: 'white',
      borderColor: "#d6d7da",
      borderWidth: 2,
      borderRadius: 10,
      padding: 15,
      margin: 15,
      marginBottom: 0,
   },
   attributeContainer: {
      marginVertical: 0,
   },
   textInputContainer: {
      borderColor: '#d6d7da',
      borderRadius: 2,
      borderWidth: 1,
      marginBottom: 5,
   },
   textInputTitle: {
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 5,
   },
   textInput: {
      height: 30,
      padding: 5,
      fontSize: 12,
   },
   buttonGroup: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   }
})

export default TimerForm;