import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'

export default class MainScreen extends Component {

    render() {

        // const word={en:"one", vn:"Mot"}
        const{en,vn,isMemory} = {en:"one", vn:"Mot", isMemory : true};
        const arr=['teo','ti','tun','tuan'];
        return (

            <SafeAreaView style={{flex:1, flexDirection:'row', justifyContent:'space-evenly'}}>
                {/* <Text> {word.en} </Text>
                <Text> {word.vn} </Text> */}
                {/* <Text> {en} </Text>
                <Text> {isMemory ? "----": vn} </Text> */}
                {
                    arr.map((name)=>{
                      return  <Text>{name}</Text>
                    })
                }
            </SafeAreaView>
        );
    }
}
