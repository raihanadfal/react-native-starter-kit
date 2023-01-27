/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import Navigation from './src/navigation';

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#fff',
  }
  return (
    <Navigation />
  );
}

const styles = StyleSheet.create({

});

export default App;
