import React, {FC, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './input.styles';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {SecondaryColor} from '../../styles/theme';
import Icons, {IconType} from '../../resources/icon/icons.component';

interface InputProps {
  placeholder: string;
  text: string;
  setText: (text: string) => void;
  secure?: boolean;
  icon?: IconDefinition;
  error: string | boolean | undefined;
}

const Input: FC<InputProps> = ({
  placeholder,
  text,
  setText,
  icon,
  error,
  secure = false,
}) => {
  const [focused, setFocused] = useState(false);
  const [_secure, setSecure] = useState<boolean>(secure);

  return (
    <View>
      <View
        style={[
          focused ? styles.inputViewFocused : styles.inputView,
          styles.textInput,
        ]}>
        {icon && <FontAwesomeIcon icon={icon} />}
        <TextInput
          secureTextEntry={_secure}
          placeholder={placeholder}
          style={focused ? styles.inputFocused : styles.input}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={text}
          onChangeText={e => setText(e)}
          selectionColor={SecondaryColor}
        />
        {secure && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setSecure(!_secure)}>
            <Icons
              size={22}
              icon={!_secure ? IconType.EYE_INVISIBLE : IconType.EYE_VISIBLE}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default Input;
