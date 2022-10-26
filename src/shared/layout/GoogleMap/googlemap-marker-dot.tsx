import React from 'react';
import './google-map-styles.scss';

const GoogleMapMarkerDot = props => (
  <div {...props.location} className={`google_marker_dot ${props.className}`}>
    {props.children}
  </div>
);

export default GoogleMapMarkerDot;
