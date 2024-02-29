import {Platform, StyleSheet} from 'react-native';
import {DARK_COLOR} from '../../styles/theme';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  form: {
    width: '100%',
    paddingHorizontal: 20,
    flex: 1,
  },
  child: {
    marginTop: Platform.OS === 'ios' ? 40 : 0,
  },
  title: {
    fontWeight: '700',
    color: DARK_COLOR + 'D9',
    fontSize: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Roboto',
  },
  subTitle: {
    opacity: 0.5,
    color: DARK_COLOR,
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
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
  registerWrapper: {
    flexDirection: 'row',
    marginHorizontal: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  registerText: {
    fontSize: 16,
    opacity: 0.7,
    color: DARK_COLOR,
    fontFamily: 'OpenSans-Regular',
  },
  registerButtonText: {
    textDecorationLine: 'underline',
    fontSize: 16,
    color: '#37369D',
    fontFamily: 'OpenSans-Regular',
    marginLeft: 4,
  },
  image: {
    width: 200,
    height: 200,
    backgroundColor: 'orange',
  },
  space: {
    height: 16,
  },
});
export default styles;
