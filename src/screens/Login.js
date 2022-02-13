import axios from 'axios';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Alert,
} from 'react-native';
import {Button} from 'react-native-elements/dist/buttons/Button';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async () => {
    try {
      let {data} = await axios.post('https://reqres.in/api/login', {
        email: email,
        password: password,
      });
      if (data != null) {
        return props.navigation.navigate('TabView');
      }
    } catch (error) {
      Alert.alert('app', error.response.data.error);
    }
  };
  return (
    <View style={styles.firstStyle}>
      <Text style={styles.normalText}>Login to your account</Text>
      <TextInput
        placeholder="Email"
        style={styles.inputfield}
        value={email}
        onChangeText={val => {
          setEmail(val);
        }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.inputfield}
        value={password}
        onChangeText={val => {
          setPassword(val);
        }}
      />
      <Button
        title="Login"
        onPress={() => {
          submitHandler();
        }}
        titleStyle={styles.buttonText}
        buttonStyle={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  firstStyle: {
    flex: 1,
    justifyContent: 'center',
    height: Dimensions.get('screen').height - 150,
  },
  inputfield: {
    color: 'black',
    backgroundColor: '#fff',
    fontSize: 14,
    height: 40,
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal: 10,
    borderColor: '#ccc',
    width: 300,
    alignSelf: 'center',
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 15,
    backgroundColor: '#0096FF',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  normalText: {
    fontSize: 14,
    color: 'black',
    alignSelf: 'center',
    padding: 5,
  },
});

export default LoginScreen;
