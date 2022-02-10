import { AppBar, InputBase, Toolbar, Typography, Box } from "@material-ui/core";
import { Autocomplete } from "@react-google-maps/api";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";

import useStyles from "./styles";

const Header = ({ setCoordinates }) => {
  const classes = useStyles();

  const [autocomplete, setAutocomplete] = useState("");

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChange = () => {
    const lat = autocomplete.getPlace().geometery.location.lat();
    const lng = autocomplete.getPlace().geometery.location.lng();
    setCoordinates({ lat: lat, lng: lng });
  };
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChange={onPlaceChange}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
