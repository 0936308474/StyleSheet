import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'

export default class MainScreen extends Component {
    render() {

        // const word={en:"one", vn:"Mot"}
        const{en,vn} = {en:"one", vn:"Mot"};
        return (

            <SafeAreaView style={{flex:1}}>
                {/* <Text> {word.en} </Text>
                <Text> {word.vn} </Text> */}
                <Text> {en} </Text>
                <Text> {vn} </Text>
            </SafeAreaView>
        );
    }
}
