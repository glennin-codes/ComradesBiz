import React from 'react'
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;


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
                    <AnyReactComponent
                        lat={-0.5659272502120657}
                        lng={ 37.32018609457084}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        </>
    )
}

export default Map

// AIzaSyBCcTLjRpirB-Vp6Vkv2OksFVcCX7RypSc