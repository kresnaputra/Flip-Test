import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {colors} from '../../../constants/colors';

export type TRadioButton =
  | 'NAMEASC'
  | 'NAMEDESC'
  | 'DATEASC'
  | 'DATEDESC'
  | 'DEFAULT';

interface IRadioButton {
  id: TRadioButton;
  selectedId: TRadioButton;
  onPress: (id: TRadioButton, title: string) => void;
  title: string;
}
const RadioButton = ({id, selectedId, onPress, title}: IRadioButton) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(id, title)}
      style={styles.container}>
      <View style={styles.containerOutLine}>
        <View
          style={[
            styles.containerInLine,
            {backgroundColor: id === selectedId ? colors.ORANGE : 'white'},
          ]}
        />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  text: {
    marginLeft: 10,
    fontWeight: '700',
  },
  container: {flexDirection: 'row', alignItems: 'center', marginVertical: 10},
  containerOutLine: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderColor: colors.ORANGE,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInLine: {
    height: 15,
    width: 15,
    borderRadius: 100,
    borderColor: 'white',

    borderWidth: 3,
  },
});
