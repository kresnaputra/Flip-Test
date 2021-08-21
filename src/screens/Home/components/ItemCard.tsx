import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors} from '../../../constants/colors';
import {IGetDataResponseItem} from '../../../types/responseApi';
import convertAmountToRupiah from '../../../utils/converAmountToRupiah';
import convertDateToString from '../../../utils/convertDateToString';

interface IItemCard {
  data: IGetDataResponseItem;
}
const ItemCard = ({data}: IItemCard) => {
  const renderChecking = () => {
    if (data.status === 'SUCCESS') {
      return (
        <View style={styles.containerSuccess}>
          <Text style={styles.textSuccess}>Berhasil</Text>
        </View>
      );
    }
    return (
      <View style={styles.containerPending}>
        <Text style={styles.textPending}>Pengecekan</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.line,
          {
            backgroundColor:
              data.status === 'SUCCESS' ? colors.GREEN : colors.ORANGE,
          },
        ]}
      />
      <View style={{paddingVertical: 10, flex: 1}}>
        <Text style={{fontWeight: '700', fontSize: 18}}>
          {data.sender_bank.toLocaleUpperCase()} →{' '}
          {data.beneficiary_bank.toLocaleUpperCase()}
        </Text>
        <Text style={{marginVertical: 5}}>
          {data.beneficiary_name.toUpperCase()}
        </Text>

        <Text>
          {convertAmountToRupiah(data.amount)} •{' '}
          {convertDateToString(data.completed_at)}
        </Text>
      </View>
      <View style={{marginRight: 10}}>{renderChecking()}</View>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  line: {
    height: '100%',
    width: 5,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    marginRight: 10,
  },
  containerSuccess: {
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: colors.GREEN,
  },
  containerPending: {
    borderColor: colors.ORANGE,
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderWidth: 2,
    borderRadius: 5,
  },
  textPending: {
    fontWeight: '700',
  },
  textSuccess: {
    fontWeight: '700',
    color: 'white',
  },
});
