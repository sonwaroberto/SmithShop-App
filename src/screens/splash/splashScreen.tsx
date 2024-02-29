import React, {FC, useEffect} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import theme from '../../resources/theme';
import styles from './splash.style';
import {useAppDispatch} from '../../redux/typings';
import storage from '../../utils/storage';
import {setToken, setUser} from '../../features/auth/auth.slice';

type Props = {
  navigation: any;
};

const SplashScreen: FC<Props> = ({navigation}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const token = await storage.remove({key: 'token'});
        const user = await storage.remove({key: 'user'});

        dispatch(setToken(token));
        dispatch(setUser(user));

        if (user && token) {
          navigation.navigate('Main Stack');
        } else {
          setTimeout(() => {
            navigation.replace('Onboarding');
          }, 3000);
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
