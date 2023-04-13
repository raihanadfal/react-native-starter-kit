import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CustomButton from '../../../component/CustomButton/CustomButton';
import Title from '../../../component/Title/title';

const FotoPemohon = () => {
  const [imageCamera, setImageCamera] = useState(null)
  
  const openCamera = () => {
    const option = {
      mediaType: 'photo',
      quality: 1
    }
    launchCamera(option, (res) => {
      if (res.didCancel) {
        console.log('User canceled image picker')
      }else if(res.errorCode){
        console.log(res.errorMessage)
      } else {
        const data = res.assets[0]
        setImageCamera(data.uri)
        console.log(data)
      }
    })
  }
  
  return (
    <View style={styles.container}>
      <Title title={'Foto memegang KTP'} />
      {
        imageCamera != null &&
        <Image source={{uri: imageCamera}} style={{width: 370, height: 370, alignSelf: 'center'}} />
      }
      <View style={{flexDirection: 'row'}}>
        {
          imageCamera === null 
          ?
          <>
            <CustomButton text={'KEMBALI'} onPress={undefined} type={undefined} />
            <CustomButton text={'AMBIL FOTO'} onPress={openCamera} type={'secondary'} />
          </>
          :
          <>
            <CustomButton text={'ULANGI'} onPress={undefined} type={undefined} />
            <CustomButton text={'SUBMIT'} onPress={openCamera} type={'secondary'} />
          </>
        }
      </View>
    </View>
  )
}

export default FotoPemohon

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})