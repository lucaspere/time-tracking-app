import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import TimerButton from './TimerButton';

const TimerForm = ({ id, title, project }) => {
   const submitText = id ? 'Atualizar' : 'Criar';

   return (
      <View style={styles.formContainer}>
         <View style={styles.attributeContainer}>
            <Text style={styles.textInputTitle}>Projeto</Text>
            <View style={styles.textInputContainer}>
               <TextInput
                  style={styles.textInput}
                  underlineColorAndroid="transparent"
                  defaultValue={title}
               />
            </View>
            <View style={styles.textInputContainer}>
               <TextInput
                  style={styles.textInput}
                  underlineColorAndroid="transparent"
                  defaultValue={project}
               />
            </View>
         </View>
         <View style={styles.buttonGroup}>
            <TimerButton small color="#21ba45" title={submitText} />
            <TimerButton small color="#db2828" title="cancelar" />
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