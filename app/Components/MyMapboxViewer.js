// import React, { Component } from 'react';
// import { View, StyleSheet, Text } from 'react-native';
// import MapView, { UrlTile, Marker } from 'react-native-maps';
// import MapboxService from '../Services/MapService';

// class MyMapboxViewer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       location: null,
//       errorMessage: null,
//     };
//   }

//   async componentDidMount() {
//     const location = await MapboxService.getLocation();
//     if (location) {
//       this.setState({ location });
//     } else {
//       this.setState({ errorMessage: 'Failed to get location' });
//     }
//   }

//   render() {
//     const { location, errorMessage } = this.state;

//     return (
//       <View style={styles.container}>
//         {location ? (
//           <MapView
//             style={styles.map}
//             initialRegion={{
//               latitude: location.coords.latitude,
//               longitude: location.coords.longitude,
//               latitudeDelta: 0.0922,
//               longitudeDelta: 0.0421,
//             }}
//           >
//             {/* Mapbox Tile Source */}
//             <UrlTile
//               /**
//                * Mapbox Tile URL: Include your token
//                */
//               urlTemplate={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidXNlcmF5YTE3IiwiYSI6ImNtNHBzZ240eTB0YmIybXNuN3czZHo4enYifQ.cKG7v7KZOEFIPnzWVXIVCw`}
//               maximumZ={19}
//               flipY={false}
//             />
//             <Marker
//               coordinate={{
//                 latitude: location.coords.latitude,
//                 longitude: location.coords.longitude,
//               }}
//               title="My Location"
//               description="You are here!"
//             />
//           </MapView>
//         ) : (
//           <Text style={styles.error}>{errorMessage || 'Loading map...'}</Text>
//         )}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
//   error: {
//     textAlign: 'center',
//     marginTop: 20,
//     fontSize: 16,
//     color: 'red',
//   },
// });

// export default MyMapboxViewer;




import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import MapboxService from '../Services/MapService';

const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoidXNlcmF5YTE3IiwiYSI6ImNtNHBzZ240eTB0YmIybXNuN3czZHo4enYifQ.cKG7v7KZOEFIPnzWVXIVCw';

class MyMapboxViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      destination: null,
      polylineCoordinates: [],
      errorMessage: null,
    };
  }

  async componentDidMount() {
    const location = await MapboxService.getLocation();
    if (location) {
      this.setState({ location });
    } else {
      this.setState({ errorMessage: 'Failed to get location' });
    }
  }

  handleMapPress = async (e) => {
    const { location } = this.state;
    const { latitude, longitude } = e.nativeEvent.coordinate;

    // Set the destination to the tapped coordinates
    this.setState({
      destination: { latitude, longitude },
      polylineCoordinates: [],
    });

    // Fetch the route using Mapbox Directions API
    const directionsUrl = `https://api.mapbox.com/directions/v5/mapbox/driving/${location.coords.longitude},${location.coords.latitude};${longitude},${latitude}?geometries=geojson&access_token=${MAPBOX_ACCESS_TOKEN}`;

    const response = await fetch(directionsUrl);
    const data = await response.json();

    if (data.routes.length > 0) {
      const coordinates = data.routes[0].geometry.coordinates.map((coord) => ({
        latitude: coord[1],
        longitude: coord[0],
      }));
      this.setState({ polylineCoordinates: coordinates });
    } else {
      this.setState({ errorMessage: 'Failed to fetch route' });
    }
  };

  render() {
    const { location, destination, polylineCoordinates, errorMessage } = this.state;

    return (
      <View style={styles.container}>
        {/* Map View */}
        {location ? (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onPress={this.handleMapPress} // Capture tap on the map
          >
            {/* Marker for Current Location */}
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title="My Location"
            />

            {/* Marker for Destination */}
            {destination && (
              <Marker coordinate={destination} title="Destination" pinColor="blue" />
            )}

            {/* Route Polyline */}
            {polylineCoordinates.length > 0 && (
              <Polyline coordinates={polylineCoordinates} strokeWidth={4} strokeColor="blue" />
            )}
          </MapView>
        ) : (
          <Text style={styles.error}>{errorMessage || 'Loading map...'}</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  error: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'red',
  },
});

export default MyMapboxViewer;
