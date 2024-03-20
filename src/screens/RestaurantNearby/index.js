//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const RestaurantNearby = () => {
    return (
        <View style={styles.container}>
            <View>
                <MapView provider={PROVIDER_GOOGLE}
                zoomEnabled = {true}
                showsCompass = {false}
                maxDelta={90}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
});

export default RestaurantNearby;
