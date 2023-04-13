import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomInput from '../../../component/CustomInput/CustomInput'
import CustomCheckbox from '../../../component/CustomCheckbox/CustomCheckbox'
import CustomButton from '../../../component/CustomButton/CustomButton'
import Title from '../../../component/Title/title'

const InformasiPribadi = () => {
  return (
    <View style={styles.container}>
      <Title title={'Informasi pribadi'} />
      <CustomInput value={undefined} placeholder={'NIK'} type={undefined} secureTextEntry={undefined} onChangeText={undefined} />
      <CustomInput value={undefined} placeholder={'Nama sesuai KTP'} type={undefined} secureTextEntry={undefined} onChangeText={undefined} />
      <Text>Jenis Kelamin</Text>
      <View style={{flexDirection: 'row'}}>
        <CustomCheckbox text={'Laki-laki'} />
        <CustomCheckbox text={'Perempuan'} />
      </View>
      <CustomInput value={undefined} placeholder={'Tanggal lahir'} type={undefined} secureTextEntry={undefined} onChangeText={undefined} />
      <CustomInput value={undefined} placeholder={'Tempat lahir'} type={undefined} secureTextEntry={undefined} onChangeText={undefined} />
      <CustomInput value={undefined} placeholder={'NPWP'} type={undefined} secureTextEntry={undefined} onChangeText={undefined} />
      <CustomInput value={undefined} placeholder={'Nama gadis ibu kandung'} type={undefined} secureTextEntry={undefined} onChangeText={undefined} />
      <View style={{flexDirection: 'row'}}>
        <CustomButton text={'SUBMIT'} onPress={undefined} type={'secondary'} />
      </View>
    </View>
  )
}

export default InformasiPribadi

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})