import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import data from './data';
import BarChart from './BarChart';

export default function App() {
  const [state, setState] = useState(data);
  
  return (
    <View style={styles.container}>
      <Text style={styles.textBoro}>October</Text>
      <View style={{width: 250, flexDirection: 'row',}}>
        <Text style={styles.spending}>Spending</Text>
        <Text style={styles.income}>Income</Text>
      </View>
      <View style={{width: 250, flexDirection: 'row', marginTop: 5}}>
        <Text style={{color: '#fff', paddingLeft: 25}}>$200</Text>
        <Text style={{color: '#fff', paddingLeft: 50}}>$500</Text>
      </View>
      <View style={{width: '100%', height: 300}}>
        <View style={{left: '80%', top: '45%'}}>
          <Text style={{color: '#fff'}}>Budget</Text>
          <Text style={{color: '#fff'}}>${state.overall_budget}</Text>
        </View>
        <Text style={{borderTopWidth: 1, borderTopColor: '#fff', top: 150, flex: 0.5, width: '95%', marginHorizontal: 10}} />
        <BarChart spending={state.spending} income={state.income} />
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
    marginTop: 60,
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
