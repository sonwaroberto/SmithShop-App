import {StyleSheet} from 'react-native';
import theme from '../../resources/theme';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: theme.white,
    height: theme.screenHeight * 0.8584,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    zIndex: 30,
  },
  modalContainerLogin: {
    backgroundColor: theme.white,
    height: theme.screenHeight * 0.7896,
    // borderTopLeftRadius: 50,
    // borderTopRightRadius: 50,
    // zIndex: 30,
  },
  contentContainer: {
    width: theme.screenWidth * theme.PAD_32,
    alignSelf: 'center',
  },
  floatBanner: {
    width: '86%',
    height: 81,
    alignSelf: 'center',
    bottom: -68,
    backgroundColor: '#D9D9D9CC',
    borderRadius: 30,
    zIndex: -20,
  },
  modalTitleWrapper: {
    rowGap: 10,
    paddingTop: 40,
  },
  modalTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    color: theme.darkPrimary + 'D9',
    fontSize: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Roboto',
  },
  subTitle: {
    opacity: 0.5,
    color: theme.darkPrimary,
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
  },
  form: {
    marginVertical: 19,
    rowGap: 25,
  },
  functions: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 44,
    flexDirection: 'row',
  },
  forgotLink: {
    fontSize: 16,
    color: theme.primary,
    fontFamily: 'Roboto',
  },
  divider: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 14,
  },
  horizontalRule: {
    width: 50,
    borderTopWidth: 1,
    borderColor: '#1E1E1E80',
  },
  orText: {
    marginHorizontal: 10,
    color: '#1E1E1EB2',
    fontFamily: 'OpenSans-Regular',
  },
  orButton: {
    rowGap: 16,
  },
  buttonMargin: {
    marginTop: 43,
  },
  registerWrapper: {
    flexDirection: 'row',
    marginHorizontal: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    marginBottom: 40,
  },
  registerText: {
    fontSize: 16,
    opacity: 0.7,
    color: theme.darkPrimary,
    fontFamily: 'OpenSans-Regular',
  },
  registerButtonText: {
    textDecorationLine: 'underline',
    fontSize: 16,
    color: '#37369D',
    fontFamily: 'OpenSans-Regular',
    marginLeft: 4,
  },
});
export default styles;
