import { Alert, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../component/CustomInput/CustomInput'
import CustomButton from '../../component/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const [token, setToken] = useState('')
  const navigation = useNavigation();

//   const handleLogin = () => {
//     // Kirim request login ke endpoint API
//     fetch('http://localhost:8000/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email: email,
//         password: password,
//       }),
//     })
//       .then(response => response.json())
//       .then(data => {
//         if (data.token) {
//           // Simpan token akses di storage lokal atau state di aplikasi
//           AsyncStorage.setItem('access_token', data.token);
//           // Navigasi ke halaman lain di aplikasi
//           navigation.navigate('BottomTab')
//         } else {
//           Alert.alert('Login failed', 'Invalid email or password');
//         }
//       })
//       .catch(error => console.error(error));
//   };

  const handleLogin = async () => {
    axios.post('http://127.0.0.1:3000/login', {
    email: email,
    password: password,
    })
    .then(response => {
      console.log(response.data);
      navigation.navigate('BottomTab')
    })
    .catch(error => {
      console.log(error);
      Alert.alert('Username atau password salah')
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