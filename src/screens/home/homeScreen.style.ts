import {StyleSheet} from 'react-native';
import theme from '../../resources/theme';

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: theme.white,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: theme.secondary,
    // minHeight: theme.completeScreenHeight * 0.95,
  },
  section: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
  section1: {
    // marginHorizontal: 24,
  },
  section2: {
    flex: 2,
    borderTopRightRadius: theme.largeBorderRadius,
    borderTopLeftRadius: theme.largeBorderRadius,
    // backgroundColor: theme.white,
    // marginHorizontal: 20,
    margin: 20,
    // marginTop: 50,
  },
  title: {
    fontSize: theme.fontSizeLarge,
    fontWeight: '900',
    color: theme.primary,
    textAlign: 'center',
  },
  appTitle: {
    fontSize: theme.fontSizeExtraLarge,
  },
  subtitle: {
    fontSize: 36,
    fontWeight: '900',
    color: theme.secondary,
    textAlign: 'center',
  },
  button: {
    backgroundColor: theme.primary,
    padding: 20,
    width: '100%',
    borderRadius: theme.borderImage,
    // cursor: 'pointer',
  },
  image: {
    flex: 1,
    // justifyContent: 'center',
    // resizeMode: 'contain',
    width: '100%',
    height: 300,
  },
  btnText: {
    color: theme.white,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: theme.fontSizeLarge,
  },
  brandImage: {
    // width: null,
    // height: null,
    resizeMode: 'cover',
  },
  brandWrapper: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    // height: 500,
  },
  terms: {
    color: theme.secondary,
    fontSize: theme.fontSizeNormal,
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: 30,
  },
  space: {
    marginTop: 16,
  },
});

export default styles;
