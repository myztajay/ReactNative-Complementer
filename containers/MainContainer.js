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
      fadeAnim: new Animated.Value(0)
    }
  }
  onPress(){
    var x = Math.floor(Math.random()*2+1)
    this.setState({
      selected: x
    })
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 0,                   // Animate to opacity: 1 (opaque)
        duration: 1000,              // Make it take a while
      }
    ).start();
  }

  render(){
    let { fadeAnim } = this.state;
    return(
      <View style={styles.container}>
        <Animated.View style={{opacity: fadeAnim}}>
          <Text  style={styles.complementText}>{this.state.complements[this.state.selected]}</Text>
        </Animated.View>
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
    fontFamily:'Roboto',
  },
  buttonContainer:{
    width: 200,
    alignContent: 'center',

  },
  button:{
    alignSelf: 'flex-end',
  }
});
