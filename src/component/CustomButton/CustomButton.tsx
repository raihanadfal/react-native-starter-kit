import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({text, onPress, type}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, styles[`button_${type}`]]}>
      <Text style={[styles.label, styles[`label_${type}`]]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 6,
    flex: 1
  },
  label: {
    color: '#555',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  button_secondary: {
    marginVertical: 10,
    backgroundColor: '#22B24C',
  },
  label_secondary: {
    fontWeight: 'bold',
    color: '#fff',
  },
  label_danger: {
    color: 'red'
  },
  label_success: {
    color: '#22B24C'
  }
})