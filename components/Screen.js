import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

class Screen extends Component {
  render() {
    const { expression, result, finalResult } = this.props;

    return (
      <View style={styles.screenComponent} >
        <ScrollView horizontal={true} style={{scaleX:-1}}>
        <Text style={styles.expression}>{expression}</Text>
        </ScrollView>
        <ScrollView horizontal={true} style={{scaleX:-1}}>
        <Text style={styles.result}> {result}</Text>
        </ScrollView>
        <ScrollView horizontal={true} style={{scaleX:-1}}>
        <Text style={styles.final}> {finalResult}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenComponent: {
    flex: 3,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    backgroundColor:"#f7f7f7"
  },
  expression: {
    fontSize: 30,
    borderColor: 'white',
    textAlign: 'right',
    padding: 10,
    scaleX:-1
  },
  result: {
    fontSize: 20,
    borderColor: 'white',
    textAlign: 'right',
    padding: 10,
    scaleX:-1
  },
  final: {
    fontSize: 50,
    textAlign: 'right',
    padding: 10,
    fontWeight:"bold",
    scaleX:-1
  },
});

export default Screen;
