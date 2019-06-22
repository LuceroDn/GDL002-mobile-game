import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';


export default class Splash extends Component {
    static navigationOptions = {
     header: null
    }

    componentWillMount() {
      setTimeout(()=> {
        this.props.navigation.navigate("Game");
      },2000 )
    }

  render() {
    return (
        <View style={styles.container}>
            <View >
           <Image
           style={styles.logo}
          source={require('../img/toktaktok_03.png')}
        />
            </View>
    
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#02aaff',
      justifyContent: 'center',
      alignItems: 'center', 
    },

    logo: {
        width: 150,
        height: 250,
    },
  });
  
  