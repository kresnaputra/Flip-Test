import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

import {colors} from '../../constants/colors';
import {HomeNavProps} from '../../types/navigations/home';
import convertDateToString from '../../utils/convertDateToString';
import convertAmountToRupiah from '../../utils/converAmountToRupiah';

interface IDetailScreen {
  route: HomeNavProps<'Detail'>['route'];
}
const DetailScreen = ({route}: IDetailScreen) => {
  const data = route.params;

  const onCopy = () => {
    Clipboard.setString(`ID TRANSAKSI: #${data.id}`);
    Alert.alert('Copy ID Transaksi Berhasil');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onCopy} style={styles.containerHorizontal}>
        <Text style={styles.textBold}>ID TRANSAKSI: #{data.id}</Text>
        <Image
          style={{width: 15, height: 15, marginLeft: 5}}
          resizeMode="contain"
          source={require('../../assets/images/copy.png')}
        />
      </TouchableOpacity>
      <View style={[styles.line, {backgroundColor: '#FBFBFB'}]} />
      <View style={[styles.containerHorizontal, {marginBottom: 0}]}>
        <Text style={[styles.textBold, {flex: 1}]}>DETAIL TRANSAKSI</Text>
        <Text
          style={[
            styles.textBold,
            {color: data.status === 'SUCCESS' ? colors.GREEN : colors.ORANGE},
          ]}>
          {data.status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan'}
        </Text>
      </View>

      <View style={[styles.line, {backgroundColor: '#E7E7E7'}]} />

      <View style={{paddingHorizontal: 15}}>
        <Text style={styles.textBold}>
          {data.sender_bank.toLocaleUpperCase()} →{' '}
          {data.beneficiary_bank.toLocaleUpperCase()}
        </Text>
        <View style={{marginVertical: 7}} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <Text style={styles.textBold}>
              {data.beneficiary_name.toUpperCase()}
            </Text>
            <Text style={{marginTop: 5}}>{data.account_number}</Text>
          </View>
          <View style={{flex: 0.6}}>
            <Text style={styles.textBold}>NOMINAL</Text>
            <Text style={{marginTop: 5}}>
              {convertAmountToRupiah(data.amount)}
            </Text>
          </View>
        </View>

        <View style={{marginVertical: 7}} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <Text style={styles.textBold}>BERITA TRANSFER</Text>
            <Text style={{marginTop: 5}}>{data.remark}</Text>
          </View>
          <View style={{flex: 0.6}}>
            <Text style={styles.textBold}>KODE UNIK</Text>
            <Text style={{marginTop: 5}}>{data.unique_code}</Text>
          </View>
        </View>

        <View style={{marginVertical: 7}} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <Text style={styles.textBold}>WAKTU DIBUAT</Text>
            <Text style={{marginTop: 5}}>
              {convertDateToString(data.created_at)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  line: {
    width: '100%',
    height: 1,
    marginVertical: 20,
  },
  containerHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  container: {
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  textBold: {
    fontWeight: '700',
    fontSize: 15,
  },
});
