import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserToken = async (isFileUpload = false) => {
  const storedTokenJSON = await AsyncStorage.getItem('@token');
  const token = storedTokenJSON ? JSON.parse(storedTokenJSON).rawData : '';
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': isFileUpload ? 'multipart/form-data' : 'application/json',
    },
  };

  return config;
};
