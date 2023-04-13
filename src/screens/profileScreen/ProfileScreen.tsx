import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import title from '../../component/Title/title'
import CustomFlatlist from '../../component/CustomFlatlist/CustomFlatlist'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80'}} style={styles.image} />
        <View style={styles.label}>
          <Text style={styles.title}>Raihan Afdal Hadi</Text>
          <Text style={styles.subtitle} >Account Officer</Text>
        </View>
      </View>
      <View style={styles.button}>
        <CustomFlatlist label={'Logout'} iconSource={require('../../../assets/icons/arrow-outline.png')} onPress={undefined} />
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  label: {
    paddingHorizontal: 20
  },
  title: {
    fontWeight: 'bold',
    color: '#555'
  },
  subtitle: {
    color: '#999'
  },
  button: {
    marginTop: 30
  }
  
})