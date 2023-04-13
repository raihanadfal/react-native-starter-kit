import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../../component/Title/title'
import FlatlistCustom from '../../component/FlatlistCustom/FlatlistCustom'

const DetailDebitur = () => {
  return (
    <View style={styles.container}>
      <Title title={'Detail pengajuan'} />
      <FlatlistCustom source={{uri: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/11/04/1419009444.jpg'}} name={'Nama Debitur'} phone={'081214604085'} status={'Aktif'} onPress={undefined} />
      <Title title={'Rincian pengajuan'} />
      <View style={styles.detail}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#999'}}>Kantor</Text>
          <Text style={{fontWeight: 'bold'}}>result</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#999'}}>Nama</Text>
          <Text style={{fontWeight: 'bold'}}>result</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#999'}}>Alamat</Text>
          <Text style={{fontWeight: 'bold'}}>result</Text>
        </View>
        
        <View style={{borderWidth: 1, marginVertical: 6, borderColor: '#999'}} />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#999'}}>Produk kredit</Text>
          <Text style={{fontWeight: 'bold'}}>result</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#999'}}>Plafon</Text>
          <Text style={{fontWeight: 'bold'}}>result</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#999'}}>Sistem bunga</Text>
          <Text style={{fontWeight: 'bold'}}>result</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#999'}}>Angsuran</Text>
          <Text style={{fontWeight: 'bold'}}>result</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#999'}}>JKW</Text>
          <Text style={{fontWeight: 'bold'}}>result</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#999'}}>Bunga</Text>
          <Text style={{fontWeight: 'bold'}}>result</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#999'}}>Keperluan</Text>
          <Text style={{fontWeight: 'bold'}}>result</Text>
        </View>

        <View style={{borderWidth: 1, marginVertical: 6, borderColor: '#999'}} />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#999'}}>Jumlah pengajuan</Text>
          <Text style={{fontWeight: 'bold'}}>result</Text>
        </View>
      </View>
      <Title title={'Foto-foto'} />
      <View style={styles.gallery}>
        <Image source={{uri: 'https://img.iproperty.com.my/angel-legacy/1110x624-crop/static/2020/07/Rumah-Desa-1.png'}} style={{width: 100, height: 100, borderRadius: 4}} />
        <Image source={{uri: 'https://img.iproperty.com.my/angel-legacy/1110x624-crop/static/2020/07/Rumah-Desa-1.png'}} style={{width: 100, height: 100, borderRadius: 4}} />
        <Image source={{uri: 'https://img.iproperty.com.my/angel-legacy/1110x624-crop/static/2020/07/Rumah-Desa-1.png'}} style={{width: 100, height: 100, borderRadius: 4}} />
      </View>
    </View>
  )
}

export default DetailDebitur

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  detail: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8
  },
  gallery: {
    paddingHorizontal: 10,
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
})