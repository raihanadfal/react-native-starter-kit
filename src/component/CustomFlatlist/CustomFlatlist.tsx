import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomFlatlist = ({ label, iconSource, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ marginLeft: 10 }}>{label}</Text>
        <Image source={iconSource} style={{ width: 20, height: 20, tintColor: '#555' }} />
      </View>
    </TouchableOpacity>
  )
}

export default CustomFlatlist

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 6,
    marginVertical: 2
  }
})