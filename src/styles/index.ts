import {Platform, StyleSheet} from 'react-native';
import {
  DARK_COLOR,
  PrimaryColor,
  SecondaryColor,
  btnTextPrimary,
} from './theme';
import {COLORS} from '../theme/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },

  heading: {
    marginVertical: 10,
    marginHorizontal: 20,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: '#21282F',
  },

  label: {
    fontSize: 16,
    marginVertical: 5,
  },

  btnPrimary: {
    backgroundColor: SecondaryColor,
    marginVertical: 10,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },

  btnTextPrimary: {
    color: btnTextPrimary,
    fontSize: 16,
  },

  header: {
    backgroundColor: '#eee',
    padding: 15,
    paddingTop: Platform.OS === 'ios' ? 50 : 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerText: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    marginTop: 5,
    fontWeight: 'bold',
  },

  product: {
    height: 150,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },

  categoryList: {
    marginBottom: 10,
  },

  category: {
    paddingVertical: 5,
    marginHorizontal: 3,
    borderRadius: 5,
    backgroundColor: '#eee',
  },

  categoryText: {
    fontSize: 16,
    color: '#A2A0A1',
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 15,
  },

  categoryTextSelected: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    backgroundColor: PrimaryColor,
    paddingHorizontal: 20,
    borderRadius: 5,
  },

  productSlider: {
    flexDirection: 'row',
  },

  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 20,
    marginLeft: 10,
  },

  sliderItem: {
    width: 150,
    marginLeft: 10,
  },

  sliderImg: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },

  sliderText: {
    fontFamily: 'Poppins-SemiBold',
  },

  sliderPrice: {
    fontFamily: 'Poppins-Regular',
  },

  productBtn: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#21282F',
    padding: 20,
    width: 200,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 100,
  },

  productText: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },

  searchBar: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    position: 'absolute',
    zIndex: 111,
    backgroundColor: 'transparent',
    top: 20,
  },

  searchText: {
    fontFamily: 'Poppins-Regular',
    margin: 20,
    marginBottom: 0,
    fontSize: 16,
  },

  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    flex: 1,
    backgroundColor: '#eee',
    borderRadius: 30,
    paddingHorizontal: 20,
  },

  searchInputFocused: {
    borderWidth: 1,
    borderColor: '#ccc',
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 20,
  },

  searchBtn: {
    position: 'absolute',
    right: 0,
    paddingVertical: 15,
    paddingHorizontal: 25,
  },

  primaryBtn: {
    backgroundColor: PrimaryColor,
    padding: 15,
    width: 200,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    marginBottom: 20,
  },

  secondaryBtn: {
    borderColor: '#000',
    borderWidth: 2,
    padding: 10,
    width: 200,
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },

  cartItem: {
    borderColor: '#ccc',
    borderBottomWidth: 1,
    margin: 10,
    padding: 5,
    flexDirection: 'row',
    marginBottom: 0,
  },

  cartName: {
    marginLeft: 5,
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
  },

  cartPrice: {
    marginLeft: 5,
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },

  wishlistItem: {
    borderColor: '#ccc',
    borderBottomWidth: 1,
    margin: 10,
    padding: 5,
    flexDirection: 'row',
    marginBottom: 0,
  },

  wishlistName: {
    marginLeft: 5,
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    width: '80%',
  },

  wishlistPrice: {
    marginLeft: 5,
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },

  cartQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
    borderColor: '#eee',
    borderWidth: 1,
    alignSelf: 'flex-end',
  },

  menuTop: {
    height: 100,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 10,
  },

  menuOptions: {
    height: '100%',
    // backgroundColor: '#fff',
    backgroundColor: COLORS.primaryDarkGreyHex,

    paddingVertical: 20,
  },

  menuOption: {
    flexDirection: 'row',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    alignItems: 'center',
  },

  menuText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    marginLeft: 10,
    flex: 1,
  },

  profile: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  profileName: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: '#000',
  },

  switch: {
    flexDirection: 'row',
  },

  switchBtn: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
  },

  switchBtnSelected: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomColor: '#000',
    borderBottomWidth: 2,
  },

  switchText: {
    fontFamily: 'Poppins-Regular',
  },

  switchTextSelected: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
  },

  orderItem: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  orderNo: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    fontSize: 16,
  },

  orderItemCount: {
    fontFamily: 'Poppins-Regular',
  },

  orderDate: {
    fontFamily: 'Poppins-Regular',
    fontStyle: 'italic',
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
  space: {
    height: 16,
  },
  ScreenTitle: {
    fontSize: 28,
    fontFamily: 'Poppins-SemiBold',
    paddingLeft: 15,
    fontWeight: 'bold',
  },
});

export default styles;
