import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const title = ({title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default title

const styles = StyleSheet.create({
  title: {
    padding: 6,
    fontSize: 14,
    fontWeight: 'bold'
  }
})