import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useState} from 'react';

const App = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value, setValue] = useState();

  let numberOfZeros = function (arry) {
    var i = 0;
    arry.forEach(function (v) {
      if (v === 0) i++;
    });
    return i;
  };

  const handleCount = () => {
    let sumValues = 0;
    let intValue1 = isNaN(parseFloat(value1)) ? 0 : parseFloat(value1);
    let intValue2 = isNaN(parseFloat(value2)) ? 0 : parseFloat(value2);
    let intValue3 = isNaN(parseFloat(value3)) ? 0 : parseFloat(value3);
    let valuesTab = [intValue1, intValue2, intValue3];

    for (let index = 0; index < valuesTab.length; index++) {
      if (valuesTab[index] !== 0) {
        sumValues += valuesTab[index];
      } else {
        sumValues += 0;
      }
    }

    let count = numberOfZeros(valuesTab);

    let finalValue = (sumValues / (3 - count) / 3375) * 1000;
    setValue(finalValue);
    setValue1('');
    setValue2('');
    setValue3('');
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '10%',
      }}>
      <TextInput
        style={styles.input}
        placeholder="pomiar 1"
        onChangeText={(value) => setValue1(value)}
        value={value1}
      />
      <TextInput
        style={styles.input}
        placeholder="pomiar 2"
        onChangeText={(value) => setValue2(value)}
        value={value2}
      />
      <TextInput
        style={styles.input}
        placeholder="pomiar 3"
        onChangeText={(value) => setValue3(value)}
        value={value3}
      />

      <TouchableOpacity style={styles.button} onPress={handleCount}>
        <Text style={{color: 'white', fontSize: 20}}>Oblicz</Text>
      </TouchableOpacity>

      {value >= 16 && value <= 24 ? (
        <Text style={{marginTop: 50, fontSize: 50, backgroundColor: 'green'}}>
          {value}
        </Text>
      ) : (
        <Text style={{marginTop: 50, fontSize: 50, backgroundColor: 'red'}}>
          {value}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    color: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 8,
    padding: 10,
    width: '70%',
    height: 60,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
    color: 'white',
  },
  input: {
    margin: '5%',
    height: 50,
    width: '70%',
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 8,
    fontSize: 18,
  },
});

export default App;
