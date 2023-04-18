import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import CustomInput from '../../component/CustomInput/CustomInput'
import CustomButton from '../../component/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet'
import Title from '../../component/Title/title'
import axios from 'axios'

const API_URL = 'http://127.0.0.1:3000/api/debtor/:id'

const MasukanNIK = () => {
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState(null);
  const navigation = useNavigation();
  const actionSheetRef = useRef<ActionSheetRef>(null);

  const fetchData = (nasabah_nik) => {
    axios.get(`http://10.0.2.2:3000/api/debtor/${nasabah_nik}`)
      .then(response => response.data)
      .then(data => {
        if (data.nasabah_nik) {
          setUserData(data);
          actionSheetRef.current?.show(data.nasabah_nik);
        } else {
          actionSheetRef.current?.show();
        }
      })
      .catch(error => console.error(error));
  }

  const onSubmit = () => {
    console.log(userData)
    navigation.navigate('MasukanInformasiDasar', {
      userData,
    });
  }

  return (
    <View style={styles.container}>
      <CustomInput value={userId} onChangeText={setUserId} placeholder={'Masukan nomor KTP'} type={'secondary'} secureTextEntry={undefined} />
      <View style={{flexDirection: 'row'}}>
        <CustomButton text={'SUBMIT'} onPress={() => fetchData(userId)} type={'secondary'} />
      </View>
      {
        userData ?
          (
          <ActionSheet ref={actionSheetRef} containerStyle={{padding: 16}}>
            <Title title={'Data pribadi'} />
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <CustomInput value={undefined} placeholder={'NIK'} type={'result'} secureTextEntry={undefined} onChangeText={undefined} />
              <CustomInput value={undefined} placeholder={'Nama'} type={'result'} secureTextEntry={undefined} onChangeText={undefined} />
            </View>
            <CustomInput value={undefined} placeholder={'Kantor'} type={'result'} secureTextEntry={undefined} onChangeText={undefined} />
            <CustomInput value={undefined} placeholder={'Tanggal registrasi'} type={'result'} secureTextEntry={undefined} onChangeText={undefined} />
            <View style={{flexDirection: 'row'}}>
              <CustomButton text={'SUBMIT'} onPress={onSubmit} type={'secondary'} />
            </View>
          </ActionSheet>
        )
        :
        (
          <ActionSheet ref={actionSheetRef} containerStyle={{padding: 16}}>
            <Text style={{textAlign: 'center'}}>Data tidak ditemukan</Text>
            <View style={{flexDirection: 'row'}}>
              <CustomButton text={'Register'} onPress={() => {navigation.navigate('MasukanInformasiDasar')}} type={'tertiary'} />
            </View>
          </ActionSheet>
        )
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