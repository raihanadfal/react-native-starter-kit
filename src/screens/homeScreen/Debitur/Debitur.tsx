import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from '../../../component/CustomButton/CustomButton'
import Title from '../../../component/Title/title'
import { useNavigation } from '@react-navigation/native'
import FlatlistCustom from '../../../component/FlatlistCustom/FlatlistCustom'
import LoadingModal from '../../../component/loadingModal/LoadingModal'

const Debitur = () => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation()
  const onSubmit = () => {

  }
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Title title={'Debitur'} />
      <FlatlistCustom source={{uri: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/11/04/1419009444.jpg'}} name={'Nama Debitur'} phone={'081214604085'} status={'Aktif'} onPress={undefined} />
      <View style={{flexDirection: 'row',}}>
        <CustomButton text={'TAMBAH DEBITUR'} onPress={() => navigation.navigate('Tambah debitur')} type={'secondary'} />
      </View>
      <LoadingModal onDismiss={undefined} visible={visible} text={'loading'} />
    </View>
  )
}

export default Debitur

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})