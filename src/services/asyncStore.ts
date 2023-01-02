import AsyncStorage from "@react-native-async-storage/async-storage"

export const writeStore = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
    return { success: true };
  } catch (e) {
    return {
      success: false,
      error: e
    };
  }
}

export const readStore = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return {
      success: true,
      data: value
    };
  } catch(e) {
    return { 
      success: false,
      error: e
    };
  }
}