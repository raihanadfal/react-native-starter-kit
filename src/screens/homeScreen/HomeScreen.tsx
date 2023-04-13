import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonMenu from '../../component/ButtonMenu/ButtonMenu'
import { useNavigation } from '@react-navigation/native'
import Dashboard from '../../component/Dashboard/Dashboard'
import Title from '../../component/Title/title'

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={{padding: 10}}>
      {/* <Dashboard /> */}
      <View style={styles.dashboard}>
        <Text style={styles.title}>Selamat pagi, Han.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonMenu text={'Debitur'} source={require('../../../assets/icons/debitur.png')} onPress={() => navigation.navigate('Debitur')} />
        <ButtonMenu text={'Pengajuan'} source={require('../../../assets/icons/pengajuan.png')} onPress={() => navigation.navigate('DaftarPengajuan')}/>
        <ButtonMenu text={'Pemutusan'} source={require('../../../assets/icons/pemutusan.png')} onPress={() => navigation.navigate('Pemutusan')} />
        <ButtonMenu text={'Realisasi'} source={require('../../../assets/icons/realisasi.png')} onPress={() => navigation.navigate('Realisasi')} />
        {/* <ButtonMenu text={'Pencairan'} source={require('../../../assets/icons/pencairan.png')} onPress={() => navigation.navigate('Pencairan')} /> */}
        <ButtonMenu text={'Laporan'} source={require('../../../assets/icons/laporan.png')} onPress={() => navigation.navigate('Laporan')} />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 12,
    justifyContent: 'space-between'
  },
  dashboard: {
    padding: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})