import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";

const CustomCheckbox = ({text}) => {
  return (
    <BouncyCheckbox
      size={18}
      fillColor="#22B24C"
      unfillColor="#FFFFFF"
      text={text}
      innerIconStyle={{ borderWidth: 2 }}
      onPress={(isChecked: boolean) => {}}
      textContainerStyle={{padding: 10}}
      textStyle={{
        textDecorationLine: "none",
      }}
    />
  )
}

export default CustomCheckbox

const styles = StyleSheet.create({})