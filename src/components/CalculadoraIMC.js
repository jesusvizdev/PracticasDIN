import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class CalculadoraIMC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peso: 0,
      altura: 0,
      imc: 0,
      resultado: '',
      color: '',
    };
  }

  guardaPeso = (text) => {
    let newText = text.replace(",",".");
    this.setState({ peso: parseFloat(newText) });
  };

  guardaAltura = (text) => {
     let newText = text.replace(",",".");
    this.setState({ altura: parseFloat(newText) });
  };

  calcularIMC = () => {
    const imc = this.state.peso / Math.pow(this.state.altura, 2);
    this.setState({ imc });

    if (imc < 18.5) {
      this.setState({ resultado: 'Peso insuficiente', color: 'green' });
    } else if (imc >= 18.5 && imc < 25) {
      this.setState({ resultado: 'Normopeso', color: 'green' });
    } else if (imc >= 25 && imc < 27) {
      this.setState({ resultado: 'Sobrepeso grado I', color: 'green' });
    } else if (imc >= 27 && imc < 30) {
      this.setState({ resultado: 'Sobrepeso grado II (preobesidad)', color: 'orange' });
    } else if (imc >= 30 && imc < 35) {
      this.setState({ resultado: 'Obesidad de tipo I', color: 'orange' });
    } else if (imc >= 35 && imc < 40) {
      this.setState({ resultado: 'Obesidad de tipo II', color: 'orange' });
    } else if (imc >= 40 && imc < 50) {
      this.setState({ resultado: 'Obesidad de tipo III (mórbida)', color: 'red' });
    } else {
      this.setState({ resultado: 'Obesidad de tipo IV (extrema)', color: 'red' });
    }

  };


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Datos</Text>
        <View style={styles.inputsContainer}>
          <Text style={styles.values}>Peso</Text>
          <TextInput
            style={styles.input}
            placeholder="Inserta tu peso (kg)"
            underlineColorAndroid="black"
            keyboardType="numeric"
            onChangeText={this.guardaPeso}
          />
          <Text style={styles.values}>Altura</Text>
          <TextInput
            style={styles.input}
            placeholder="Inserta tu altura (m)"
            underlineColorAndroid="black"
            keyboardType="numeric"
            onChangeText={this.guardaAltura}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcularIMC}>
          <Text style={styles.textButton}>Calcular IMC</Text>
        </TouchableOpacity>
        <Text style={{ marginLeft: 10 }}>Resultado</Text>
        <Text style={[styles.result, { color: this.state.color}]}>{this.state.resultado}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 10,
  },
  title: {
    color: 'red',
    fontSize: 25,
    marginTop: 10,
    marginLeft: 20,
  },
  inputsContainer: {
    paddingVertical: 10,
  },
  values: {
    textTransform: 'uppercase',
    color: 'blue',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  input: {
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopColor: '#6495ED',
    borderBottomColor: '#6495ED',
    borderRightColor: 'grey',
    borderLeftColor: 'grey',
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 18,
    color: '#6495ED',
    fontWeight: 'bold',
    padding: 5,
  },
  result: {
    marginLeft: 10,
    marginBottom: 30,
  },
});
