import axios from 'axios';
import { browserHistory } from 'react-router';
//fire off actions 
//actions are just objects

//dispatch with info about the action that happened
//BUT this does not update our state. 
//The reducer will do that.

//=============== TRIP DATA ===============
export const postTripData = (location, startDate, endDate, email, loggedIn) => {
  return function(dispatch) {
    return axiosTripCall(location, startDate, endDate)
    .then(res => {
      dispatch(hydrateTripStore(res.data, location, startDate, endDate, email, loggedIn))
      browserHistory.push('/dashboard');
    })
    .catch(error => console.log(error));
  };
};

export function hydrateTripStore(tripData, location, startDate, endDate, email, loggedIn){
  return {
    type: 'POST_TRIP_DATA',
    tripData,
    location,
    startDate,
    endDate,
    email,
    loggedIn
  };
}

export function axiosTripCall(location, startDate, endDate){
  return axios.post('/api/trips', {
    location,
    startDate,
    endDate
  });
};

<<<<<<< dabe2e8f606cb2f11ae22fa6ce608fabdbef8574
<<<<<<< 734d224cb0fe208a4eadd88a4296cd2480df2597
<<<<<<< 89404abda2599c69ae07cfce0bb0357c03f26fb3
<<<<<<< ec7d3b6da9bd5d46bc92108749f93501751b0d78
<<<<<<< 23f41d0253ac4520f5dc54ec2e416eacb8724e60
<<<<<<< dab3f78c5b204eee0675d3152d413216c5bce6ab
<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
<<<<<<< b1fc23a8d6c912170028de6fa20419b3eda4471f
<<<<<<< 371eff1c0641067453a159c01cbb934104e5309c
=======
=======
=======
=======
<<<<<<< bd727bb550119863c1dc38e9607c40ca1c8ab1ad
>>>>>>> Merge conflicts resolved
<<<<<<< 942e4c46409c03f0da04216e5025bc2872593f3e
>>>>>>> revert(Frontend): Frontend routing for login reversed
<<<<<<< 4d4867ba2ceca8bfeb8a857e3406fc46433287c8
>>>>>>> feat(Database): User email linked to each table

=======
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
=======
>>>>>>> feat(Database): User email linked to each table

<<<<<<< cba7860f98464323c21957b41552c98bb0bd5445
<<<<<<< cac1a4bc6d44d3610c4146ac9259da7cd387c936
// BELOW: TO BE REFACTORED/PURGED

//=============== HOTELS ===============
// export const postHotelExpedia = (location, startDate, endDate) => {

//   // console.log(location, startDate, endDate);
//   return function(dispatch){
//     return axiosHotelCall(location, startDate, endDate)
//     .then(res => {
//        // console.log("GET HOTEL", res.data)
//        console.log('============')
//        console.log(res.data)
//        console.log('============')
//       dispatch(hydrateHotelStore(res.data, location, startDate, endDate))
//       browserHistory.push('/dashboard')

//     })
//     .catch(error => console.log(error));
//   };
// };

// export function hydrateHotelStore(expediaHotelInfo, location, startDate, endDate){
//   return {
//     type: 'POST_HOTEL_EXPEDIA',
//     expediaHotelInfo,
//     location,
//     startDate,
//     endDate
//   };
// }

// export function axiosHotelCall(location, startDate, endDate){
//   return axios.post('/api/trips', {
//     location,
//     startDate,
//     endDate
//   });
// }

=======
=======
<<<<<<< 734d224cb0fe208a4eadd88a4296cd2480df2597
export const login = () => {
  console.log("You get this far");
  return function(dispatch) {
    return axiosLogin()
    .then(res => {
      console.log("You don't get to here");
      dispatch(hydrateLoginStore(res.data))
      browserHistory.push('/api/auth/google');
    })
    .catch(error => console.log(error));
  };
};

export function hydrateLoginStore(loginData){
  return {
    type: 'GET_LOGIN',
    loginData
  };
}

<<<<<<< c89939f1f83f6cdb2ea8e61d2015449a3106c0e0
<<<<<<< 9add38837ff52066af48823227777537884c289a
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
<<<<<<< 6df3551360344106de446e696515d64f20d8e2dd
>>>>>>> revert(Frontend): Frontend routing for login reversed
<<<<<<< 2120f9ccaab1fcea4aff7a5e3979b7e6359257f4
=======

<<<<<<< e28ba6d77464595c58479854beb377373007492f
>>>>>>> feat(Database): User email linked to each table
//=============== DATABASE DATA ===============

