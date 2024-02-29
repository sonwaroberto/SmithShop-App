import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import GradientBGIcon from './GradientBGIcon';
import {faBars} from '@fortawesome/free-solid-svg-icons';

import ProfilePic from './ProfilePic';
import theme from '../resources/theme';

interface HeaderBarProps {
  title?: string;
  navigationRef: any;
  hideCart: any;
  setOpenMenu: any;
  openMenu: boolean;
}

const HeaderBar: React.FC<HeaderBarProps> = ({
  title,
  // navigationRef,
  // hideCart,
  setOpenMenu,
  openMenu = false,
}) => {
  return (
    <View style={styles.header}>
      <Pressable onPress={() => setOpenMenu(() => !openMenu)}>
        <GradientBGIcon
          name={faBars}
          color={theme.white}
          size={FONTSIZE.size_16}
        />
      </Pressable>
      <View style={styles.flexContainer}>
        <Text style={styles.HeaderText}>{title}</Text>
        <ProfilePic />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  header: {
    backgroundColor: COLORS.primaryBlackHex,
    padding: 15,
    paddingTop: Platform.OS === 'ios' ? 50 : 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default HeaderBar;
