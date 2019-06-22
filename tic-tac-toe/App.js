import React from 'react';
import {createStackNavigator, createAppContainer} from "react-navigation";
import Game from './Components/Game';
import Splash from './Components/Splash';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}

const AppStackNavigation = createStackNavigator ({
  Home: {
    screen: Splash
  },
  Game: {
    screen: Game
  }
});

const AppContainer = createAppContainer(AppStackNavigation);