export const getDatabaseData = () => {
  return function(dispatch) {
    return axiosDBCall()
    .then(res => {
      dispatch(hydrateDBStore(res.data))
      browserHistory.push('/dashboard');
    })
    .catch(error => console.log(error));
  };
};

export function axiosDBCall(){
  return axios.get('/api/dbData', {
  
  });
};

export function hydrateDBStore(dbData){
  return {
    type: 'GET_DB_DATA',
    dbData
  };
}


<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
export function axiosLogin(){
  return axios.get('/api/auth/google')
};
<<<<<<< b1fc23a8d6c912170028de6fa20419b3eda4471f
>>>>>>> feat(Database): User email linked to each table
=======
=======
=======
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed

<<<<<<< 0d12075c1445af27817d0e7b6c8147b96d2e004c
// BELOW: TO BE REFACTORED/PURGED

//=============== HOTELS ===============
// export const postHotelExpedia = (location, startDate, endDate) => {

//   // console.log(location, startDate, endDate);
//   return function(dispatch){
//     return axiosHotelCall(location, startDate, endDate)
//     .then(res => {
//        // console.log("GET HOTEL", res.data)
//        console.log('============')
//        console.log(res.data)
//        console.log('============')
//       dispatch(hydrateHotelStore(res.data, location, startDate, endDate))
//       browserHistory.push('/dashboard')

//     })
//     .catch(error => console.log(error));
//   };
// };

// export function hydrateHotelStore(expediaHotelInfo, location, startDate, endDate){
//   return {
//     type: 'POST_HOTEL_EXPEDIA',
//     expediaHotelInfo,
//     location,
//     startDate,
//     endDate
//   };
// }

// export function axiosHotelCall(location, startDate, endDate){
//   return axios.post('/api/trips', {
//     location,
//     startDate,
//     endDate
//   });
// }

<<<<<<< 734d224cb0fe208a4eadd88a4296cd2480df2597
<<<<<<< 3b3d89d046bdc010a77e13b442c4145bf0356720
<<<<<<< 4b1fb89bd94788b963cd8b0890eddf7f13109b54
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
export function axiosLogin(){
  return axios.get('/api/auth/google')
};
>>>>>>> Merge conflicts resolved
=======
=======
=======
=======
export const login = () => {
  console.log("You get this far");
  return function(dispatch) {
    return axiosLogin()
    .then(res => {
      console.log("You don't get to here");
      dispatch(hydrateLoginStore(res.data))
      browserHistory.push('/api/auth/google');
    })
    .catch(error => console.log(error));
  };
};

export function hydrateLoginStore(loginData){
  return {
    type: 'GET_LOGIN',
    loginData
  };
}
=======
<<<<<<< 942e4c46409c03f0da04216e5025bc2872593f3e
>>>>>>> revert(Frontend): Frontend routing for login reversed

<<<<<<< 9add38837ff52066af48823227777537884c289a
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======


>>>>>>> feat(Database): User email linked to each table
//=============== DATABASE DATA ===============

export const getDatabaseData = () => {
  return function(dispatch) {
    return axiosDBCall()
    .then(res => {
      dispatch(hydrateDBStore(res.data))
      browserHistory.push('/dashboard');
    })
    .catch(error => console.log(error));
  };
};

export function axiosDBCall(){
  return axios.get('/api/dbData', {
  
  });
};

export function hydrateDBStore(dbData){
  return {
    type: 'GET_DB_DATA',
    dbData
  };
}


<<<<<<< c0038fcac80a6f3ec1eb460db00a3c27fd7f428c
<<<<<<< c42c6ab96797fd247154a4ed3ffba178c975f33d
<<<<<<< 6425d50e55c46291fb694b3bcfad16cb5e1fb814
<<<<<<< ec7d3b6da9bd5d46bc92108749f93501751b0d78
export function axiosLogin(){
  return axios.get('/api/auth/google')
};
<<<<<<< 6df3551360344106de446e696515d64f20d8e2dd
>>>>>>> feat(Database): User email linked to each table
<<<<<<< dab3f78c5b204eee0675d3152d413216c5bce6ab
>>>>>>> feat(Database): User email linked to each table
=======
=======
=======
=======
>>>>>>> feat(Database): User email linked to each table
=======
=======
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed

=======
>>>>>>> feat(Database): User email linked to each table
=======

>>>>>>> Merge conflicts resolved
// BELOW: TO BE REFACTORED/PURGED

//=============== HOTELS ===============
// export const postHotelExpedia = (location, startDate, endDate) => {

//   // console.log(location, startDate, endDate);
//   return function(dispatch){
//     return axiosHotelCall(location, startDate, endDate)
//     .then(res => {
//        // console.log("GET HOTEL", res.data)
//        console.log('============')
//        console.log(res.data)
//        console.log('============')
//       dispatch(hydrateHotelStore(res.data, location, startDate, endDate))
//       browserHistory.push('/dashboard')

