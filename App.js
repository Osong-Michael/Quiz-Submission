import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import _ from 'lodash';
import data from './data';
import BarChart from './BarChart';

export default function App() {
  const newData = _.merge(data.spending, data.income);
  const spent = newData[0].spending;
  const incoming = newData[0].income;
  const newState = {
    spent,
    incoming,
  };

  const [state, setState] = useState(newState);
  const bHeigth = data.overall_budget / 10;
  

  const _onPressButton = (data) => {
    setState({
      spent: data.spending,
      incoming: data.income,
    });
  }

  const styleLine = {
    borderTopWidth: 1,
    borderTopColor: '#fff',
    top: bHeigth,
    flex: 0.5,
    width: '94%',
    marginHorizontal: 10
  }

  const styleCircle1 = {
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 5,
    height: 15,
    width: 15,
    backgroundColor: '#428DFC',
  }

  const styleCircle2 = {
    borderWidth: 1,
    borderRadius: 10,
    height: 15,
    width: 15,
    backgroundColor: '#0CE381',
  }
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.textBoro}>October</Text>
      <View style={{width: 250, flexDirection: 'row',}}>
        <Text style={styles.spending}><View style={StyleSheet.flatten(styleCircle1)} />Spending</Text>
        <Text style={styles.income}><View style={StyleSheet.flatten(styleCircle2)} />Income</Text>
      </View>
      <View style={{width: 250, flexDirection: 'row', marginTop: 5}}>
  <Text style={{color: '#fff', paddingLeft: 40}}>${state.spent}</Text>
  <Text style={{color: '#fff', paddingLeft: 65}}>${state.incoming}</Text>
      </View>
      <View style={{width: '100%', height: 200}}>
        <View style={{left: '80%', top: '30%'}}>
          <Text style={{color: '#fff'}}>Budget</Text>
          <Text style={{color: '#fff'}}>${data.overall_budget}</Text>
        </View>
        <View style={{height: 200}}>
          <Text style={StyleSheet.flatten(styleLine)} />
          <BarChart newData={newData} _onPressButton={_onPressButton} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#172041',
  },
  textBoro: {
    color: '#fff',
    marginTop: 120,
    marginBottom: 10,
    fontSize: 25,
    paddingLeft: 25,
  },
  spending: {
    color: '#fff',
    paddingLeft: 25,
  },
  income: {
    color: '#fff',
    paddingLeft: 25,
  }
});
