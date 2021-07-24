import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import Buttons from './Buttons';
import Screen from './Screen';
import History from './History';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: '',
      result: '',
      actualExpression: '',
      finalResult: '',
      showHistory: false,
      historyArr:[],
    };
  }

  getPressedButtonValue = (buttonPressed) => {
    const { expression, actualExpression, result } = this.state;
    let newExpression = `${expression}${buttonPressed}`;
    this.setState({
      expression: newExpression,
    });

    let actualCharacter = buttonPressed;
    if (buttonPressed === '÷') {
      actualCharacter = '/';
    } else if (buttonPressed === '×') {
      actualCharacter = '*';
    } else if (buttonPressed === '−') {
      actualCharacter = '-';
    } else {
    }

    let newActualExpression = `${actualExpression}${actualCharacter}`;

    this.setState({
      actualExpression: newActualExpression,
      finalResult: '',
    });

    try {

      const check = eval(newActualExpression);

      if(!!(check%1)===false){
        this.setState({
          result: check.toString(),
        });
      }
      else{
        this.setState({
        result: check.toFixed(4).toString(),
      });
      }

    } catch (e) {
      this.setState({
        result: 'NaN',
      });
    }

  };

  deleteNum = () => {
    const { expression, result, actualExpression, finalResult } = this.state;

    let nE = expression.slice(0, expression.length - 1);
    let aE = actualExpression.slice(0, actualExpression.length - 1);

    if (nE.length == 0) {
      this.setState({
        expression: '',
        actualExpression: '',
        result: '',
        finalResult: '',
      });
      return;
    }

    this.setState({
      expression: nE,
      actualExpression: aE,
      finalResult: '',
    });

        try {

      const check = eval(aE);

      if(!!(check%1)===false){
        this.setState({
          result: check.toString(),
        });
      }
      else{
        this.setState({
        result: check.toFixed(4).toString(),
      });
      }

    } catch (e) {
      this.setState({
        result: 'NaN',
      });
    }
    // try {
    //   this.setState({
    //     result: eval(aE).toFixed(2).toString(),
    //   });
    // } catch (e) {
    //   this.setState({
    //     result: 'NaN',
    //   });
    // }
  };

  clearAll = () => {
    this.setState({
      expression: '',
      actualExpression: '',
      result: '',
      finalResult: '',
    });
  };

  setFinalAnswer = () => {
    const { result, historyArr, expression } = this.state;

    let ans = result;

    if(result!='' && expression!='' && result!='NaN'){
      historyArr.push({expression, result})
    }
    this.setState({
      finalResult: ans,
      historyArr:historyArr
    });

  };

  historyClose=()=>{
    this.setState({
      showHistory:false,
    })
  }

  historyOpen=()=>{
    this.setState({
      showHistory:true,
    })
  }
  clearHistory=()=>{
    this.setState({
      historyArr:[]
    })
  }
  render() {
    const { expression, result, finalResult } = this.state;

    return (
      <View style={styles.calculatorComponent}>
        <StatusBar barStyle="light-content" backgroundColor="lightgray" />
        <Screen
          expression={expression}
          result={result}
          finalResult={finalResult}
        />
        {this.state.showHistory ? (
          <History historyClose={this.historyClose} historyArr={this.state.historyArr} clearHistory={this.clearHistory} />
        ) : (
          <Buttons
            getPressedButtonValue={this.getPressedButtonValue}
            clearAll={this.clearAll}
            setFinalAnswer={this.setFinalAnswer}
            deleteNum={this.deleteNum}
            historyOpen={this.historyOpen}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calculatorComponent: {
    flex: 1,
  },
});

export default Calculator;
