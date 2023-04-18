import { Alert, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../component/CustomInput/CustomInput'
import CustomButton from '../../component/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleLogin = async () => {
    axios.post('http://10.0.2.2:3000/api/auth/signin', {
    email: email,
    password: password,
    })
    .then(response => {
      console.log(response.data);
      navigation.navigate('BottomTab')
    })
    .catch(error => {
      console.log(error);
      Alert.alert('Gagal', 'Login gagal')
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/images/bg.png')} resizeMode='cover' style={styles.image} >
        <View style={styles.component}>
          <Text style={styles.header}>Login</Text>
          <CustomInput value={email} placeholder={'Email'} type={undefined} secureTextEntry={false} onChangeText={setEmail} />
          <CustomInput value={password} placeholder={'Password'} type={undefined} secureTextEntry={true} onChangeText={setPassword} />
          <View style={{flexDirection: 'row'}}>
            <CustomButton text={'LOGIN'} onPress={handleLogin} type={'secondary'} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <CustomButton text={'Forgot password'} onPress={() => navigation.navigate('BottomTab')} type={undefined} />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    justifyContent: 'center',
  },
  component: {
    padding: 20,
  },
  header: {
    fontWeight: 'bold', fontSize: 20,
  }
})