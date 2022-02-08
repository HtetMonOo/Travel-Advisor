import {
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
  Select,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import React, { createRef, useEffect, useState } from "react";

import useStyles from "./styles";
import PlaceDetail from "../PlaceDetail/PlaceDetail";

const List = ({ places, childClicked, isLoading }) => {
  console.log("List");
  const classes = useStyles();
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [elrefs, setElrefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elrefs[i] || createRef());
    setElrefs(refs);
  }, [places]);

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurant, Hotels and Attractions around you
      </Typography>
      {isLoading ? (
        <Typography className={classes.loading}>
          <CircularProgress size="5rem" />
        </Typography>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid item key={i} xs={12}>
                <PlaceDetail
                  place={place}
                  selected={Number(childClicked) === i}
                  refProp={elrefs[i]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
