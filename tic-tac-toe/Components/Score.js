import React, { Component } from 'react';
import { View, Text} from 'react-native';
import styles from './Style';
import { Col, Row, Grid } from "react-native-easy-grid";
//import afterTurn from "./Game"

class Score extends Component {
    constructor(props) {
        super(props);
    }



// arrow function component pasar props como parametro
    render() {
        return (
            <Grid>

            <Col style={{ flex:1,
        justifyContent: 'center', alignItems:'center', flexWrap: "nowrap",}}>
                    <Text style={styles.player1}>PLAYER "O"</Text>
                    <Text style={styles.scoreP1}>{this.props.scoreX}</Text>
            </Col>

            <Col style={{ flex:1,
        justifyContent: 'center', alignItems:'center'}}>
                    <Text style={styles.player2}>PLAYER "X"</Text>
                    <Text style={styles.scoreP2}>{this.props.scoreO</Text>
            </Col>

            </Grid>
        );
    }
}

export default Score;