//     })
//     .catch(error => console.log(error));
//   };
// };

// export function hydrateHotelStore(expediaHotelInfo, location, startDate, endDate){
//   return {
//     type: 'POST_HOTEL_EXPEDIA',
//     expediaHotelInfo,
//     location,
//     startDate,
//     endDate
//   };
// }

// export function axiosHotelCall(location, startDate, endDate){
//   return axios.post('/api/trips', {
//     location,
//     startDate,
//     endDate
//   });
// }

<<<<<<< ec7d3b6da9bd5d46bc92108749f93501751b0d78
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed

>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> Merge conflicts resolved
=======

<<<<<<< 89404abda2599c69ae07cfce0bb0357c03f26fb3
<<<<<<< c42c6ab96797fd247154a4ed3ffba178c975f33d
>>>>>>> feat(Database): User email linked to each table
=======
=======
<<<<<<< 4d4867ba2ceca8bfeb8a857e3406fc46433287c8
<<<<<<< 734d224cb0fe208a4eadd88a4296cd2480df2597
>>>>>>> feat(Database): User email linked to each table
=======
=======
=======
=======
export const login = () => {
  console.log("You get this far");
  return function(dispatch) {
    return axiosLogin()
    .then(res => {
      console.log("You don't get to here");
      dispatch(hydrateLoginStore(res.data))
      browserHistory.push('/api/auth/google');
    })
    .catch(error => console.log(error));
  };
};

export function hydrateLoginStore(loginData){
  return {
    type: 'GET_LOGIN',
    loginData
  };
}

<<<<<<< 9add38837ff52066af48823227777537884c289a
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
//=============== DATABASE DATA ===============

export const getDatabaseData = () => {
  return function(dispatch) {
    return axiosDBCall()
    .then(res => {
      dispatch(hydrateDBStore(res.data))
      browserHistory.push('/dashboard');
    })
    .catch(error => console.log(error));
  };
};

export function axiosDBCall(){
  return axios.get('/api/dbData', {
  
  });
};

export function hydrateDBStore(dbData){
  return {
    type: 'GET_DB_DATA',
    dbData
  };
}


export function axiosLogin(){
  return axios.get('/api/auth/google')
};
<<<<<<< 942e4c46409c03f0da04216e5025bc2872593f3e
=======
<<<<<<< 6df3551360344106de446e696515d64f20d8e2dd
>>>>>>> feat(Database): User email linked to each table
=======
=======

// BELOW: TO BE REFACTORED/PURGED

//=============== HOTELS ===============
// export const postHotelExpedia = (location, startDate, endDate) => {

//   // console.log(location, startDate, endDate);
//   return function(dispatch){
//     return axiosHotelCall(location, startDate, endDate)
//     .then(res => {
//        // console.log("GET HOTEL", res.data)
//        console.log('============')
//        console.log(res.data)
//        console.log('============')
//       dispatch(hydrateHotelStore(res.data, location, startDate, endDate))
//       browserHistory.push('/dashboard')

//     })
//     .catch(error => console.log(error));
//   };
// };

// export function hydrateHotelStore(expediaHotelInfo, location, startDate, endDate){
//   return {
//     type: 'POST_HOTEL_EXPEDIA',
//     expediaHotelInfo,
//     location,
//     startDate,
//     endDate
//   };
// }

// export function axiosHotelCall(location, startDate, endDate){
//   return axios.post('/api/trips', {
//     location,
//     startDate,
//     endDate
//   });
// }

>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed
>>>>>>> revert(Frontend): Frontend routing for login reversed

<<<<<<< d00c73fc96141773edab569d817315ffc5f8e244
>>>>>>> feat(Database): User email linked to each table
=======
// BELOW: TO BE REFACTORED/PURGED

//=============== HOTELS ===============
// export const postHotelExpedia = (location, startDate, endDate) => {

//   // console.log(location, startDate, endDate);
//   return function(dispatch){
//     return axiosHotelCall(location, startDate, endDate)
//     .then(res => {
//        // console.log("GET HOTEL", res.data)
//        console.log('============')
//        console.log(res.data)
//        console.log('============')
//       dispatch(hydrateHotelStore(res.data, location, startDate, endDate))
//       browserHistory.push('/dashboard')

//     })
//     .catch(error => console.log(error));
//   };
// };

// export function hydrateHotelStore(expediaHotelInfo, location, startDate, endDate){
//   return {
//     type: 'POST_HOTEL_EXPEDIA',
//     expediaHotelInfo,
//     location,
//     startDate,
//     endDate
//   };
// }

