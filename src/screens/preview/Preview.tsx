import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../../component/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import CustomInput from '../../component/CustomInput/CustomInput'
import CustomCheckbox from '../../component/CustomCheckbox/CustomCheckbox'
import Title from '../../component/Title/title'

const Preview = () => {
  const navigation = useNavigation()
  const onSubmit = () => {
    Alert.alert('Alert', 'pastikan data data yang dimasukkan sudah benar. setelah konfirmasi, maka data data tidak bisa diedit kembali', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => navigation.navigate('Simulasi pinjaman')},
    ])
  }

  return (
    <ScrollView style={styles.container}>
      <Title title={'Preview'} />
      <Title title={'Informasi Pribadi'} />
      <CustomInput value={undefined} placeholder={'NIK'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'Naman'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'Jenis kelamin'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'Tanggal lahir'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'Tempat lahir'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'NPWP'} type={undefined} secureTextEntry={undefined} />

      <Title title={'Informasi pekerjaan'} />
      <CustomInput value={undefined} placeholder={'Pekerjaan'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'Tempat kerja'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'Bidang kerja'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'Alamat kerja'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'Penghasilan'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'Sumber penghasilan'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'Tanggungan'} type={undefined} secureTextEntry={undefined} />
      
      <Title title={'Informasi kontak darurat'} />
      <CustomInput value={undefined} placeholder={'Status'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'NIK pasangan'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'Nama pasangan'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'Tanggal lahir pasangan'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'Perjanjian pisah harta'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'Nomor handphone pasangan'} type={undefined} secureTextEntry={undefined} />
      <CustomInput value={undefined} placeholder={'Ibu kandung'} type={undefined} secureTextEntry={undefined} />
      
      <Title title={'Foto pemohon'} />
      <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYYLqksK37BdgYpkFCL3HGzUJAJrZ--F_uotXcrMxe&s'}} style={styles.image}/>

      <Title title={'Foto KTP'} />
      <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYYLqksK37BdgYpkFCL3HGzUJAJrZ--F_uotXcrMxe&s'}} style={styles.image}/>

      <Title title={'Foto memegang KTP'} />
      <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYYLqksK37BdgYpkFCL3HGzUJAJrZ--F_uotXcrMxe&s'}} style={styles.image}/>

      <Title title={'Tanda tangan nasabah'} />
      <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYYLqksK37BdgYpkFCL3HGzUJAJrZ--F_uotXcrMxe&s'}} style={styles.image}/>

      <CustomCheckbox text={'Saya menyetujui syarat dan privasi'} />
      <CustomCheckbox text={'Saya menyetujui syarat dan privasi'} />

      <View style={{flexDirection: 'row'}}>
        <CustomButton text={'SUBMIT'} onPress={onSubmit} type={'secondary'} />
      </View>

      <View style={{marginBottom: 20}} />
    </ScrollView>
  )
}

export default Preview

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  image: {
    width: 365,
    height: 365,
    alignItems: 'center'
  }
})