import React, {FC, useEffect, useState} from 'react';
import {useFormik} from 'formik';
import {Text, TouchableOpacity, View, ScrollView, Image} from 'react-native';
import styles from './login.styles';
import Input from '../../components/textfields/Input';
import {ButtonType} from '../../lib/enums.atom';
import Button from '../../components/buttons/Button.component';
import {
  faLock,
  faEnvelope,
  faUser,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {registerSchema} from '../../lib/schema/authForm';
import {useAppDispatch, useAppSelector} from '../../redux/typings';
import {registerThunk} from '../../features/auth/auth.thunk';
import {ApiRequestStatus} from '../../type/api.types';

type Props = {
  navigation?: any;
};

const RegisterScreen: FC<Props> = ({navigation}) => {
  const {requestResponse} = useAppSelector(state => state.authSlice);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (values: any) => {
    setIsLoading(true);
    console.log('infos', values);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {confirmPassword, ...valuesWithoutConfirmPassword} = values;
    console.log('user values are', valuesWithoutConfirmPassword);
    dispatch(registerThunk(valuesWithoutConfirmPassword));
  };

  useEffect(() => {
    const {status, error, data} = requestResponse;

    if (status === ApiRequestStatus.FULFILLED) {
      console.log(data?.message || error?.message || data?.error);
      // dispatch(
      //   showNotification({
      //     message: data?.message || error?.message || data?.error,
      //     type: MessageType.SUCCESS,
      //   }),
      // )
      const fetchAndRedirect = async () => {
        setIsLoading(false);
        console.log('user', data.user, data.token);
        if (data.user?.role && data.token) {
          navigation.navigate('Main Stack');
        }
      };

      fetchAndRedirect();
    } else if (status === ApiRequestStatus.REJECTED) {
      console.log(error?.message || data?.error);
      // dispatch(
      //   showNotification({ message: error?.message || data?.error, type: MessageType.ERROR }),
      // )
      // setTimeout(() => {
      //   dispatch(resetAuthState())
      // }, 3000)
      setIsLoading(false);
      console.log('eror');
    }
  }, [dispatch, navigation, requestResponse]);

  const {
    values,
    errors,
    touched,
    // isSubmitting,
    // handleBlur,
    handleChange,
    // isValid,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      role: 'user',
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <View style={styles.child}>
        <Image
          style={styles.image}
          source={require('../../assets/images/Login.jpg')}
        />
      </View>
      <ScrollView style={{...styles.form}}>
        <Text style={styles.title}>Get Started</Text>
        <View style={styles.space} />
        <Text style={styles.subTitle}>Please provide the following</Text>
        <View style={styles.space} />
        <Input
          text={values.name}
          setText={text => handleChange('name')(text)}
          icon={faUser}
          placeholder="Enter username"
          error={touched.name && errors.name}
        />
        <View style={styles.space} />
        <Input
          text={values.phoneNumber}
          setText={text => handleChange('phoneNumber')(text)}
          icon={faPhone}
          placeholder="Enter phone number"
          error={touched.phoneNumber && errors.phoneNumber}
        />
        <View style={styles.space} />
        <Input
          text={values.email}
          setText={text => handleChange('email')(text)}
          placeholder="Enter email"
          icon={faEnvelope}
          error={touched.email && errors.email}
        />
        <View style={styles.space} />
        <Input
          text={values.password}
          setText={text => handleChange('password')(text)}
          placeholder="Enter password"
          icon={faLock}
          error={touched.password && errors.password}
          secure
        />
        <View style={styles.space} />
        <Input
          text={values.confirmPassword}
          setText={text => handleChange('confirmPassword')(text)}
          placeholder="Confirm Password"
          icon={faLock}
          error={touched.confirmPassword && errors.confirmPassword}
          secure
        />
        <View style={styles.space} />
        <Button
          btnText="Register"
          btnType={ButtonType.PRIMARY}
          onPress={handleSubmit}
          // disabled={!isValid}
          loading={isLoading}
        />
        <View style={styles.divider}>
          <View style={styles.horizontalRule} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.horizontalRule} />
        </View>
        <View style={styles.registerWrapper}>
          <Text style={styles.registerText}>Already have an Account ?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={styles.registerButtonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;
