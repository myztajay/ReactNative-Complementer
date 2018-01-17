import React,{ Component } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { MainButton } from '../components/MainButton';

export default class MainContainer extends Component{
  constructor(props){
    super(props)
    this.state ={
      complements: [
        "",
        "You have a natural glow to you. keep it up.",
        "Your gaining traction you just need to keep going.",
        "You looking good! keep it up.",
        "Your the best Around!"
      ],
      selected: 0,

    }
  }


  onPress(){
    var x = Math.floor(Math.random()*4+1)
    this.setState({
      selected: x
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <View>
          <Text  style={styles.complementText}> {this.state.complements[this.state.selected]}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <MainButton style={styles.button} onPress={this.onPress.bind(this)} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    backgroundColor: '#8e44ad',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  complementText:{
    textAlign:'center',
    color:'white',
    fontSize:18,
  },
  buttonContainer:{
    width: 200,
    alignContent: 'center',

  },
  button:{
    alignSelf: 'flex-end',
  }
});
