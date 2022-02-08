import { useMediaQuery } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
import React from 'react';

import useStyles from './styles';

const Map = ({setCoordinates, setBounds, coordinates}) => {

    const classes = useStyles();
    const isMobile = useMediaQuery(('min-width:600px'));

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys = {{key:'AIzaSyDipbFnD2tzX5XviXP13PrbezoQDLWeDPo'}}
                defaultCenter = {coordinates}
                center = {coordinates}
                defaultZoom = {14}
                margin = {[50, 50, 50, 50]}
                options = {''}
                onChange = {(e) => {
                    setCoordinates({lat: e.center.lat, lng: e.center.lng});
                    setBounds({sw: e.bounds.sw, ne: e.bounds.ne});
                }}
                onChildClick = {''}
            >

            </GoogleMapReact>

        </div>
    );
}

export default Map;