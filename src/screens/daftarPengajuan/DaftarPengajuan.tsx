import { FlatList, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import FlatlistCustom from '../../component/FlatlistCustom/FlatlistCustom'
import axios from 'axios';
import CustomButton from '../../component/CustomButton/CustomButton';
import Title from '../../component/Title/title';
import DetailDebitur from '../detailPengajuan/DetailPengajuan';

const DaftarPengajuan = () => {
  const navigation = useNavigation()
  const [data, setData] = useState([])

  useEffect(() => {
    const fetcData = async() => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      setData(res.data)
    }
    fetcData()
  }, [])

  const onSubmit = () => {
    navigation.navigate('InputNIK') 
  }
  
  return (
    <View style={styles.container}>
      <Title title={'Pengajuan'} />
      <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <FlatlistCustom source={{uri : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}} name={item.name} phone={item.username} status={item.email} onPress={() => navigation.navigate('Detail debitur')} />
          )}
        />
        <View style={{flexDirection: 'row'}}>
          <CustomButton text={'TAMBAH DATA'} onPress={onSubmit} type={'secondary'} />
        </View>
        <View style={{marginVertical: 12}} />
    </View>
  )
}

export default DaftarPengajuan

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },
  list: {
    flexDirection: 'row', 
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 2
  }
})