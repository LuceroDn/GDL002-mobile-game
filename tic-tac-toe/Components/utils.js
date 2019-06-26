import React from 'react';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';
import { View, Alert, StyleSheet } from 'react-native';

export const ejemplo = (nombre) => console.log("hola " + nombre);


export const getWinner = gameState => {
    const NUM_TILES = 3;
    let arr = gameState;
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

export const onTilePress = (currentPlayer, gameState, row, col, callback) => {
     //Don't allow tile to change...
     let value = gameState[row][col];
     if (value !== 0) {return;}

     //Set de correct tile...
     let arr = gameState.slice();
     arr[row][col] = currentPlayer;
    //  this.setState({gameState:arr});

     //Switch to other tile player...
     let nextPlayer = (currentPlayer == 1) ? -1 : 1;
    //  this.setState({currentPlayer : nextPlayer});
     callback({gameState:arr, currentPlayer:nextPlayer});
}

export const renderIcon = (gameState, row, col)=> {
    const value = gameState[row][col];
      switch(value)
      {
        case 1: return <Icon name="close" style={styles.tileX} />;
        case -1: return <Icon name="circle-outline" style={styles.tileO} />;
        default: return  <View />;
};
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#02aaff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    tile: {
      borderWidth: 10,
      width: 100,
      height: 100, 
      alignItems: "center",
      justifyContent: "center",
      
    },
  
    tileX: {
      color: "black",
      fontSize: 95,
  
  },
  
    tileO: {
      color: "#fff",
      fontSize: 75,
    }
  
  });
