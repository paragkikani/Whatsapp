// Get Image from storage
import storage from '@react-native-firebase/storage';
import DeviceInfo from 'react-native-device-info';

export const getImage = async urlData => {
  return await storage().ref(urlData).getDownloadURL();
};

export const DeviceId = DeviceInfo.getDeviceId();


