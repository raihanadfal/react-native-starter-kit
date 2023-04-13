import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../../../component/CustomButton/CustomButton'
import CustomInput from '../../../component/CustomInput/CustomInput'
import Title from '../../../component/Title/title'

const InputInfoPekerjaan = () => {
  return (
    <View style={styles.container}>
      <Title title={'Informasi pekerjaan'} />
      <CustomInput value={undefined} placeholder={'Pekerjaan'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'Tempat kerja'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'Bidang Kerja'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'Alamat kerja'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'Penghasilan'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'Sumber penghasilan'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'Tanggungan'} type={undefined} secureTextEntry={undefined} />
      <View style={{flexDirection: 'row'}}>
        <CustomButton text={'SUBMIT'} onPress={undefined} type={'secondary'} />
      </View>
    </View>
  )
}

export default InputInfoPekerjaan

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})