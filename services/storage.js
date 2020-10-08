import { AsyncStorage } from 'react-native';

export const getList = async () => {
  try {
    const value = await AsyncStorage.getItem('HOLDER');
    if (value !== null) {
      return JSON.parse(value);
    }
    return [];
  } catch (error) {
    return []
  }
};

export const setHolder = async (holder) => {
  try {
    const list = await getList();
    list.push(holder);

    await AsyncStorage.setItem(
      'HOLDER',
      JSON.stringify(list)
    );
  } catch (error) {
    // Error saving data
  }
};

export const removeHolder = async (index) => {
  try {
    const list = await getList();
    list.splice(index, 1);
    return await AsyncStorage.setItem(
      'HOLDER',
      JSON.stringify(list)
    );
  } catch (error) {
    // Error saving data
  }
}
