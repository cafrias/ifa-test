import React from 'react'

import GoogleMapReact from 'google-map-react'

const BillingMap = () => {
  return (
    <div style={{ height: '150px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_KEY,
        }}
        defaultCenter={{
          lat: -53.786,
          lng: -67.7002,
        }}
        defaultZoom={12}
      />
    </div>
  )
}

export default BillingMap
