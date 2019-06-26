import React, {Component} from 'react';
import { StyleSheet, View, TouchableOpacity, Alert, Button } from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';

class Functions extends Component {
  constructor(props){
    super(props);

    this.state = {
      gameState:  [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      currentPlayer: 1,
    }
  }
   
    ComponentDidMount(){
      this.initializeGame();
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

    //Return 1 if player 1 won, -1 if player 2 won, or a 0 if no one has won
    getWinner = gameState => {
      const NUM_TILES = 3;
      let arr = this.state.gameState;
      let sum;

      //Check rows...
      for (let i = 0; i < NUM_TILES; i++) { 
      sum = arr[i][0] + arr[i][1] + arr[i][2];
      if (sum == 3) {return 1;}
        if (sum == -3) {return -1;}
    }
    
          //Check columns...
          for (let i = 0; i < NUM_TILES; i++){
            sum = arr[0][i] + arr[1][i] + arr[2][i];
            if (sum == 3) {return 1;}
            if (sum == -3) {return -1;}
          }

            //Check the diagonals...
            sum = arr[0][0] + arr[1][1] + arr[2][2];
            if (sum == 3) {return 1;}
            else if (sum == -3) {return -1;} 

            sum = arr[2][0] + arr[1][1] + arr[0][2];
            if (sum == 3) {return 1;}
            else if (sum == -3) {return -1;} 

            //There are no winners...
            return 0;
  }

    onTilePress= (row, col) => {
      //Don't allow tile to change...
      let value = this.state.gameState[row][col];
      if (value !== 0) {return;}

      //Grab current player...
      let currentPlayer = this.state.currentPlayer;

      //Set de correct tile...
      let arr = this.state.gameState.slice();
      arr[row][col] = currentPlayer;
      this.setState({gameState:arr});

      //Switch to other tile player...
      let nextPlayer = (currentPlayer == 1) ? -1 : 1;
      this.setState({currentPlayer : nextPlayer});

      //Check for winners...
      let winner = this.getWinner();
      if (winner == 1) {
        Alert.alert("Player 1 is the winner");
        this.initializeGame();
      }else if (winner == -1){
        Alert.alert("Player 2 is the winner");
        this.initializeGame();
      }
}

    onNewGamePress = () => {
      this.initializeGame();
    }

   const renderIcon = (row, col) => {
      const value = this.state.gameState[row][col];
      switch(value)
      {
        case 1: return <Icon name="close" style={styles.tileX} />;
        case -1: return <Icon name="circle-outline" style={styles.tileO} />;
        default: return  <View />;
      }
    }

  render() {
  return 
}
}



// export initializeGame;
// export getWinner;
// export onTilePress;
// export onNewGamePress;
export renderIcon;

