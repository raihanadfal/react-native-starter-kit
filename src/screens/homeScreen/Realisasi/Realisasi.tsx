import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../../../component/CustomButton/CustomButton'
import Flatlist from '../../../component/FlatlistCustom/FlatlistCustom'
import navigation from '../../../navigation'
import Title from '../../../component/Title/title'
import FlatlistCustom from '../../../component/FlatlistCustom/FlatlistCustom'

const Realisasi = () => {
  return (
    <View style={styles.container}>
      <Title title={'Realisasi'} />
      <FlatlistCustom source={{uri: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/11/04/1419009444.jpg'}} name={'Nama Debitur'} phone={'081214604085'} status={'Aktif'} onPress={undefined} />
    </View>
  )
}

export default Realisasi

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})