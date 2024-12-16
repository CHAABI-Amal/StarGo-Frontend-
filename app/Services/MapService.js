import * as Location from 'expo-location';

class MapboxService {
  async getLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to access location was denied');
      return null;
    }

    let location = await Location.getCurrentPositionAsync({});
    return {
      coords: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
    };
  }
}

export default new MapboxService();
