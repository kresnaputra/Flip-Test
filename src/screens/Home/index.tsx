import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

import {HomeNavProps} from '../../types/navigations/home';

import {IReduxProps} from './index.container';
import ItemCard from './components/ItemCard';
import Search from './components/Search';
import RadioButton, {TRadioButton} from './components/RadioButton';

interface IHomeScreen extends IReduxProps {
  navigation: HomeNavProps<'Home'>['navigation'];
}
const HomeScreen = ({getDataAction, data, navigation}: IHomeScreen) => {
  const [search, setSearch] = useState('');
  const [listData, setListData] = useState(data);
  const [filterDataItem, setFilterDataItem] = useState(data);
  const [filterSelected, setFilterSelected] = useState<TRadioButton>('DEFAULT');
  const [filterSelectedName, setFilterSelectedName] = useState('URUTKAN');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getDataAction(res => {
      setListData(res);
    });
  }, [getDataAction]);

  const filterByOrder = (id: TRadioButton, title: string) => {
    setFilterSelected(id);
    setFilterSelectedName(title);
    if (id === 'NAMEASC') {
      setFilterDataItem(
        data.sort((a, b) => {
          if (a.beneficiary_name > b.beneficiary_name) {
            return 1;
          }
          return -1;
        }),
      );

      setListData(
        listData.sort((a, b) => {
          if (a.beneficiary_name > b.beneficiary_name) {
            return 1;
          }
          return -1;
        }),
      );
      return;
    }

    if (id === 'NAMEDESC') {
      setFilterDataItem(
        data.sort((a, b) => {
          if (a.beneficiary_name < b.beneficiary_name) {
            return 1;
          }
          return -1;
        }),
      );

      setListData(
        listData.sort((a, b) => {
          if (a.beneficiary_name < b.beneficiary_name) {
            return 1;
          }
          return -1;
        }),
      );
      return;
    }

    if (id === 'DATEASC') {
      setFilterDataItem(
        data.sort((a, b) => {
          if (new Date(a.created_at) < new Date(b.created_at)) {
            return 1;
          }
          return -1;
        }),
      );

      setListData(
        data.sort((a, b) => {
          if (new Date(a.created_at) < new Date(b.created_at)) {
            return 1;
          }
          return -1;
        }),
      );
      return;
    }

    if (id === 'DATEDESC') {
      setFilterDataItem(
        data.sort((a, b) => {
          if (new Date(a.created_at) > new Date(b.created_at)) {
            return 1;
          }
          return -1;
        }),
      );

      setListData(
        data.sort((a, b) => {
          if (new Date(a.created_at) > new Date(b.created_at)) {
            return 1;
          }
          return -1;
        }),
      );
      return;
    }
  };

  const filterData = (text: string) => {
    setSearch(text);

    const filterByName = filterDataItem.filter(item =>
      item.beneficiary_name.toLowerCase().includes(text.toLowerCase()),
    );

    setListData(filterByName);

    if (filterByName.length !== 0) {
      return;
    }

    const filterByBankSender = filterDataItem.filter(item =>
      item.beneficiary_bank.toLowerCase().includes(text.toLowerCase()),
    );

    setListData(filterByBankSender);

    if (filterByBankSender.length !== 0) {
      return;
    }

    const filterByBank = filterDataItem.filter(item =>
      item.sender_bank.toLowerCase().includes(text.toLowerCase()),
    );

    setListData(filterByBank);

    if (filterByBank.length !== 0) {
      return;
    }

    const filterByAmount = filterDataItem.filter(item => +item.amount >= +text);

    setListData(filterByAmount);
  };

  return (
    <View style={styles.container}>
      <Search
        onChangeText={filterData}
        onPress={() => setShowModal(true)}
        value={search}
        title={filterSelectedName}
      />
      <FlatList
        data={search.length === 0 ? filterDataItem : listData}
        extraData={[listData, filterDataItem]}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{marginVertical: 5}} />}
        ListHeaderComponent={() => <View style={{marginVertical: 5}} />}
        ListFooterComponent={() => <View style={{marginVertical: 5}} />}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detail', item)}>
            <ItemCard data={item} />
          </TouchableOpacity>
        )}
      />
      <Modal
        isVisible={showModal}
        onBackdropPress={() => setShowModal(false)}
        onBackButtonPress={() => setShowModal(false)}>
        <View style={styles.containerModal}>
          <RadioButton
            id="DEFAULT"
            selectedId={filterSelected}
            title="URUTKAN"
            onPress={filterByOrder}
          />

          <RadioButton
            id="NAMEASC"
            selectedId={filterSelected}
            title="Nama A-Z"
            onPress={filterByOrder}
          />

          <RadioButton
            id="NAMEDESC"
            selectedId={filterSelected}
            title="Nama Z-A"
            onPress={filterByOrder}
          />

          <RadioButton
            id="DATEASC"
            selectedId={filterSelected}
            title="Tanggal Terbaru"
            onPress={filterByOrder}
          />

          <RadioButton
            id="DATEDESC"
            selectedId={filterSelected}
            title="Tanggal Terlama"
            onPress={filterByOrder}
          />
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerModal: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
});
