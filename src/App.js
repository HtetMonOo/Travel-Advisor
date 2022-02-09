import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { getPlacesData } from './api';

const App = () => {

    console.log("App");

    const [ places, setPlaces ] = useState([]);
    const [ coordinates, setCoordinates ] = useState({});
    const [ bounds, setBounds ] = useState(null);
    const [ childClicked, setChildClicked ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [type, setType] = useState("restaurants");
    const [rating, setRating] = useState("");

    useEffect(() => {
        console.log(bounds);
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude});
        });
    }, []);

    useEffect(() => {
        setIsLoading(true);
        bounds && getPlacesData(type, bounds.sw, bounds.ne)
            .then((data) => {
                setPlaces(data);
                setIsLoading(false);
            });
    }, [type, coordinates, bounds]);

    return (
        <>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={{width: '100%', marginTop: 'auto'}}>
                <Grid xs={12} md={4}>
                    <List places={places}
                    childClicked={childClicked}
                    isLoading={isLoading}
                    type={type}
                    setType={setType}
                    rating={rating}
                    setRating={setRating} />
                </Grid>
                <Grid xs={12} md={8}>
                    <Map 
                        setCoordinates = {setCoordinates}
                        setBounds = {setBounds}
                        coordinates = {coordinates}
                        places = {places}
                        setChildClicked = {setChildClicked}
                    />
                </Grid>
            </Grid>
        </>
    )
  
}

export default App;
