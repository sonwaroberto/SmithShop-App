import React, {FC} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import styles from './onBoardingScreen.style';
import theme from '../../resources/theme';

type Props = {
  navigation: any;
};

const Dots = ({selected}: {selected: boolean}) => {
  let backgroundColor = selected ? theme.white : theme.grayDark;

  return <View style={[styles.dot, {backgroundColor}]} />;
};

const Skip = ({...props}: any) => (
  <TouchableOpacity style={styles.button} {...props}>
    <Text style={styles.buttonText}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}: any) => (
  <TouchableOpacity style={styles.button} {...props}>
    <Text style={styles.buttonText}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}: any) => (
  <TouchableOpacity style={styles.button} {...props}>
    <Text style={styles.buttonText}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen: FC<Props> = ({navigation}) => {
  return (
    <>
      <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace('Home')}
        onDone={() => navigation.navigate('Home')}
        pages={[
          {
            backgroundColor: theme.secondary,
            image: (
              <Image
                source={require('../../assets/images/onboarding-img1.png')}
              />
            ),
            title: 'Discover a World of Choices',
            subtitle:
              'Explore over 100,000 unique products at Smith Shop. From fashion to electronics, find your perfect match with us.',
          },
          {
            backgroundColor: theme.secondary,
            image: (
              <Image
                source={require('../../assets/images/onboarding-img2.png')}
              />
            ),
            title: 'Seamless & Secure Transactions',
            subtitle:
              'Enjoy a hassle-free checkout and payment process. Our secure payment methods are trusted by customers worldwide.',
          },
          {
            backgroundColor: theme.secondary,
            image: (
              <Image
                source={require('../../assets/images/onboarding-img3.png')}
              />
            ),
            title: 'Stay in the Know with Order Tracking',
            subtitle:
              'Track your orders in real-time with our advanced tracking system. Always know where your products are on their journey to you.',
          },
          {
            backgroundColor: theme.secondary,
            image: (
              <Image
                source={require('../../assets/images/onboarding-img4.png')}
              />
            ),
            title: 'Swift and Reliable Delivery',
            subtitle:
              'Experience fast and reliable delivery services. We pride ourselves on getting your products to you in the quickest time possible.',
          },
        ]}
      />
    </>
  );
};

export default OnboardingScreen;
