import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Ecran1</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="faut écrire chef" />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Text>Un bouton</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  textContainer: {
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: '#add8e6',
    opacity : 0.8,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
  },
  buttonContainer: {
    backgroundColor: '#D8083f',
    opacity : 0.8,
    padding: 8,
    borderRadius: 9,
    marginBottom: 20,
  },
});
