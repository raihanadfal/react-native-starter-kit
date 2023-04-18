import { StyleSheet, useColorScheme } from 'react-native'
import React from 'react'

// lib import
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BottomTab from './BottomTab'
import MasukanNIK from '../screens/masukanNIK/MasukanNIK'
import MasukanInformasiDasar from '../screens/masukanInformasiDasar/MasukanInformasiDasar'
import LoginScreen from '../screens/loginScreen/LoginScreen'
import DaftarPengajuan from '../screens/daftarPengajuan/DaftarPengajuan'
import RequirementList from '../screens/requirementList/RequirementList'
import InformasiPribadi from '../screens/Register/InputInformasiPribadi/InformasiPribadi'
import InputInfoPekerjaan from '../screens/Register/InputInfoPekerjaan/InputInfoPekerjaan'
import InputInfoKontak from '../screens/Register/InputInfoKontak/InputInfoKontak'
import FotoPemohon from '../screens/Register/FotoPemohon/FotoPemohon'
import FotoKTP from '../screens/Register/FotoKTP/FotoKTP'
import FotoMemegangKTP from '../screens/Register/FotoMemegangKTP/FotoMemegangKTP'
import InputTTD from '../screens/Register/InputTtdNasabah/InputTTD'
import Preview from '../screens/preview/Preview'
import Debitur from '../screens/homeScreen/Debitur/Debitur'
import Pencairan from '../screens/homeScreen/Pencairan/Pencairan'
import Realisasi from '../screens/homeScreen/Realisasi/Realisasi'
import Pemutusan from '../screens/homeScreen/Pemutusan/Pemutusan'
import Laporan from '../screens/homeScreen/Laporan/Laporan'
import FotoJaminan from '../screens/Register/FotoJaminan/FotoJaminan'
import SplashScreen from '../screens/splashScreen/SplashScreen'
import SimulasiPinjaman from '../screens/simulasiPinjaman/SimulasiPinjaman'
import DetailDebitur from '../screens/detailPengajuan/DetailPengajuan'
import TambahDebitur from '../screens/homeScreen/Debitur/tambahDebitur/TambahDebitur'
import Report from '../screens/reportScoring/ReportScoring'

const Navigation = () => {
  const Stack = createNativeStackNavigator()  

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'SplashScreen'} >

        <Stack.Screen name='Login' component={LoginScreen} />

        <Stack.Screen name='InputNIK' component={MasukanNIK} />
        <Stack.Screen name='MasukanInformasiDasar' component={MasukanInformasiDasar} />
        
        <Stack.Screen name='RequirementList' component={RequirementList} />
        
        {/* splash screen */}
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
        
        {/* Register */}
        <Stack.Screen name='InformasiPribadi' component={InformasiPribadi} />
        <Stack.Screen name='InformasiPekerjaan' component={InputInfoPekerjaan} />
        <Stack.Screen name='InformasiKontak' component={InputInfoKontak} />
        <Stack.Screen name='FotoPemohon' component={FotoPemohon} />
        <Stack.Screen name='FotoKTP' component={FotoKTP} />
        <Stack.Screen name='FotoMemegangKTP' component={FotoMemegangKTP} />
        <Stack.Screen name='FotoJaminan' component={FotoJaminan} />
        <Stack.Screen name='TtdNasabah' component={InputTTD} />

        <Stack.Screen name='Simulasi pinjaman' component={SimulasiPinjaman} />

        <Stack.Screen name='Report Scoring' component={Report} />

        <Stack.Screen name='Detail debitur' component={DetailDebitur} />
        <Stack.Screen name='Tambah debitur' component={TambahDebitur} />

        {/* homescreen */}
        <Stack.Screen name='Debitur' component={Debitur} />
        <Stack.Screen name='DaftarPengajuan' component={DaftarPengajuan} />
        <Stack.Screen name='Pencairan' component={Pencairan} />
        <Stack.Screen name='Pemutusan' component={Pemutusan} />
        <Stack.Screen name='Realisasi' component={Realisasi} />
        <Stack.Screen name='Laporan' component={Laporan} />
        
        <Stack.Screen name='Preview' component={Preview} />
        
        <Stack.Screen name='BottomTab' component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})