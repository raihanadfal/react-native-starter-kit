import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Slider } from '@miblanchard/react-native-slider'

const NominalPinjaman = () => {
  const [loanAmount, setLoanAmount] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Jumlah Pinjaman:</Text>
      <Text style={styles.value}>
        <Text>Rp.</Text>
        {loanAmount}
      </Text>
      <Slider
        minimumValue={0}
        maximumValue={5000000}
        step={5}
        value={loanAmount}
        onValueChange={value => setLoanAmount(value)}
        containerStyle={{margin: 0}}
        thumbStyle={{borderColor: 'blue'}}
      />
    </View>
  )
}

export default NominalPinjaman

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 6,
    marginVertical: 6
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  value: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#EFFFF4',
    color: '#22B24C',
    fontWeight: 'bold'
  },
  slider: {
    width: '100%',
  },
});