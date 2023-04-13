import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FlatlistCustom = ({source, name, phone, status, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={source} style={styles.image} />
      <View style={{marginLeft: 10}}>
        <Text style={styles.name} >{name}</Text>
        <Text style={styles.phone}>{phone}</Text>
        <Text style={styles.status} >{status}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default FlatlistCustom

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  name: {
    
  },
  phone: {

  },
  status: {
    color: '#22B24C'
  }
})