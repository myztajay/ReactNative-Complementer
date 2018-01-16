import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from './containers/MainContainer';


export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <MainContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
