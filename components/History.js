import React, { Component } from 'react';
import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native';
const buttonRipple = {
  color: 'gray',
  borderless: false,
};

class Button extends Component {
  render() {
    const { historyClose, historyArr, clearHistory } = this.props;

    return (
      <View style={styles.historyTab}>
        <View style={styles.historyHeader}>
          <View style={styles.headerContent}>
            <Pressable onPress={historyClose} android_ripple={buttonRipple}>
              <Text style={styles.headerText}> X </Text>
            </Pressable>
          </View>
          <View style={styles.headerContent}>
            <Text style={styles.headerText}>History</Text>
          </View>
        </View>
        <View style={styles.historyContent}>
        <View style={styles.clearContent}>
            <Pressable onPress={clearHistory}>
              <Text style={styles.clear}> Clear History </Text>
            </Pressable>
          </View>
          <ScrollView style={{ flex: 1 }}>
            {historyArr.map((item) => {
              return (
                <View style={styles.historyContainer}>
                  <Text style={styles.historyExp}>{item.expression}</Text>
                  <Text style={styles.historyRes}>{item.result}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  historyTab: {
    flex: 7,
    backgroundColor: '#f0f0f0',
  },
  historyHeader: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    justifyContent:"space-between"
  },
  historyContent: {
    flex: 9,
  },
  headerContent: {
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  headerText: {
    fontSize: 25,
  },
  historyExp:{
    fontSize:20,
    textAlign:"right"
  },
  historyRes:{
    fontSize:30,
    textAlign:"right"
  },
  historyContainer:{
    borderBottomWidth:1,
    borderBottomColor:"darkgray",
    marginHorizontal:10,
    padding:20
  },
  clearContent:{
    margin:10
  },
  clear:{
    textAlign:"right"
  }
});

export default Button;
