import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from '../navigation/MainStack';
import AuthStack from '../navigation/AuthStack';
import {navigationRef} from '../navigation/RootNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SideMenu from '@chakrahq/react-native-side-menu';
import Menu from '../../components/menu/Menu';
import HeaderBar from '../../components/HeaderBar';
import {RootState} from '../../redux/store';
import {useAppSelector} from '../../redux/typings';
const Stack = createNativeStackNavigator();

const menu = <Menu navigationRef={navigationRef} />;

const App = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const {user: User, accessToken} = useAppSelector(
    (state: RootState) => state.authSlice,
  );

  return (
    <SideMenu menu={menu} isOpen={openMenu} autoClosing={true}>
      {User && accessToken && (
        <HeaderBar
          setOpenMenu={setOpenMenu}
          navigationRef={navigationRef}
          hideCart={false}
          openMenu={openMenu}
        />
      )}
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="AuthStack">
          <Stack.Screen name="AuthStack" component={AuthStack} />
          <Stack.Screen name="Main Stack" component={MainStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </SideMenu>
  );
};

export default App;
