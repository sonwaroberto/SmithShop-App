import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';

import styles from './Button.styles';
import theme from '../../resources/theme';

type Props = {
  btnText: string;
  disabled?: boolean;
  btnType?: ButtonType;
  onPress?: (e?: any) => any;
  icon?: JSX.Element;
  iconDir?: DirType;
  edge?: boolean;
  loading?: boolean;
};

export enum DirType {
  RIGHT = 'right',
  LEFT = 'left',
}

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

const Button: React.FC<Props> = ({
  btnText = 'button',
  btnType = ButtonType.PRIMARY,
  disabled = false,
  onPress = () => {},
  icon,
  iconDir = DirType.RIGHT,
  edge = false,
  loading = false,
}) => {
  let active, disable, text, color;
  if (btnType === ButtonType.PRIMARY) {
    active = styles.primaryButton;
    text = styles.textPrimary;
    color = theme.white;
  }

  if (btnType === ButtonType.SECONDARY) {
    active = styles.secondaryButton;
    text = styles.textSecondary;
    color = theme.primary;
  }

  if (btnType === ButtonType.PRIMARY && edge) {
    active = styles.primaryButtonE;
    text = styles.textPrimaryE;
    color = theme.primary;
  }

  if (btnType === ButtonType.SECONDARY && edge) {
    active = styles.secondaryButtonE;
    text = styles.textSecondaryE;
    color = theme.secondary;
  }

  if (btnType === ButtonType.PRIMARY && disabled) {
    disable = styles.primaryDisable;
  }

  if (btnType === ButtonType.SECONDARY && disable) {
    disable = styles.secondaryDisable;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.button, active, disabled ? disable : {}]}
      disabled={disabled}>
      {icon && iconDir === DirType.LEFT && icon}
      <Text style={text}>{btnText}</Text>
      {loading && <ActivityIndicator size={'small'} color={color} />}
      {icon && iconDir === DirType.RIGHT && icon}
    </TouchableOpacity>
  );
};

export default Button;
