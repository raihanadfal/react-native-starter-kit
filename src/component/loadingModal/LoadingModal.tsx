import { ActivityIndicator, StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import React from 'react'
import { Button, Modal, Portal, Provider } from 'react-native-paper'

const LoadingModal = ({onDismiss, visible, text}) => {
  
  return (
    <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.container}>
      <ActivityIndicator size={'large'} />
      <Text style={styles.text}>{text}</Text>
    </Modal>
  );
}

export default LoadingModal

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    flexDirection: 'row',
    alignItems:  'center',
    justifyContent: 'space-between',
    margin: 20,
    borderRadius: 4
  },
  title: {
    color: '#000'
  },
  text: {
    flex: 1,
    marginHorizontal: 20
  }
});