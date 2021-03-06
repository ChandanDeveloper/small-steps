import DeviceInfo from 'react-native-device-info'

const initApp = () => {
  return {
    type: 'ss/app/INIT_APP',
    payload: {
      deviceId: DeviceInfo.getUniqueID(),
      timezone: DeviceInfo.getTimezone()
    }
  }
}

export default {
  initApp
}
