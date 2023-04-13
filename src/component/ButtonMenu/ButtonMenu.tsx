import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ButtonMenu = ({text, source, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={source} style={styles.image}/>
      <Text style={styles.label}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonMenu

const styles = StyleSheet.create({
  container: {
    padding: 6,
    alignItems: 'center'
  },
  image: {
    width: 30,
    height: 30
  },
  label: {
    marginTop: 14,
    fontSize: 12,
    color: '#555'
  }
})