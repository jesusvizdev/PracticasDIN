import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CalculadoraIMC from './src/components/CalculadoraIMC';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Calculadora IMC</Text>
        <CalculadoraIMC />
        <Text style={styles.finalText}>Created for 2n DAM</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7900BD',
  },
  title: {
    color: 'red',
    fontSize: 30,
    marginTop: 30,
    marginBottom:20,
    textAlign: 'center',
  },
  finalText: {
    marginTop: 10, 
    marginLeft: 10,
    color:'grey',
    fontWeight: 'bold',
  }
});
