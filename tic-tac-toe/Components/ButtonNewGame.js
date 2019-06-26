import React, {Component} from 'react';
import { StyleSheet, View, TouchableOpacity, Alert, Button } from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';

class ButtonNewGame extends Component {
    constructor(props){
        super(props);
    }

    initializeGame = () => {
        this.setState({gameState:
        [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]
        ],
        currentPlayer: 1,
        });
      }

    onNewGamePress = () => {
        this.initializeGame();
      }

    render(){
        return(
      <View>
          <Button title="Iniciar" onPress={this.onNewGamePress} />
      </View>      
        );
    }
}

export default ButtonNewGame;