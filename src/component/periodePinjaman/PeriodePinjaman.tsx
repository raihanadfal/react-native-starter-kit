import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const LoanPeriod = () => {
  const [loanPeriod, setLoanPeriod] = useState(6);

  return (
    <View style={{ padding: 10, backgroundColor: '#fff', marginVertical: 8, flexDirection: 'column', borderRadius: 6 }}>
      <Text style={{marginVertical: 10}}>Periode pinjaman</Text>
      <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
        <TouchableOpacity
          style={{ backgroundColor: loanPeriod === 6 ? "#22B24C" : "#EFFFF4", padding: 8, borderRadius: 4 }}
          onPress={() => setLoanPeriod(6)}
        >
          <Text style={{ color: loanPeriod === 6 ? "#fff" : "#22B24C" }}>6 Bulan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ backgroundColor: loanPeriod === 12 ? "#22B24C" : "#EFFFF4", padding: 8, borderRadius: 4 }}
          onPress={() => setLoanPeriod(12)}
        >
          <Text style={{ color: loanPeriod === 12 ? "#fff" : "#22B24C", }}>12 Bulan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ backgroundColor: loanPeriod === 24 ? "#22B24C" : "#EFFFF4", padding: 8, borderRadius: 4 }}
          onPress={() => setLoanPeriod(24)}
        >
          <Text style={{ color: loanPeriod === 24 ? "#fff" : "#22B24C" }}>24 Bulan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ backgroundColor: loanPeriod === 36 ? "#22B24C" : "#EFFFF4", padding: 8, borderRadius: 4 }}
          onPress={() => setLoanPeriod(36)}
        >
          <Text style={{ color: loanPeriod === 36 ? "#fff" : "#22B24C" }}>36 Bulan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ backgroundColor: loanPeriod === 48 ? "#22B24C" : "#EFFFF4", padding: 8, borderRadius: 4 }}
          onPress={() => setLoanPeriod(48)}
        >
          <Text style={{ color: loanPeriod === 48 ? "#fff" : "#22B24C" }}>48 Bulan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoanPeriod;
