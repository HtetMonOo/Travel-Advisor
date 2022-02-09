import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOutlinedIcon from "@material-ui/icons/LocalActivityOutlined";
import Rating from "@material-ui/lab/Rating";
import GoogleMapReact from "google-map-react";
import React, { useEffect } from "react";

import useStyles from "./styles";

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
}) => {
  console.log("Map");
  const classes = useStyles();
  const isMobile = useMediaQuery("max-width:600px");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDipbFnD2tzX5XviXP13PrbezoQDLWeDPo" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ sw: e.bounds.sw, ne: e.bounds.ne });
        }}
        onChildClick={(e) => {
          console.log(e);
          setChildClicked(e);
        }}
      >
        {places.length &&
          places.map((place, i) => (
            <div
              className={classes.markerContainer}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {isMobile ? (
                <LocationOutlinedIcon color="primary" fontSize="large" />
              ) : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography
                    className={classes.Typography}
                    variant="subtitle2"
                  >
                    {place.name}
                  </Typography>
                  <img
                    className={classes.pointer}
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                    }
                    alt={place.name}
                  />
                  <Rating size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )}
            </div>
          ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
