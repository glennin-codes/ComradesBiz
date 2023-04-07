import React from 'react'
import GoogleMapReact from 'google-map-react';

import { FaMapMarker } from 'react-icons/fa';

// google-map-react/lib/components/Marker'

const Map = () => {
    const defaultProps = {
        center: {
          lat:  -0.5659272502120657,
          lng: 37.32018609457084
        },
        zoom: 11
      };
    return (
        <>
            <div style={{ height: '100%', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBCcTLjRpirB-Vp6Vkv2OksFVcCX7RypSc" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                <FaMapMarker
                
                lat={-0.5659272502120657}
                lng={37.32018609457084}
                style={{ color: 'red' ,fontSize:'20px'}}
              />
                </GoogleMapReact>
            </div>
        </>
    )
}

export default Map

// AIzaSyBCcTLjRpirB-Vp6Vkv2OksFVcCX7RypSc