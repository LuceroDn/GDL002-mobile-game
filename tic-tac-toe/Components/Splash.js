import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styles from './Style';


export default class Splash extends Component {
  static navigationOptions = {
    header: null
  }

  componentWillMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Game");
    }, 2000)
  }

  render() {
    return (
      <View style={styles.containerSplash}>
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




