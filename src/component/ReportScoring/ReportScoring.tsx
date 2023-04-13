import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ReportScoring = ({name, idNumber, score, status, nomorID, NIK}) => {
  return (
    <View style={styles.container}>
      
      <View>
        <View style={styles.header}>
          <Text style={styles.headerLabel}>Informasi Umum</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text>Nomor ID</Text>
            <Text style={styles.desc}>{nomorID}</Text>
          </View>
          <View style={styles.col}>
            <Text>NIK</Text>
            <Text style={styles.desc}>{NIK}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text>Tanggal Permintaan</Text>
            <Text style={styles.desc}>{nomorID}</Text>
          </View>
          <View style={styles.col}>
            <Text>Nama Lengkap</Text>
            <Text style={styles.desc}>{NIK}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text>Nomor Referensi</Text>
            <Text style={styles.desc}>{nomorID}</Text>
          </View>
          <View style={styles.col}>
            <Text>Tanggal Lahir</Text>
            <Text style={styles.desc}>{NIK}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text>Rekomendasi Keputusan</Text>
            <Text style={styles.desc}>{nomorID}</Text>
          </View>
          <View style={styles.col}>
            <Text>Peraturan Dilanggar</Text>
            <Text style={styles.desc}>{NIK}</Text>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.header}>
          <Text style={styles.headerLabel}>Skor</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text>Tingkat Risiko IDScore+</Text>
            <Text style={styles.desc}>{nomorID}</Text>
          </View>
          <View style={styles.col}>
            <Text>Tingkat Risiko BPR Score</Text>
            <Text style={styles.desc}>{NIK}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text>Skor</Text>
            <Text style={styles.desc}>{nomorID}</Text>
          </View>
          <View style={styles.col}>
            <Text>Skor</Text>
            <Text style={styles.desc}>lorem</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text>Kemungkinan Gagal Bayar</Text>
            <Text style={styles.desc}>{nomorID}</Text>
          </View>
          <View style={styles.col}>
            <Text>Kemungkinan Gagal Bayar</Text>
            <Text style={styles.desc}>{NIK}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text>Aturan Kebijakan</Text>
            <Text style={styles.desc}>{nomorID}</Text>
          </View>
          <View style={styles.col}>
            <Text>Kesimpulan</Text>
            <Text style={styles.desc}>{NIK}</Text>
          </View>
        </View>
      </View>
        
      <View>
        <View style={styles.header}>
          <Text style={styles.headerLabel}>Permintaan</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text>Jumlah permintaan dalam 7 hari terakhir</Text>
            <Text style={styles.desc}>{nomorID}</Text>
          </View>
          <View style={styles.col}>
            <Text>Jumlah Permintaan non-perbankan dalam satu bulan terakhir</Text>
            <Text style={styles.desc}>{NIK}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text>Jumlah permintaan dalam satu bulan terakhir</Text>
            <Text style={styles.desc}>{nomorID}</Text>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.header}>
          <Text style={styles.headerLabel}>Analisis Resiko</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text>Informasi Tunggakan</Text>
            <Text style={styles.desc}>{nomorID}</Text>
          </View>
          <View style={styles.col}>
            <Text>Informasi Pembayaran</Text>
            <Text style={styles.desc}>{NIK}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text>Jumlah bulan terdapat riwayat kredit dalam 12 bulan terakhir</Text>
            <Text style={styles.desc}>{nomorID}</Text>
          </View>
          <View style={styles.col}>
            <Text>Jumlah bulan tanpa hari keterlambatan dalam 12 bulan terakhir</Text>
            <Text style={styles.desc}>{NIK}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text>Persentase total bulan tanpa tunggakan terhadap jumlah bulan riwayat kredit dalam 12 bulan terakhir</Text>
            <Text style={styles.desc}>{nomorID}</Text>
          </View>
          <View style={styles.col}>
            <Text>Jumlah bulan dari fasilitasyang akan jatuh tempo paling terakhir</Text>
            <Text style={styles.desc}>{NIK}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text>Tanggal fasilitasterakhir yang dibuka</Text>
            <Text style={styles.desc}>{nomorID}</Text>
          </View>
          <View style={styles.col}>
            <Text>Tanggal fasilitasterakhir yang dibuka</Text>
            <Text style={styles.desc}>{NIK}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text>Tanggal fasilitasterakhir yang dibuka</Text>
            <Text style={styles.desc}>{nomorID}</Text>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.header}>
          <Text style={styles.headerLabel}>Input Tambahan</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text>Segmen Kredit</Text>
            <Text style={styles.desc}>{nomorID}</Text>
          </View>
          <View style={styles.col}>
            <Text>Status Pekerjaan</Text>
            <Text style={styles.desc}>{NIK}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text>Status Pendidikan </Text>
            <Text style={styles.desc}>{nomorID}</Text>
          </View>
          <View style={styles.col}>
            <Text>Plafon Pinjaman (Rp)</Text>
            <Text style={styles.desc}>{NIK}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text>Tenor Pinjaman (Bulan</Text>
            <Text style={styles.desc}>{nomorID}</Text>
          </View>
          <View style={styles.col}>
            <Text>Total Nilai Agunan NJOP (Rp)</Text>
            <Text style={styles.desc}>{NIK}</Text>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.header}>
          <Text style={styles.headerLabel}>Alamat Nasabah</Text>
        </View>
      </View>

      {/* <View style={styles.identityContainer}>
        <Text style={styles.identityText}>{name}</Text>
        <Text style={styles.identityText}>{idNumber}</Text>
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>{score}</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>{status}</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    padding: 16,
    elevation: 5,
  },
  header: {
    backgroundColor: '#999',
    borderRadius: 4
  },
  headerLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    padding: 4
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  col: {
    flexDirection: 'column',
    width: '50%',
  },
  desc: {
    fontWeight: 'bold',
  }
});

export default ReportScoring;