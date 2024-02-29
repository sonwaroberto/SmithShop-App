import React, {FC, useEffect} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import theme from '../../resources/theme';
import styles from './splash.style';
import {useAppDispatch, useAppSelector} from '../../redux/typings';
import {RootState} from '../../redux/store';
import storage from '../../utils/storage';
import {setToken, setUser} from '../../features/auth/auth.slice';

type Props = {
  navigation: any;
};

const SplashScreen: FC<Props> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const {user: User, accessToken} = useAppSelector(
    (state: RootState) => state.authSlice,
  );

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const token = await storage.load({key: 'token'});
        const user = await storage.load({key: 'user'});

        dispatch(setToken(token));
        dispatch(setUser(user));

        if (user && token) {
          navigation.navigate('Main Stack');
        } else {
          navigation.replace('Onboarding');
        }
      } catch (error) {
        console.error('Error loading user data:', error);
        navigation.replace('Onboarding');
      }
    };

    loadUserData();
  }, [dispatch, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <ActivityIndicator size={100} color={theme.darkPrimary} />
    </View>
  );
};

export default SplashScreen;