// export function axiosHotelCall(location, startDate, endDate){
//   return axios.post('/api/trips', {
//     location,
//     startDate,
//     endDate
//   });
// }


<<<<<<< c0038fcac80a6f3ec1eb460db00a3c27fd7f428c
>>>>>>> revert(Frontend): Frontend routing for login reversed
=======
export function axiosLogin(){
  return axios.get('/api/auth/google')
};


<<<<<<< 89404abda2599c69ae07cfce0bb0357c03f26fb3
>>>>>>> Merge conflicts resolved
=======
=======
>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table
>>>>>>> feat(Database): User email linked to each table
=======
>>>>>>> Merge conflicts resolved
//=============== FLIGHTS ===============

//POST REQ TO EXPEDIA TO SEARCH FOR FLIGHTS BY AIRPORT CODE AND DATES

export const postFlightExpedia = (departureAirport, destinationAirport, startDate, endDate, adults, childUnder18, infants) => {
  return function(dispatch){
    return axiosFlightCall(departureAirport, destinationAirport, startDate, endDate, adults, childUnder18, infants)
    .then(res => {
      // console.log('SUBMISSION TO EXPEDIA FLIGHTS', startDate, endDate, departureAirport, destinationAirport, res.data)
      dispatch(hydrateFlightStoreExpedia(res.data, departureAirport, destinationAirport, startDate, endDate, adults, childUnder18, infants))
      browserHistory.push('/dashboard')
    })
    .catch(error => console.log(error));
  };
};

export function axiosFlightCall(departureAirport, destinationAirport, startDate, endDate, adults, childUnder18, infants){
  return axios.post('/api/FlightSearch', {
      departureAirport: departureAirport,
      destinationAirport: destinationAirport,
      startDate: startDate,
      endDate: endDate,
      adults: adults,
      childUnder18: childUnder18,
      infants: infants
    });
}

export function hydrateFlightStoreExpedia(expediaFlightInfo, departureAirport, destinationAirport, startDate, endDate, adults, childUnder18, infants){
  return {
    type: 'POST_FLIGHT_EXPEDIA',
    expediaFlightInfo,
    departureAirport,
    destinationAirport,
    startDate,
    endDate,
    adults,
    childUnder18,
    infants
  };
}

//=============== DB DATA ===============
export const postHotelItin = (email) => {
  return function(dispatch){
    return axiosHotelItin(email)
    .then(res => {
      // console.log('getting into response obj, about to hydrate store', res.data)
      dispatch(hydrateHotelItin(res.data, email))
      browserHistory.push('/dashboard')
    })
    .catch(error => console.log(error));
  };
};

export function axiosHotelItin(email){
  console.log('posting email req', email)
  return axios.post('/api/hotelItin', {
    email
  })
}

export function hydrateHotelItin(hotelItinData, email){
  console.log();
  return {
    type: "POST_HOTEL_ITIN",
    hotelItinData,
    email
  };
<<<<<<< dabe2e8f606cb2f11ae22fa6ce608fabdbef8574
<<<<<<< 23f41d0253ac4520f5dc54ec2e416eacb8724e60
}


//FLIGHTS
export const postFlightItin = (email) => {
  return function(dispatch){
    return axiosFlightItin(email)
    .then(res => {
      console.log('getting into response obj, about to hydrate store', res.data)
      dispatch(hydrateFlightItin(res.data, email))
      browserHistory.push('/dashboard')
    })
    .catch(error => console.log(error));
  };
};

export function axiosFlightItin(email){
  console.log('posting email req', email)
  return axios.post('/api/flightItin', {
    email
  })
}

export function hydrateFlightItin(hotelItinData, email){
  console.log();
  return {
    type: "POST_FLIGHT_ITIN",
    flightItinData,
    email
  };
}

//CARS
export const postCarItin = (email) => {
  return function(dispatch){
    return axiosCarItin(email)
    .then(res => {
      console.log('getting into response obj, about to hydrate store', res.data)
      dispatch(hydrateCarItin(res.data, email))
      browserHistory.push('/dashboard')
    })
    .catch(error => console.log(error));
  };
};

export function axiosCarItin(email){
  console.log('posting email req', email)
  return axios.post('/api/carItin', {
    email
  })
}

export function hydrateCarItin(CarItinData, email){
  console.log();
  return {
    type: "POST_FLIGHT_ITIN",
    flightItinData,
    email
  };
}


=======
}
>>>>>>> Merge conflicts resolved
=======
}
>>>>>>> Merge conflicts resolved
