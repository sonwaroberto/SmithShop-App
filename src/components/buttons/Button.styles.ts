/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import theme from '../../resources/theme';

let styles = StyleSheet.create({
  button: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    height: 53,
    columnGap: 8,
  },
  primaryButton: {
    backgroundColor: theme.primary,
    borderWidth: 2,
    borderColor: theme.primary,
  },
  primaryButtonE: {
    backgroundColor: theme.white,
    borderWidth: 2,
    borderColor: theme.white,
  },
  secondaryButton: {
    backgroundColor: theme.transparent,
    borderWidth: 2,
    borderColor: '#D1D3D9', // color not found in theme
  },
  secondaryButtonE: {
    backgroundColor: theme.transparent,
    borderWidth: 2,
    borderColor: theme.white,
  },
  primaryDisable: {
    opacity: 0.5,
    pointerEvents: 'none',
  },
  secondaryDisable: {
    opacity: 0.5,
    pointerEvents: 'none',
  },
  textPrimary: {
    color: theme.white,
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'Roboto',
  },
  textPrimaryE: {
    color: theme.primary,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: '700',
  },
  textSecondary: {
    color: '#1E1E1EB2', // color not found in theme
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: '700',
  },
  textSecondaryE: {
    color: theme.white,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: '700',
  },
  roundButton: {
    height: 30,
    aspectRatio: 1,
    borderRadius: theme.circleBorderRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
