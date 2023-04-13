import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Dashboard = () => {
  const navigation = useNavigation()
  const onSubmit = () => {
    navigation.navigate('InputNIK')
  }
  return (
    <View style={styles.dashboard}>
      <View style={styles.right}>
        <Text>Pengajuan ter realisasi</Text>
        <Text>Rp. <Text style={styles.nominal}>5.000.000</Text></Text>
        <View style={styles.pengajuan}>
          <Text style={{color: '#999'}}>Pengajuan bulan ini</Text>
          <Text style={{color: '#555', fontWeight: 'bold'}}>Rp. 10.000.000</Text>
        </View>
      </View>
      <View style={styles.left}>
        <TouchableOpacity onPress={onSubmit}>
          <Text style={styles.text}>Tambah pengajuan</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  dashboard: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nominal: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#555'
  },
  pengajuan: {
    marginTop: 16
  },
  left: {
    
  },
  right: {

  },
  button: {
    color: '#22B24C'
  },
  text: {
    color: '#22B24C'
  }
})