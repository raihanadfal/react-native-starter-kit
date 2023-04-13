import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import NominalPinjaman from '../../component/NominalPinjaman/NominalPinjaman'
import PeriodePinjaman from '../../component/periodePinjaman/PeriodePinjaman'
import CustomInput from '../../component/CustomInput/CustomInput'
import CustomButton from '../../component/CustomButton/CustomButton'
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet'
import navigation from '../../navigation'
import LoadingModal from '../../component/loadingModal/LoadingModal'

const SimulasiPinjaman = () => {
  const [visible, setVisible] = useState(false)
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const onSubmit = () => {
    actionSheetRef.current?.show()
  }
  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)

  return (
    <View style={styles.container}>
      <Text style={{marginVertical: 10}}>Simulasi pinjaman</Text>
      <NominalPinjaman />
      <PeriodePinjaman />
      <CustomInput value={undefined} placeholder={'Tujuan pinjaman'} type={undefined} secureTextEntry={undefined} onChangeText={undefined} />
      <View style={{flexDirection: 'row'}}>
        <CustomButton text={'SUBMIT'} onPress={onSubmit} type={'secondary'} />
      </View>

      <ActionSheet ref={actionSheetRef} containerStyle={{padding: 16}}>
        <Text style={{color: '#555', fontWeight: 'bold'}}>Rincian pengajuan</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#999'}}>Pinjaman</Text>
          <Text style={{fontWeight: 'bold'}}>result</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#999'}}>Tenor</Text>
          <Text style={{fontWeight: 'bold'}}>result</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#999'}}>Angsuran perbulan</Text>
          <Text style={{fontWeight: 'bold'}}>result</Text>
        </View>
        
        <View style={{borderWidth: 1, marginVertical: 6, borderColor: '#999'}} />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#999'}}>Bunga pertahun</Text>
          <Text style={{fontWeight: 'bold'}}>result</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#999'}}>Biaya administrasi</Text>
          <Text style={{fontWeight: 'bold'}}>result</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#999'}}>Biaya asuransi</Text>
          <Text style={{fontWeight: 'bold'}}>result</Text>
        </View>

        <View style={{borderWidth: 1, marginVertical: 6, borderColor: '#999'}} />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#999'}}>Jumlah yang diterima</Text>
          <Text style={{fontWeight: 'bold'}}>result</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CustomButton text={'SUBMIT'} onPress={showModal} type={'secondary'} />
        </View>
        <LoadingModal onDismiss={hideModal} visible={visible} text={'loading'} />
      </ActionSheet>
    </View>
  )
}

export default SimulasiPinjaman

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  value: {
    fontSize: 20,
    marginBottom: 20,
  },
  slider: {
    width: '100%',
  },
});