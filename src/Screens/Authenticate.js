import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Button from '../Components/Button';

const Authenticate = () => {
  const [showPassword, setShowPassword] = useState(false);

//   const toggleShowPassward = () =>{
//     setShowPassword(!showPassword);  
//   }

  return (
    <View style={Styles.AuthStyle}>
      <TextInput
        placeholder="Enter Mobile Number"
        style={Styles.InputStyle}
        keyboardType="number-pad"
      />
      <TextInput
        secureTextEntry={!showPassword}
        placeholder="Enter Passwrad"
        style={Styles.InputStyle}
        keyboardType="default"
      />
      <Button title="Login" />
    </View>
  );
};

const Styles = StyleSheet.create({
  AuthStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: 'lightblue',
    justifyContent: 'center',
  },
  InputStyle: {
    marginHorizontal: 15,
    marginVertical: 15,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  ButtonStyle:{
    width: 100,
  },
});

export default Authenticate;
