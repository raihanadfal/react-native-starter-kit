import { StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';

const CustomInput = ({value, placeholder, type, secureTextEntry, onChangeText}) => {
  return (
    <>
      <TextInput onChangeText={onChangeText} value={value} label={placeholder} secureTextEntry={secureTextEntry} style={[styles.input, styles[`input_${type}`]]} mode={'outlined'} disabled={false} activeOutlineColor={'#999'} outlineColor={'#fff'} textColor={'#555'} />
    </>
  )
}

export default CustomInput

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    borderColor: '#999',
    borderRadius: 4,
    marginVertical: 6,
    backgroundColor: '#fff'
  },
  input_secondary: {
  },
  input_result: {
  }
})