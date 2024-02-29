import React, {useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import {useStore} from '../store/store';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import {FlatList} from 'react-native';
import {Dimensions} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClose, faSearch} from '@fortawesome/free-solid-svg-icons';
import {useAppSelector, useAppDispatch} from '../redux/typings';
import {RootState} from '../redux/store';
import {getAllProductsThunk} from '../features/product/thunk/product.thunk';
import ProductCard from '../components/ProductCard';
import {Product} from 'type/product/ProductTypes';

const getCategoriesFromData = (data: any) => {
  let temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].category] === undefined) {
      temp[data[i].category] = 1;
    } else {
      temp[data[i].category]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
};

const getProductList = (category: string, data: any) => {
  if (category === 'All') {
    return data;
  } else {
    let productList = data.filter((item: any) => item.category === category);
    return productList;
  }
};

const HomeScreen = ({navigation}: any) => {
  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const {products, isLoading} = useAppSelector(
    (state: RootState) => state.productSlice,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProductsThunk());
  }, [dispatch]);

  const [categories, setCategories] = useState(getCategoriesFromData(products));
  const [searchText, setSearchText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedProduct, setSortedProduct] = useState(
    getProductList(categoryIndex.category, products),
  );

  const ListRef: any = useRef<FlatList>();
  const searchProduct = (search: string) => {
    if (search !== '') {
      ListRef?.current?.scrollToOffset({
        animated: true,
        offset: 0,
      });
      setCategoryIndex({index: 0, category: categories[0]});
      setSortedProduct([
        ...products.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase()),
        ),
      ]);
    }
  };

  useEffect(() => {
    setCategories(getCategoriesFromData(products));
  }, [products]);

  useEffect(() => {
    setSortedProduct(getProductList(categoryIndex.category, products));
  }, [categoryIndex, products]);

  const resetSearchProduct = () => {
    ListRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
    setCategoryIndex({index: 0, category: categories[0]});
    setSortedProduct([...products]);
    setSearchText('');
  };

  // const ProductCardAddToCart = ({
  //   id,
  //   index,
  //   thumbnail,
  //   title,
  //   description,
  //   price,
  //   category,
  //   stock,
  // }: any) => {
  //   addToCart({
  //     id,
  //     index,
  //     thumbnail,
  //     title,
  //     description,
  //     price,
  //     category,
  //     stock,
  //   });
  //   calculateCartPrice();
  //   ToastAndroid.showWithGravity(
  //     `${title} is Added to Cart`,
  //     ToastAndroid.SHORT,
  //     ToastAndroid.CENTER,
  //   );
  // };

  const addProductToCart = (product: Product) => {
    addToCart(product);

    calculateCartPrice();
    ToastAndroid.showWithGravity(
      `${product.title} is Added to Cart`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <Text style={styles.ScreenTitle}>
          Find the best{'\n'}OutFits for you
        </Text>
        {/* Search Input */}
        <View style={styles.InputContainerComponent}>
          <TouchableOpacity
            onPress={() => {
              searchProduct(searchText);
            }}>
            <FontAwesomeIcon
              icon={faSearch}
              size={FONTSIZE.size_18}
              color={
                searchText.length > 0
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex
              }
              style={styles.InputIcon}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Find Your Outfits..."
            value={searchText}
            onChangeText={text => {
              setSearchText(text);
              searchProduct(text);
            }}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInputContainer}
          />
          {searchText.length > 0 ? (
            <TouchableOpacity
              onPress={() => {
                resetSearchProduct();
              }}>
              <FontAwesomeIcon
                style={styles.InputIcon}
                icon={faClose}
                size={FONTSIZE.size_16}
                color={COLORS.primaryLightGreyHex}
              />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
        {/* Category Scroller */}
        {isLoading || !products || !categories ? (
          <ActivityIndicator />
        ) : (
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.CategoryScrollViewStyle}>
              {categories?.map((data, index) => (
                <View
                  key={index.toString()}
                  style={styles.CategoryScrollViewContainer}>
                  <TouchableOpacity
                    style={styles.CategoryScrollViewItem}
                    onPress={() => {
                      ListRef?.current?.scrollToOffset({
                        animated: true,
                        offset: 0,
                      });
                      setCategoryIndex({
                        index: index,
                        category: categories[index],
                      });
                      setSortedProduct([
                        ...getProductList(categories[index], products),
                      ]);
                    }}>
                    <Text
                      style={[
                        styles.CategoryText,
                        categoryIndex.index === index
                          ? {color: COLORS.primaryOrangeHex}
                          : {},
                      ]}>
                      {data}
                    </Text>
                    {categoryIndex.index === index ? (
                      <View style={styles.ActiveCategory} />
                    ) : (
                      <></>
                    )}
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
            <FlatList
              ref={ListRef}
              horizontal
              ListEmptyComponent={
                <View style={styles.EmptyListContainer}>
                  <Text style={styles.CategoryText}>No Product Available</Text>
                </View>
              }
              showsHorizontalScrollIndicator={false}
              data={sortedProduct}
              contentContainerStyle={styles.FlatListContainer}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.push('Details', {
                        index: item.index,
                        id: item.id,
                        category: item.category,
                      });
                    }}>
                    <ProductCard
                      id={item.id}
                      index={item.index}
                      category={item.category}
                      thumbnail={item.thumbnail}
                      title={item.title}
                      price={item.title}
                      description={item.description}
                      buttonPressHandler={() => {
                        addProductToCart(item);
                      }}
                      discountPercentage={0}
                      rating={item.rating}
                      stock={0}
                      brand={item.brand}
                      images={item.images}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScreenTitle: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
  },
  InputContainerComponent: {
    flexDirection: 'row',
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
  },
  InputIcon: {
    marginHorizontal: SPACING.space_20,
  },
  TextInputContainer: {
    flex: 1,
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
  CategoryScrollViewStyle: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_20,
    backgroundColor: '',
  },
  CategoryScrollViewContainer: {
    paddingHorizontal: SPACING.space_15,
  },
  CategoryScrollViewItem: {
    alignItems: 'center',
  },
  CategoryText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4,
  },
  ActiveCategory: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex,
  },
  FlatListContainer: {
    gap: SPACING.space_20,
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_30,
    flexGrow: 1,
  },
  EmptyListContainer: {
    width: Dimensions.get('window').width - SPACING.space_30 * 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.space_36 * 3.6,
  },
});

export default HomeScreen;
