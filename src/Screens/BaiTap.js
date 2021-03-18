import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class BaiTap extends Component {
  render() {
    const arrList = [
      {en: 'One', vn: 'Mot', isMemory: true, id: 1},
      {en: 'Two', vn: 'Hai', isMemory: false, id: 2},
      {en: 'Three', vn: 'Ba', isMemory: false, id: 31},
      {en: 'Four', vn: 'Bon', isMemory: true, id: 4},
      {en: 'Five', vn: 'Nam', isMemory: true, id: 5},
      {en: 'Six', vn: 'Sau', isMemory: false, id: 6},
      {en: 'Sevent', vn: 'Bay', isMemory: false, id: 7},
      {en: 'Eight', vn: 'Tam', isMemory: true, id: 8},
      {en: 'Nine', vn: 'Chin', isMemory: false, id: 9},
      {en: 'Ten', vn: 'Muoi', isMemory: true, id: 10},
    ];

    return (
      <SafeAreaView style={Style.Wraper}>
        <TouchableOpacity style={Style.buttonSkill}>
          <Text style={Style.buttonText}> + </Text>
        </TouchableOpacity>

        <TextInput
          placeholder="Show forgot"
          placeholderTextColor="#191970"
          style={Style.inputtype}
        />

        {arrList.map(item => {
          return (
            <View style={Style.viewArea} key={item.id}>

              <View style={Style.viewIcon}>
                <Text style={Style.textEn}> 
                  {item.en}
                </Text>
               <View style={item.isMemory? Style.buttonEnFalse :Style.buttonEnTrue}>
                  <Text style={Style.textRemove}>{item.isMemory?"isMemorized":"fogot"}</Text>
                  </View>
              </View>

              <View style={Style.viewIcon}>
                <Text style={Style.textVn}>
                  {item.isMemory ? item.vn : '-----'}
                </Text>
                <View style={Style.buttonRemove}>
                  <Text style={Style.textRemove}>Remove</Text>
                </View>
              </View>

            </View>
          );
        })}
      </SafeAreaView>
    );
  }
}

const Style = StyleSheet.create({
  Wraper: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  buttonSkill: {
    height: 50,
    backgroundColor: '#3cb371',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 30,
  },
  inputtype: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 10,
  },
  viewArea: {
    marginTop: 10,
    backgroundColor: '#d3d3d3',
    padding: 20,
    height: 120,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // flex: 1,
    flexDirection: 'row',
  },
  viewIcon: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEn: {
    color: '#006400',
    fontSize: 30,
  },
  textVn: {
    color: '#8b008b',
    fontSize: 30,
  },
  buttonEnTrue: {
    height: 50,
    paddingHorizontal: 10,
    color: '#ffffff',
    backgroundColor: '#006400',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonEnFalse: {
    height: 50,
    paddingHorizontal: 10,
    color: '#ffffff',
    backgroundColor: '#ff0000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonRemove: {
    height: 50,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffa500',
    borderRadius: 5,
  },

  textRemove: {
    color: '#ffffff',
    fontSize: 20,
  },
});
