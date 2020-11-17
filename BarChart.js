import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight  } from 'react-native';
import _ from 'lodash';

const BarChart = ({ spending, income }) => {
  const spendingArr  = spending;
  const incomeArr  = income;
  const monthOfYear = (num) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[num-1];
  };
  
  function compare(a, b) {
    const monthA = a.month;
    const monthB = b.month;
    let comparison = 0;
    if (monthA > monthB) {
      comparison = 1;
    } else if (monthB < monthB) {
      comparison = -1;
    }
    return comparison;
  }
  const styles3 = {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 250,
  }


  const newSpend = _.merge(spendingArr, incomeArr);
  const sortedArr = newSpend.sort(compare);
  const renderElt = sortedArr.reverse().map(obj => {
    let month = monthOfYear(obj.month);
    let incomeHeight = Math.round(obj.income / 10);
    let spendingHeight = Math.round(obj.spending / 10);
    const styles1 = {
        height: incomeHeight,
        width: 7, 
        backgroundColor: '#428DFC',
        borderRadius: 5,
    }

    const styles2 = {
      height: spendingHeight,
      width: 7, 
      backgroundColor: '#0CE381',
      marginLeft: 3,
      borderRadius: 5,
    }

    const styles4 = {
      top: 70, 
      borderWidth: 2, 
      alignItems: 'baseline', 
      paddingTop: 2, 
      alignItems: 'center',
      borderRadius: 5,
      backgroundColor: '#fff3f3',
    }

    return (
      <View style={{justifyContent: 'flex-start', marginHorizontal: 7}} key={Math.random()} >
        <View style={{flexDirection: 'row', top: 70, marginRight: 20, marginBottom: 5, alignItems: 'flex-end', height: 120}}>
          <View style={StyleSheet.flatten(styles1)}></View>
          <View style={StyleSheet.flatten(styles2)}></View>
        </View>
        <TouchableHighlight>
          <View style={StyleSheet.flatten(styles4)}>
            <Text>{month}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  });

  return (
    <View style={StyleSheet.flatten(styles3)}>
      { renderElt }
    </View>
  )
};

export default BarChart;