import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults?.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const centre = getCenter(coordinates);
  const [viewPort, setViewPort] = useState({
    width: '100%',
    height: '100%',
    longitude: centre.longitude,
    latitude: centre.latitude,
    zoom: 11,
  });
  console.log(selectedLocation);
  return (
    <ReactMapGL
      mapStyle={process.env.MAPBOX_STYLE}
      mapboxApiAccessToken={process.env.MAPBOX_KEY}
      {...viewPort}
      onViewportChange={(nextViewPort) => setViewPort(nextViewPort)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              role="img"
              aria-label="push-pin"
              className="cursor-pointer text-2xl"
            >
              📌
            </p>
          </Marker>
          {selectedLocation.long && selectedLocation.long == result.long && (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
