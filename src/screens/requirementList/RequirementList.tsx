import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomFlatlist from '../../component/CustomFlatlist/CustomFlatlist'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../../component/CustomButton/CustomButton'
import Title from '../../component/Title/title'

const RequirementList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Title title={'Informasi nasabah'} />
      <CustomFlatlist label={'Informasi pribadi'} iconSource={require('../../../assets/icons/arrow.png')} onPress={() => navigation.navigate('InformasiPribadi')} />
      <CustomFlatlist label={'Informasi pekerjaan'} iconSource={require('../../../assets/icons/arrow.png')} onPress={() => navigation.navigate('InformasiPekerjaan')} />
      <CustomFlatlist label={'Informasi kontak'} iconSource={require('../../../assets/icons/arrow.png')} onPress={() => navigation.navigate('InformasiKontak')} />
      <CustomFlatlist label={'Foto pemohon'} iconSource={require('../../../assets/icons/arrow.png')} onPress={() => navigation.navigate('FotoPemohon')} />
      <CustomFlatlist label={'Foto KTP'} iconSource={require('../../../assets/icons/arrow.png')} onPress={() => navigation.navigate('FotoKTP')} />
      <CustomFlatlist label={'Foto memegang KTP'} iconSource={require('../../../assets/icons/arrow.png')} onPress={() => navigation.navigate('FotoMemegangKTP')} />
      <CustomFlatlist label={'Foto jaminan'} iconSource={require('../../../assets/icons/arrow.png')} onPress={() => navigation.navigate('FotoJaminan')} />
      <CustomFlatlist label={'Tanda tangan'} iconSource={require('../../../assets/icons/arrow.png')} onPress={() => navigation.navigate('TtdNasabah')} />
      <View style={{flexDirection: 'row', marginTop: 8}}>
        <CustomButton text={'SUBMIT'} onPress={() => navigation.navigate('Preview')} type={'secondary'} />
      </View>
    </View>
  )
}

export default RequirementList

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})