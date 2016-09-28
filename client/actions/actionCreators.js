import axios from 'axios';
import { browserHistory } from 'react-router';
//fire off actions 
//actions are just objects

//dispatch with info about the action that happened
//BUT this does not update our state. 
//The reducer will do that.

//=============== HOTELS ===============
export const postHotelExpedia = (location, startDate, endDate) => {

  // console.log(location, startDate, endDate);
  return function(dispatch){
    return axiosHotelCall(location, startDate, endDate)
    .then(res => {
      dispatch(hydrateHotelStore(res.data, location, startDate, endDate))
      browserHistory.push('/dashboard')

    })
    .catch(error => console.log(error));
  };
};

export function hydrateHotelStore(expediaHotelInfo, location, startDate, endDate){
  return {
    type: 'POST_HOTEL_EXPEDIA',
    expediaHotelInfo,
    location,
    startDate,
    endDate
  };
}

export function axiosHotelCall(location, startDate, endDate){
  return axios.post('/api/hotelsearch', {
    location,
    startDate,
    endDate
  });
}


//=============== FLIGHTS ===============

//GET AIRPORT CODE FOR FLIGHT SEARCH
export const getFlightCode = (locationForFlightSearch) => {
  // console.log('LOCATIONForFlightSearch', locationForFlightSearch);
  return function(dispatch){
    return axiosFlightCode(locationForFlightSearch)
    .then(res => {
    // console.log('Flight Code Received', res.data)
     // console.log('locationForFlightSearch to hydrate store', locationForFlightSearch);
     dispatch(hydrateFlightStoreCode(res.data, locationForFlightSearch))
    });
  }
}

export function hydrateFlightStoreCode(expediaFlightInfo, locationForFlightSearch){
  return {
    type: 'GET_FLIGHT_CODE',
    expediaFlightInfo,
    locationForFlightSearch
    // startDate,
    // endDate
  };
}

export function axiosFlightCode(locationForFlightSearch){
  // console.log('in axios call, locationForFlightSearch is:', locationForFlightSearch)
  return axios.post('/api/FlightCode', {
      locationForFlightSearch
    });
}


//POST REQ TO EXPEDIA TO SEARCH FOR FLIGHTS BY AIRPORT CODE AND DATES

<<<<<<< 1ad00f266aa9635b106c9326d23289d66aded78e
export const postFlightExpedia = (codeArr, startDate, endDate) => {
  // console.log(codeArr, startDate, endDate);
=======
export const postFlightExpedia = (departureAirport, destinationAirport, startDate, endDate) => {
  // console.log('POST FLIGHT EXPEDIA!', departureAirport, destinationAirport, startDate, endDate);
>>>>>>> feat(flights): Flights now submitting expedia API request
  return function(dispatch){
    return axiosFlightCall(departureAirport, destinationAirport, startDate, endDate)
    .then(res => {
      // console.log('SUBMISSION TO EXPEDIA FLIGHTS', startDate, endDate, departureAirport, destinationAirport, res.data)
      dispatch(hydrateFlightStoreExpedia(res.data, departureAirport, destinationAirport, startDate, endDate))
      browserHistory.push('/dashboard')
    })
    .catch(error => console.log(error));
  };
};

export function axiosFlightCall(departureAirport, destinationAirport, startDate, endDate){
  return axios.post('/api/FlightSearch', {
      departureAirport: departureAirport,
      destinationAirport: destinationAirport,
      startDate: startDate,
      endDate: endDate
    });
}

export function hydrateFlightStoreExpedia(expediaFlightInfo, departureAirport, destinationAirport, startDate, endDate){
  return {
    type: 'POST_FLIGHT_EXPEDIA',
    expediaFlightInfo,
    departureAirport,
    destinationAirport,
    startDate,
    endDate
  };
}

// CAR RENTALS ================================================================
export const getCarRentals = (location, pickUpDate, dropOffDate) => {
  // console.log('>>>>>> INSIDE getCarRentals <<<<<<');
  // console.log('>>>>>> ', location, pickUpDate, dropOffDate);

  return function(dispatch) {
    return axiosCarRentalCall(location, pickUpDate, dropOffDate)
    .then(res => {
      dispatch(hydrateCarRentalStore(res.data, location, pickUpDate, dropOffDate))
      browserHistory.push('/dashboard');
    })
    .catch(error => console.log(error));
  };
};

export const axiosCarRentalCall = (location, pickUpDate, dropOffDate) => {
  return axios.post('/api/carRentalSearch', {
    params : {
      location: location,
      pickUpDate: pickUpDate,
      dropOffDate: dropOffDate
    }
  });
};

export const hydrateCarRentalStore = (expediaCarRentalInfo, location, pickUpDate, dropOffDate) => {
  return {
    type: 'POST_CAR_RENTAL_EXPEDIA',
    expediaCarRentalInfo,
    location,
    pickUpDate,
    dropOffDate
  };
};
