import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../../../component/CustomButton/CustomButton'
import CustomInput from '../../../component/CustomInput/CustomInput'
import Title from '../../../component/Title/title'

const InputInfoKontak = () => {
  return (
    <View style={styles.container}>
      <Title title={'Informasi kontak darurat'} />
      <CustomInput value={undefined} placeholder={'Status'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'NIK pasangan'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'Nama pasangan'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'Tanggal lahir pasangan'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'Perjanjian pisah harta'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'Nomor handphone pasangan'} type={undefined} secureTextEntry={undefined} />
      <View style={{flexDirection: 'row'}}>
        <CustomButton text={'SUBMIT'} onPress={undefined} type={'secondary'} />
      </View>
    </View>
  )
}

export default InputInfoKontak

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})