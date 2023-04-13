import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(()=> {
      navigation.replace('Login')
    }, 3000)
  }, [navigation])

  return (
    <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
      <Image source={require('../../../assets/images/splashScreenBg.png')} style={styles.image} />
      <ActivityIndicator size={'large'} style={{marginVertical: 20}} />
      <Text style={styles.title}>CiJ Kreatif</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300
  },
  title: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: 'bold'
  }
})