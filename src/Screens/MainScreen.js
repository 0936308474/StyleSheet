import React, {Component} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';

export default class MainScreen extends Component {
  render() {
    // const word={en:"one", vn:"Mot"}
    const {en, vn, isMemory} = {en: 'one', vn: 'Mot', isMemory: true};
    const arr = [
      {en: 'one', vn: 'Mot', id: 1},
      {en: 'two', vn: 'hai', id: 2},
      {en: 'three', vn: 'ba', id: 3},
    ];
    return (
      <SafeAreaView
        style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
        {/* <Text> {word.en} </Text>
                <Text> {word.vn} </Text> */}
        {/* <Text> {en} </Text>
                <Text> {isMemory ? "----": vn} </Text> */}
        {arr.map(name => {
          return (
            <View key={name.id}>
              <Text>{name.en}</Text>
              <Text>{name.vn}</Text>
            </View>
          );
        })}
        <TouchableOpacity
        onPress={()=>{alert('hi chien')}}
        activeOpacity={0.5}
          style={{
            width: 80,
            height: 50,
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: '#ffa500',
            justifyContent:'center',
            alignItems:'center',
          }}>
          <Text style={{color: '#ffffff', fontSize: 15, fontWeight: 'bold'}}>
            submit
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
