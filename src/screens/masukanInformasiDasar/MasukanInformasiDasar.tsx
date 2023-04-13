import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomInput from '../../component/CustomInput/CustomInput'
import CustomButton from '../../component/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import Title from '../../component/Title/title'
import SplashScreen from '../splashScreen/SplashScreen'
import LoadingModal from '../../component/loadingModal/LoadingModal'

const MasukanInformasiDasar = () => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation()
  
  const onSubmit = () => {
    const showModal = () => setVisible(true);
    showModal();
    setTimeout(() => {
      navigation.navigate('Report Scoring');
    }, 1000);
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Title title={'Masukkan informasi dasar'} />
      <CustomInput value={undefined} placeholder={'Masukan nomor KTP'} type={'secondary'} secureTextEntry={undefined} onChangeText={undefined} />
      <CustomInput value={undefined} placeholder={'Masukan nama lengkap'} type={'secondary'} secureTextEntry={undefined} onChangeText={undefined} />
      <CustomInput value={undefined} placeholder={'Nomor handphone'} type={'secondary'} secureTextEntry={undefined} onChangeText={undefined} />
      <CustomInput value={undefined} placeholder={'Tanggal lahir'} type={'secondary'} secureTextEntry={undefined} onChangeText={undefined} />
      <CustomInput value={undefined} placeholder={'NPWP'} type={'secondary'} secureTextEntry={undefined} onChangeText={undefined} />
      <View style={{flexDirection: 'row'}}>
        <CustomButton text={'SUBMIT'} onPress={onSubmit} type={'secondary'} />
      </View>
      <LoadingModal onDismiss={undefined} visible={visible} text={'loading'} />
    </SafeAreaView>
  )
}

export default MasukanInformasiDasar

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})