import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import FlatlistCustom from '../../component/FlatlistCustom/FlatlistCustom'
import axios from 'axios';
import CustomButton from '../../component/CustomButton/CustomButton';
import Title from '../../component/Title/title';

const DaftarPengajuan = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:3000/api/debtor/');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const onSubmit = () => {
    navigation.navigate('InputNIK');
  };

  return (
    <View style={styles.container}>
      <Title title={'Pengajuan'} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.nasabah_id}
        renderItem={({ item }) => (
          <FlatlistCustom
            source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' }}
            name={item.nasabah_nama_lengkap}
            phone={item.nasabah_nik}
            status={item.nasabah_regdate}
            onPress={() => navigation.navigate('DetailDebitur')}
          />
        )}
      />
      <View style={{ flexDirection: 'row' }}>
        <CustomButton text={'TAMBAH DATA'} onPress={onSubmit} type={'secondary'} />
      </View>
      <View style={{ marginVertical: 12 }} />
    </View>
  );
};


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