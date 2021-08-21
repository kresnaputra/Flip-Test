import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import HomeNavigation from './navigations/HomeNavigation';

function Main() {
  return (
    <NavigationContainer>
      <HomeNavigation />
    </NavigationContainer>
  );
}

export default Main;
