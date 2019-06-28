import React, {Component} from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import {renderIcon, onTilePress, getWinner} from './Utils';
import styles from './Style';

class Game extends Component {
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

      static navigationOptions = {
        header: null
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

    

    onTilePress(row, col){
      const {currentPlayer, gameState} = this.state;
      onTilePress(currentPlayer, gameState, row, col, (newState)=>{
        this.setState(newState,this.afterTurn);
      });
    }

    afterTurn(){
      //Check for winners...
      let winner = getWinner(this.state.gameState);
      if (winner[0] == 1) {
        switch (winner[1]) {
          case 0:
            {
              //Jugada Vertical
              Alert.alert("¡Ganó 'X'! 🏆 ");
              this.initializeGame();
            }
            break;
          case 1:
            {
              //Jugada Horizontal
              Alert.alert("¡Ganó 'X'! 🏆 ");
              this.initializeGame();
            }
            break;
          case 2:
            {
              //Jugada Diagonal izquierda
              Alert.alert("¡Ganó 'X'! 🏆 ");
              this.initializeGame();
            }
            break;
          case 3:
            {
              //Jugada Diagonal derecha
              Alert.alert("¡Ganó 'X'! 🏆 ");
              this.initializeGame();
            }
            break;
        }
      } else if (winner[0] == -1) {
        switch (winner[1]) {
          case 0:
            {
              // Jugada Vertical
              Alert.alert("¡Ganó 'O'! 🏆 ");
              this.initializeGame();
            }
            break;
          case 1:
            {
              //Jugada Horizontal
              Alert.alert("¡Ganó 'O'! 🏆 ");
              this.initializeGame();
            }
            break;
          case 2:
            {
              //Jugada Diagonal izq
              Alert.alert("¡Ganó 'O'! 🏆 ");
              this.initializeGame();
            }
            break;
          case 3:
            {
              //Jugada Diagonal de derecha
              Alert.alert("¡Ganó 'O'! 🏆 ");
              this.initializeGame();
            }
            break;
        }
      } else if (winner[0] == 2) {
        if (winner[1] == 4) {
          Alert.alert("¡Nadie Ganó! ☠️");
          this.initializeGame();
        }
      }
    };

    
    render() {

    //  onTilePress();
    //  getWinner();

        return (

          <View style={styles.container}>    
      
           
           <View style={{flexDirection: "row"}}>
           <TouchableOpacity onPress={() => this.onTilePress(0,0)} style = {[styles.tile, {borderLeftWidth:0, borderTopWidth:0}]}>
           {renderIcon(this.state.gameState, 0, 0)}
           </TouchableOpacity>
      
           <TouchableOpacity onPress={() => this.onTilePress(0,1)} style = {[styles.tile, {borderTopWidth:0}]}>
          {renderIcon(this.state.gameState, 0,1)}
          </TouchableOpacity>
      
           <TouchableOpacity onPress={() => this.onTilePress(0,2)} style = {[styles.tile, {borderTopWidth:0, borderRightWidth:0}]}>
           {renderIcon(this.state.gameState, 0,2)}
          </TouchableOpacity>
          </View>
      
          <View style={{flexDirection: "row"}}> 
           <TouchableOpacity onPress={() => this.onTilePress(1,0)} style = {[styles.tile, {borderLeftWidth:0}]}>
           {renderIcon(this.state.gameState, 1,0)}
          </TouchableOpacity>
          
           <TouchableOpacity onPress={() => this.onTilePress(1,1)} style = {styles.tile}>
           {renderIcon(this.state.gameState, 1,1)}
            </TouchableOpacity>
      
           <TouchableOpacity onPress={() => this.onTilePress(1,2)} style = {[styles.tile, {borderRightWidth:0}]}>
           {renderIcon(this.state.gameState, 1,2)}
          </TouchableOpacity>
          </View>
      
          <View style={{flexDirection: "row"}}>
           <TouchableOpacity onPress={() => this.onTilePress(2,0)} style = {[styles.tile, {borderLeftWidth:0, borderBottomWidth:0}]}>
           {renderIcon(this.state.gameState, 2,0)}
            </TouchableOpacity>
      
           <TouchableOpacity onPress={() => this.onTilePress(2,1)} style = {[styles.tile, {borderBottomWidth:0,}]}>
           {renderIcon(this.state.gameState, 2,1)}
             </TouchableOpacity>
      
           <TouchableOpacity onPress={() => this.onTilePress(2,2)} style = {[styles.tile, {borderBottomWidth:0, borderRightWidth:0}]}>
           {renderIcon(this.state.gameState, 2,2)}
          </TouchableOpacity>
          </View>
      
          </View>
        );
      }
      }
      
      export default Game;
      
      