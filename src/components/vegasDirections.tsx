import GoogleMapReact from 'google-map-react';
import React from 'react';

export const VegasDirections = () => {
  const setMap = ({ map, maps }) => {
    const directionsService = new maps.DirectionsService();
    const directionsDisplay = new maps.DirectionsRenderer();

    directionsDisplay.setMap(map);

    directionsService.route(
      {
        destination: '715 N Nellis Blvd, Las Vegas, NV 89110',
        origin: '2612 Glory View Ln, North Las Vegas, NV 89032',
        travelMode: 'DRIVING',
      }, (result, status) => {
        if (status == 'OK') {
          directionsDisplay.setDirections(result);
        }
      }
    );
  };

  return (
    <div style={{ height: '35vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={
          { key: 'AIzaSyBWxquloo2cs9BJ4NXC7I2oBygORWl0gSc' }
        }
        defaultCenter={{ lat: 36.187, lng: -115.137 }}
        defaultZoom={13}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={setMap}
      >
      </GoogleMapReact>
    </div>
  );
};
