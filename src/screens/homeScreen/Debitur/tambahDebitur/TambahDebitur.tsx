import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import Title from '../../../../component/Title/title'
import CustomInput from '../../../../component/CustomInput/CustomInput'
import CustomButton from '../../../../component/CustomButton/CustomButton'
import LoadingModal from '../../../../component/loadingModal/LoadingModal'

const TambahDebitur = () => {
  const [visible, setVisible] = useState(false)

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)
  return (
    <View style={styles.container}>
      <Title title={'Tambah debitur'} />
      <CustomInput value={undefined} placeholder={'Nomor KTP'} type={undefined} secureTextEntry={undefined} onChangeText={undefined} />
      <View style={{flexDirection: 'row'}}>
        <CustomButton text={'SUBMIT'} onPress={showModal} type={'secondary'} />
      </View>
      <LoadingModal onDismiss={hideModal} visible={visible} text={'loading'} />
    </View>
  )
}

export default TambahDebitur

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  }
})