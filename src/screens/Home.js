import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Button} from 'react-native-elements/dist/buttons/Button';

const HomeScreen = props => {
  return (
    <View style={styles.firstStyle}>
      <Button
        title="Login"
        onPress={() => {
          props.navigation.navigate('Login');
        }}
        titleStyle={styles.buttonText}
        buttonStyle={styles.button}
      />
      <Text style={styles.normalText}>Or</Text>
      <Button
        title="Register"
        onPress={() => {
          props.navigation.navigate('Register');
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

export default HomeScreen;
