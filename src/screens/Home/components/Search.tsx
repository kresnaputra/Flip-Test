import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {colors} from '../../../constants/colors';

interface ISearch {
  onChangeText: (text: string) => void;
  value: string;
  title: string;
  onPress: () => void;
}
const Search = ({onChangeText, value, onPress, title}: ISearch) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/search.png')}
        resizeMode="contain"
        style={{width: 15, height: 15, tintColor: 'gray'}}
      />
      <TextInput
        placeholder="Cari nama, bank, atau nominal"
        style={styles.textInput}
        placeholderTextColor="gray"
        onChangeText={onChangeText}
        value={value}
      />
      <TouchableOpacity
        onPress={onPress}
        style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.orderBy}>{title}</Text>
        <Image
          source={require('../../../assets/images/arrow-down.png')}
          resizeMode="contain"
          style={{width: 15, height: 15}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 15 : 0,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    color: 'black',
  },
  orderBy: {
    color: colors.ORANGE,
    fontWeight: '700',
    marginRight: 5,
  },
});
