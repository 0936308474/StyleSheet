import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={[
            Style.viewFormat,
            {flex: 1, flexDirection: 'column', alignItems: 'stretch'},
          ]}>
          <View
            style={[
              Style.viewFormat,
              {flex: 1, backgroundColor: '#ff0000', borderWidth: 5},
            ]}>
            <Text style={Style.textFormatWhite}>1</Text>
          </View>
        </View>

        <View
          style={[
            Style.viewFormat,
            {flex: 2.5, flexDirection: 'row', alignItems: 'stretch'},
          ]}>
          <View
            style={[
              Style.viewFormat,
              {
                flex: 1,
                backgroundColor: '#ffff00',
                borderLeftWidth: 5,
                borderRightWidth: 5,
                borderBottomWidth: 5,
              },
            ]}>
            <Text style={Style.textFormatWhite}>2</Text>
          </View>

          <View
            style={[
              Style.viewFormat,
              {flex: 2, alignItems: 'stretch', flexDirection: 'column'},
            ]}>
            <View style={[Style.viewFormat, {flex: 2, alignItems: 'stretch'}]}>
              <View
                style={[
                  Style.viewFormat,
                  {flex: 1, backgroundColor: '#4682b4', borderRightWidth:5, borderBottomWidth:5},
                ]}>
                <Text style={Style.textFormatWhite}>3</Text>
              </View>
            </View>

            <View
              style={[
                Style.viewFormat,
                {flex: 1, alignItems: 'stretch', flexDirection: 'row'},
              ]}>
              <View
                style={[
                  Style.viewFormat,
                  {flex: 1, backgroundColor: '#ffc0cb', borderRightWidth:5, borderBottomWidth:5},
                ]}>
                <Text style={Style.textFormatWhite}>4</Text>
              </View>
              <View
                style={[
                  Style.viewFormat,
                  {flex: 1, backgroundColor: '#db7093', borderRightWidth:5, borderBottomWidth:5},
                ]}>
                <Text style={Style.textFormatWhite}>5</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

/*--------------------------BAI 2 -------------------------------------
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={[Style.viewFormat, {flex: 2.5, flexDirection:'column',alignItems:'stretch'}]}>
          <View style={[Style.viewFormat, {flex: 1, backgroundColor:'#ff0000'}]}>
            <Text style={Style.textFormat}>A</Text>
          </View>
          <View style={[Style.viewFormat, {flex: 1, backgroundColor:'#008000'}]}>
            <Text style={Style.textFormat}>B</Text>
          </View>
          <View style={[Style.viewFormat, {flex: 1, backgroundColor:'#adff2f'}]}>
            <Text style={Style.textFormat}>C</Text>
          </View>
          <View style={[Style.viewFormat, {flex: 1, backgroundColor:'#4169e1'}]}>
            <Text style={Style.textFormat}>D</Text>
          </View>
        </View>

        <View style={[Style.viewFormat, {flex: 3, flexDirection:'row',alignItems:'stretch'}]}>
          <View style={[Style.viewFormat, {flex: 1, backgroundColor:'#ffff00'}]}>
            <Text style={Style.textFormat}>A</Text>
          </View>
          <View style={[Style.viewFormat, {flex: 1, backgroundColor:'#a9a9a9'}]}>
            <Text style={Style.textFormat}>B</Text>
          </View>
          <View style={[Style.viewFormat, {flex: 1, backgroundColor:'#da70d6'}]}>
            <Text style={Style.textFormat}>C</Text>
          </View>
          <View style={[Style.viewFormat, {flex: 1, backgroundColor:'#800080'}]}>
            <Text style={Style.textFormat}>D</Text>
          </View>
        </View>
      </View>
    );
  }
}
*/
/*--------------------------BAI 1 -------------------------------------
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={[
              Style.viewFormat,
              {
                flex: 1,
                backgroundColor: '#008000',
              },
            ]}>
            <Text style={Style.textFormat}>1</Text>
          </View>
          <View style={{flex: 4, flexDirection: 'column'}}>
            <View
              style={[
                Style.viewFormat,
                {
                  flex: 1,
                  backgroundColor: '#ff0000',
                },
              ]}>
              <Text style={Style.textFormat}>3</Text>
            </View>
            <View
              style={[
                Style.viewFormat,
                {
                  flex: 1,
                  backgroundColor: '#f08080',
                },
              ]}>
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
            style={[
              Style.viewFormat,
              {
                flex: 1,
                backgroundColor: '#f0e68c',
              },
            ]}>
            <Text style={Style.textFormat}> 2</Text>
          </View>
          <View
            style={{
              flex: 2.5,
              flexDirection: 'column',
            }}>
            <View
              style={[Style.viewFormat, {flex: 1, backgroundColor: '#1e90ff'}]}>
              <Text style={Style.textFormat}>5</Text>
            </View>
            <View
              style={[Style.viewFormat, {flex: 1, backgroundColor: '#8b008b'}]}>
              <Text style={Style.textFormat}>6</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1.5,
              flexDirection: 'column',
            }}>
            <View
              style={[Style.viewFormat, {flex: 1, backgroundColor: '#8b008b'}]}>
              <Text style={Style.textFormat}>7</Text>
            </View>
            <View
              style={[Style.viewFormat, {flex: 1, backgroundColor: '#ff8c00'}]}>
              <Text style={Style.textFormat}>8</Text>
            </View>
            <View
              style={[Style.viewFormat, {flex: 1, backgroundColor: '#a9a9a9'}]}>
              <Text style={Style.textFormat}>9</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
*/
const Style = StyleSheet.create({
  textFormat: {
    fontSize: 25,
  },
  textFormatWhite: {
    fontSize: 30,
    color: '#ffffff',
  },
  viewFormat: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  viewFormatBorder: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderWidth: 2,
  },
});
