import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'

export default class MainScreen extends Component {

    render() {

        // const word={en:"one", vn:"Mot"}
        const{en,vn,isMemory} = {en:"one", vn:"Mot", isMemory : true};
        return (

            <SafeAreaView style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
                {/* <Text> {word.en} </Text>
                <Text> {word.vn} </Text> */}
                <Text> {en} </Text>
                <Text> {isMemory ? "----": vn} </Text>
            </SafeAreaView>
        );
    }
}
