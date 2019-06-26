import React, {Component} from 'react';
import { StyleSheet, View, TouchableOpacity, Alert, Button } from 'react-native';

//import Functions, { intialize, getWinner, onTilePress, onNewGamePress, renderIcon} from './Functions';
import {renderIcon, onTilePress, getWinner} from './utils';
//import * as Functions from './Functions';
import ButtonNewGame from "./ButtonNewGame";

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
      if (winner == 1) {
        Alert.alert("Player 1 is the winner");
        this.initializeGame();
      }else if (winner == -1){
        Alert.alert("Player 2 is the winner");
        this.initializeGame();
      };
    }

    
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
      
        
          <ButtonNewGame />
          
          </View>
        );
      }
      }
      
      export default Game;
      
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
          fontSize: 75,
      
      },
      
        tileO: {
          color: "#fff",
          fontSize: 75,
        }
      
      });
