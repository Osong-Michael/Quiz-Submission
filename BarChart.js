import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import _ from 'lodash';

const BarChart = ({ newData, _onPressButton }) => {
  const btnPress = _onPressButton;
  const monthOfYear = (num) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[num-1].toUpperCase();
  };
  
  const styles3 = {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 200,
  }


  const sortedArr = _.sortBy(newData, 'month');
  const renderElt = sortedArr.map(obj => {
    let month = monthOfYear(obj.month);
    let incomeHeight = Math.round(obj.income / 10);
    let spendingHeight = Math.round(obj.spending / 10);
    const styles1 = {
        height: spendingHeight,
        width: 7, 
        backgroundColor: '#428DFC',
        borderRadius: 5,
    }
  

    const styles2 = {
      height: incomeHeight,
      width: 7, 
      backgroundColor: '#0CE381',
      marginLeft: 3,
      borderRadius: 5,
    }

    const styles4 = {
      alignItems: 'baseline', 
      paddingTop: 2, 
      alignItems: 'flex-start',
    }

    return (
      <View style={{justifyContent: 'flex-start', marginHorizontal: 7}} key={Math.random()} >
        <View style={{flexDirection: 'row', marginRight: 20, marginBottom: 5, alignItems: 'flex-end', height: 120}}>
          <View style={StyleSheet.flatten(styles1)}></View>
          <View style={StyleSheet.flatten(styles2)}></View>
        </View>
        <TouchableOpacity onPress={() => btnPress(obj)}>
          <View style={StyleSheet.flatten(styles4)}>
            <Text style={{color: '#fff'}}>{month}</Text>
          </View>
        </TouchableOpacity>
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
