/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View, Style, StyleSheet, Box, Box1 } from 'react-native';
import Header from './Header';

const wk5 = () => (
      <View style={{flex:1}}>
        <Header headerText={'Albums'} />    
        <AlbumList />  
      </View>
    );

AppRegistry.registerComponent('wk5', () => wk5);


class midapp extends Component {
    render() {


        const {box, box1} = styles;
        return (
            <View style={{flexDirection:"row"}}>
            
            <View style={{flexDirection:"column"}}>
            <Text style={box}>0</Text>
            <Text style={box1}>1</Text>
            <Text style={box1}>2</Text>
            <Text style={box1}>3</Text>
            <Text style={box1}>4</Text>
            <Text style={box1}>5</Text>
            <Text style={box1}>6</Text>
            <Text style={box1}>7</Text>
            <Text style={box1}>8</Text>
            </View>
            
            <View style={{flexDirection:"column"}}>
            <Text style={box}>Mon</Text>
            <Text style={box1}>1</Text>
            <Text style={box1}>2</Text>
            <Text style={box1}>3</Text>
            <Text style={box1}>4</Text>
            <Text style={box1}>5</Text>
            <Text style={box1}>6</Text>
            <Text style={box1}>7</Text>
            <Text style={box1}>8</Text>
            </View>
            
            <View style={{flexDirection:"column"}}>
            <Text style={box}>Tue</Text>
            <Text style={box1}>1</Text>
            <Text style={box1}>2</Text>
            <Text style={box1}>3</Text>
            <Text style={box1}>4</Text>
            <Text style={box1}>5</Text>
            <Text style={box1}>6</Text>
            <Text style={box1}>7</Text>
            <Text style={box1}>8</Text>
            </View>

            <View style={{flexDirection:"column"}}>
            <Text style={box}>Wed</Text>
            <Text style={box1}>1</Text>
            <Text style={box1}>2</Text>
            <Text style={box1}>3</Text>
            <Text style={box1}>4</Text>
            <Text style={box1}>5</Text>
            <Text style={box1}>6</Text>
            <Text style={box1}>7</Text>
            <Text style={box1}>8</Text>
            </View>
            
            <View style={{flexDirection:"column"}}>
            <Text style={box}>Thu</Text>
            <Text style={box1}>1</Text>
            <Text style={box1}>2</Text>
            <Text style={box1}>3</Text>
            <Text style={box1}>4</Text>
            <Text style={box1}>5</Text>
            <Text style={box1}>6</Text>
            <Text style={box1}>7</Text>
            <Text style={box1}>8</Text>
            </View>

            <View style={{flexDirection:"column"}}>
            <Text style={box}>Fri</Text>
            <Text style={box1}>1</Text>
            <Text style={box1}>2</Text>
            <Text style={box1}>3</Text>
            <Text style={box1}>4</Text>
            <Text style={box1}>5</Text>
            <Text style={box1}>6</Text>
            <Text style={box1}>7</Text>
            <Text style={box1}>8</Text>
            </View>
            


        </View>
        );
    }
}

const styles=StyleSheet.create({
    box:{
        backgroundColor:'gray',
        marginTop:20,
        paddingTop:20,
        width:62,
        height:66,
        borderWidth:0.5
    },
    box1:{
        backgroundColor:'gray',
        borderWidth:0.5,
        width:62,
        height:66
    }
})

AppRegistry.registerComponent('midapp', () => midapp);
