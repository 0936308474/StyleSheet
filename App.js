/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React from 'react';
// import { View, Text, ColorPropType } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// // import {Avatar} from "./src/components/avatar";

// export default class App extends React.Component
// {
//   render(){
//     return (
//       <View>
//       <Text style={{backgroundColor:'grey' }}>hello world hehe</Text>
//       </View>

//       );
//   }
// }--------------------------
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={
              [Style.viewFormat,
              {
                flex: 1,
                backgroundColor: '#008000',
              }]
            }>
            <Text style={Style.textFormat}>1</Text>
          </View>
          <View style={{flex: 4, flexDirection: 'column'}}>
            <View
              style={
                [Style.viewFormat,
                {
                  flex: 1,
                  backgroundColor: '#ff0000',
                }
                ]}>
              <Text style={Style.textFormat}>3</Text>
            </View>
            <View
              style={
                [Style.viewFormat,
                {
                  flex: 1,
                  backgroundColor: '#f08080',
                }]
              }>
              <Text style={Style.textFormat}>4</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <View
            style={
              [Style.viewFormat,
              {
                flex: 1,
                backgroundColor: '#f0e68c',
              }]
            }>
            <Text style={Style.textFormat}> 2</Text>
          </View>
          <View
            style={
              
              {
                flex: 2.5,
                flexDirection:'column'  
              }
            }>
            <View style={[Style.viewFormat,{flex: 1,
                backgroundColor: '#1e90ff',}]}>
              <Text style={Style.textFormat}>5</Text>
            </View>
            <View style={[Style.viewFormat,{flex: 1,
                backgroundColor: '#8b008b',}]}>
              <Text style={Style.textFormat}>6</Text>
            </View>
          </View>
          <View
            style={
              {
                flex: 1.5,
                flexDirection:'column'  
              }
            }>
            <View style={[Style.viewFormat,{flex: 1,
                backgroundColor: '#8b008b',}]}>
              <Text style={Style.textFormat}>7</Text>
            </View>
            <View style={[Style.viewFormat,{flex: 1,
                backgroundColor: '#ff8c00',}]}>
              <Text style={Style.textFormat}>8</Text>
            </View>
            <View style={[Style.viewFormat,{flex: 1,
                backgroundColor: '#a9a9a9',}]}>
              <Text style={Style.textFormat}>9</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const Style = StyleSheet.create({
  textFormat: {
    fontSize: 25,
  },
  viewFormat: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
