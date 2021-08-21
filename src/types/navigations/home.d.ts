import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {IGetDataResponseItem} from '../responseApi';

export type HomeStackParamList = {
  Home: undefined;
  Detail: IGetDataResponseItem;
};

export interface HomeNavProps<T extends keyof HomeStackParamList> {
  navigation: StackNavigationProp<HomeStackParamList, T>;
  route: RouteProp<HomeStackParamList, T>;
}
