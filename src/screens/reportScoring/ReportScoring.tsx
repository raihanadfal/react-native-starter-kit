import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ReportScoring from '../../component/ReportScoring/ReportScoring'
import CustomButton from '../../component/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'

const Report = () => {
  const navigation = useNavigation();
  const onSubmit = () => {
    navigation.navigate('RequirementList')
  }
  return (
    <ScrollView style={styles.container}>
      <ReportScoring nomorID={'0979'} NIK={'3278051603000001'} name={undefined} idNumber={undefined} score={undefined} status={undefined} />
      <View style={{flexDirection: 'row'}}>
        <CustomButton text={'SUBMIT'} onPress={onSubmit} type={'secondary'} />
      </View>
    </ScrollView>
  )
}

export default Report
const styles = StyleSheet.create({
  container: {
    margin: 4
  }
})