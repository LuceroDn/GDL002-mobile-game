import React from 'react';
import {createStackNavigator, createAppContainer} from "react-navigation";
import Panel from './Components/Panel';
//import Home from './Components/Home';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}

const AppStackNavigation = createStackNavigator ({
  // Home: {
  //   screen: Home
  // },
  Panel: {
    screen: Panel
  }
});

const AppContainer = createAppContainer(AppStackNavigation);