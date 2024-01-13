import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({title = 'Register', onPress}) => {
  return (
    <View>
      <TouchableOpacity style={Styles.ButtonStyle} onPress={onPress}>
        <Text style={Styles.TitleStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  ButtonStyle: {
    backgroundColor: 'purple',
    margin: 15,
    alignItems: 'center',
    borderRadius: 10,
    padding: 5,
  },
  TitleStyle:{
    fontSize:25,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Button;
