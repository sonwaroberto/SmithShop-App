import {useColorScheme} from 'react-native';
import {Color} from './theme';

export const useDynamicTheme = () => {
  const colorScheme = useColorScheme();

  const darkTheme: Color = {
    primaryRedHex: '#DC3535',
    primaryOrangeHex: '#D17842',
    primaryBlackHex: '#0C0F14',
    primaryDarkGreyHex: '#141921',
    secondaryDarkGreyHex: '#21262E',
    primaryGreyHex: '#252A32',
    secondaryGreyHex: '#252A32',
    primaryLightGreyHex: '#52555A',
    secondaryLightGreyHex: '#AEAEAE',
    primaryWhiteHex: '#FFFFFF',
    primaryBlackRGBA: 'rgba(12,15,20,0.5)',
    secondaryBlackRGBA: 'rgba(0,0,0,0.7)',
  };

  const lightTheme: Color = {
    primaryRedHex: '#FF6161',
    primaryOrangeHex: '#FFA07A',
    primaryBlackHex: '#FFFFFF',
    primaryDarkGreyHex: '#F0F0F0',
    secondaryDarkGreyHex: '#E0E5EC',
    primaryGreyHex: '#D4D9E0',
    secondaryGreyHex: '#D4D9E0',
    primaryLightGreyHex: '#A0A3A8',
    secondaryLightGreyHex: '#565656',
    primaryWhiteHex: '#0C0F14',
    primaryBlackRGBA: 'rgba(255,255,255,0.5)',
    secondaryBlackRGBA: 'rgba(12,15,20,0.7)',
  };

  return colorScheme === 'dark' ? darkTheme : lightTheme;
};
