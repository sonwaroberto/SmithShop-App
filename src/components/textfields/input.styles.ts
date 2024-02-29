import {StyleSheet} from 'react-native';
import theme from '../../resources/theme';

const styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingLeft: 10,
  },

  inputViewFocused: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: theme.primary,
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingLeft: 10,
  },

  input: {
    borderRadius: 5,
    padding: 10,
    flex: 1,
  },

  textInput: {
    height: 50,
    borderWidth: 2,
    borderColor: '#eee',
    paddingHorizontal: 16,
  },

  inputFocused: {
    borderRadius: 5,
    padding: 10,
    flex: 1,
  },
  errorText: {
    color: theme.error,
  },
});

export default styles;
