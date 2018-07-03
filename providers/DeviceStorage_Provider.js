import { AsyncStorage } from 'react-native';

export default new class DeviceStorage {
  async getUser () {
    // Получение объекта { login, password } из AsyncStorage
    let user = await AsyncStorage.getItem('user');

    if(user!=false){
      user = JSON.parse(user);
      return user;
    }else {
      return null;
    }

  }

  async setUser (user) {
    // Запись в AsyncStorage

    if(user==false) {
      return false;
    }

    let result = await AsyncStorage.setItem('user', JSON.stringify(user) );
    
    return result;
  }
}