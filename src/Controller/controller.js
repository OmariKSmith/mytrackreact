import fetch from 'unfetch';
const checkStatus = response => {
    if (response.ok) {
        return response;
    }
    // convert non-2xx HTTP responses into errors:
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
}
export const getCarList = () =>
    fetch(`api/v1/getCarList`).then(checkStatus);

export const getYardBlocks = () =>
    fetch(`api/v1/getYardBlocks`).then(checkStatus);

export const getCarsByTrack = trackID =>
    fetch(`api/v1/getCarsByTrack/${trackID}`,{
    }).then(checkStatus);

export const updateCarOutboundBlock = (trainSymbol) =>
    fetch(`api/v1/updateCarOutboundBlock`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(trainSymbol)
    }).then(checkStatus);


export const createBlock = (cars, trainSymbol) =>
    fetch(`api/v1/createBlock/${trainSymbol}`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(cars),


    }).then(checkStatus);


export const getAllTrains = () =>
    fetch("api/v1/allTrains",{})
        .then(checkStatus);

export const addTrain = train =>
    fetch("api/v1/addTrain",{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(train)
    }).then(checkStatus);
export const updateTrainLength = trainSymbol =>
    fetch(`api/v1/updateTrainLength`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(trainSymbol)
    }).then(checkStatus);

export const updateTrain = trainSymbol =>
    fetch(`api/v1/updateTrain`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(trainSymbol)
    }).then(checkStatus);

export const deleteTrain = id =>
    fetch(`api/v1/deleteTrainById/${id}`,{
        method: 'DELETE'
    }).then(checkStatus);


export const findBlocksByTrackId = trackID =>
    fetch(`api/v1/findBlocksByTrackId/${trackID}`,{
    }).then(checkStatus);

export const findAllTracks = () =>
    fetch("api/v1/findAllTracks",{})
        .then(checkStatus);

