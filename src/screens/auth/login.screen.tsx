import React, {FC, useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import styles from './login.styles';

import {faUser, faLock} from '@fortawesome/free-solid-svg-icons';
import Input from '../../components/textfields/Input';
import {ButtonType} from '../../lib/enums.atom';
import Button from '../../components/buttons/Button.component';
import {loginSchema} from '../../lib/schema/authForm';
import {useFormik} from 'formik';
import {useAppDispatch, useAppSelector} from '../../redux/typings';
import {loginThunk} from '../../features/auth/auth.thunk';
import {ApiRequestStatus} from '../../type/api.types';

type Props = {
  navigation?: any;
};

const LoginScreen: FC<Props> = ({navigation}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {requestResponse} = useAppSelector(state => state.authSlice);
  const dispatch = useAppDispatch();

  const onSubmit = async (values: any) => {
    console.log('login success', values);
    setIsLoading(true);
    dispatch(
      loginThunk({
        email: values.email,
        password: values.password,
      }),
    );
  };

  useEffect(() => {
    const {status, error, data} = requestResponse;

    if (status === ApiRequestStatus.FULFILLED) {
      console.log(data?.message || error?.message || data?.error);

      // dispatch(
      //   showNotification({ message: error?.message || data?.error, type: MessageType.SUCCESS }),
      // )
      const fetchAndRedirect = async () => {
        console.log('ime user', data.user, data.token);
        setIsLoading(false);
        if (data.user?.role && data.token) {
          console.log('user', data?.user);
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
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: loginSchema,
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
      <ScrollView style={styles.form}>
        <Text style={styles.title}>Welcome back!</Text>
        <View style={styles.space} />
        <Text style={styles.subTitle}>Please provide your credentials</Text>
        <View style={styles.space} />
        <Input
          text={values.email}
          setText={text => handleChange('email')(text)}
          icon={faUser}
          placeholder="Enter email"
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
        <View style={styles.space} />
        <Button
          btnText="Sign In"
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
          <Text style={styles.registerText}>Do not have an account ?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
