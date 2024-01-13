import React from 'react';
import {StyleSheet, View} from 'react-native';
import Authenticate from './Screens/Authenticate';

const App = () => {
  return (
    <View style={Styles.AppStyle}>
      <Authenticate />
    </View>
  );
};

const Styles = StyleSheet.create({
  AppStyle: {
    width: '100%',
    height: '100%',
  },
});

module.exports = App;
