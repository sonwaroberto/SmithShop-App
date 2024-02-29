import React, {FC} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  // StatusBar,
  // Platform,
} from 'react-native';
import styles from './homeScreen.style';
import Button from '../../components/buttons/Button.component';
import {ButtonType} from '../../lib/enums.atom';
// import theme from '../../resources/theme';

type Props = {
  navigation?: any;
};

const HomeScreen: FC<Props> = ({navigation}) => {
  console.log('navigation', navigation);
  // Platform.OS !== 'ios' && StatusBar.setBackgroundColor(theme.white);
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.brandWrapper}>
            <ImageBackground
              source={require('../../assets/images/jobe.jpg')}
              resizeMode="cover"
              style={styles.image}
            />
          </View>
        </View>
        <View style={styles.section2}>
          <View style={[styles.section]}>
            <Text style={[styles.title, styles.appTitle]}>
              Welcome To Smith Shop
            </Text>
            <View>
              <Text style={styles.terms}>
                Join us to celebrate stylish, comfy footwear. Your path to
                extraordinary style begins here.{' '}
              </Text>
            </View>
          </View>
          <View>
            <Button
              btnText="Register Now"
              btnType={ButtonType.PRIMARY}
              onPress={() => {
                navigation.navigate('Register');
              }}
            />
            <View style={styles.space} />
            <Button
              btnText="Sign In"
              btnType={ButtonType.SECONDARY}
              onPress={() => {
                navigation.navigate('Login');
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
