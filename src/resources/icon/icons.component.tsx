import React from 'react';
import {Image} from 'react-native';

import styles from './icons.styles';

type Props = {
  icon: IconType;
  size: number | string;
  color?: string;
};

export enum IconType {
  APPLE = 'apple',
  GOOGLE = 'google',
  EYE_INVISIBLE = 'eye_invisible',
  EYE_VISIBLE = 'eye_visible',
}

const Icons: React.FC<Props> = ({icon, size = 35, color}) => {
  let _icon = require('../icons/google.png');

  if (icon === IconType.GOOGLE) {
    _icon = require('../icons/google.png');
  }

  if (icon === IconType.APPLE) {
    _icon = require('../icons/apple.png');
  }

  if (icon === IconType.EYE_INVISIBLE) {
    _icon = require('../icons/eye-invisible.png');
  }

  if (icon === IconType.EYE_VISIBLE) {
    _icon = require('../icons/eye-visible.png');
  }

  return (
    <Image
      source={_icon}
      style={[
        styles.iconImage,
        {
          width: size as number,
          height: size as number,
          tintColor: color,
        },
      ]}
    />
  );
};

export default Icons;
