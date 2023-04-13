import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import CustomInput from '../../component/CustomInput/CustomInput'
import CustomButton from '../../component/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet'
import Title from '../../component/Title/title'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

const MasukanNIK = () => {
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState(null);
  // const [data, setData] = useState()
  const [NIK, setNIK] = useState('')
  const navigation = useNavigation()
  const actionSheetRef = useRef<ActionSheetRef>(null);

  const fetchData = () => {
    fetch(`${API_URL}/${userId}`)
    .then(response => response.json())
    .then(data => {
      if(data.id) {
        setUserData(data);
        actionSheetRef.current?.show(data.id)
      } else {
        actionSheetRef.current?.show();
      }
    })
    .catch(error => console.error(error))
  }

  const onSubmit = () => {
    navigation.navigate('MasukanInformasiDasar')
  }

  // const findDebtor = () => {
  // }
  // const onSubmit = () => {
  //   const data = {
  //     NIK
  //   }
  //   console.log('data before send: ', data)
  //   actionSheetRef.current?.show()
  // }
  return (
    <View style={styles.container}>
      <CustomInput value={userId} onChangeText={setUserId} placeholder={'Masukan nomor KTP'} type={'secondary'} secureTextEntry={undefined} />
      <View style={{flexDirection: 'row'}}>
        <CustomButton text={'SUBMIT'} onPress={fetchData} type={'secondary'} />
      </View>

      {
        userData? 
        (<ActionSheet ref={actionSheetRef} containerStyle={{padding: 16}}>
        <Title title={'Data pribadi'} />
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <CustomInput value={userData.phone} placeholder={'NIK'} type={'result'} secureTextEntry={undefined} onChangeText={undefined} />
          <CustomInput value={userData.name} placeholder={'Nama'} type={'result'} secureTextEntry={undefined} onChangeText={undefined} />
        </View>
        <CustomInput value={userData.username} placeholder={'Kantor'} type={'result'} secureTextEntry={undefined} onChangeText={undefined} />
        <CustomInput value={userData.email} placeholder={'Tanggal registrasi'} type={'result'} secureTextEntry={undefined} onChangeText={undefined} />
        <View style={{flexDirection: 'row'}}>
          <CustomButton text={'SUBMIT'} onPress={onSubmit} type={'secondary'} />
        </View>
      </ActionSheet>)
      :
      (<ActionSheet ref={actionSheetRef} containerStyle={{padding: 16}}>
        <Text>Data tidak ditemukan</Text>
      </ActionSheet>)
      }
    </View>
  )
}

export default MasukanNIK

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  button: {
    flexDirection: 'row'
  }
})