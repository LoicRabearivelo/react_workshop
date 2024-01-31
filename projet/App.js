import React, {useState}from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';

const press = () => {
  console.log('bonjour');
};

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState=>!previousState);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Ecran1</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="faut écrire chef" />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={press}>
          <Text>Un bouton</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
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
    height: 20,
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
