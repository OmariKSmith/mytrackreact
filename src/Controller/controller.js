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

export const createBlock = (cars, trainSymbol) =>
    fetch(`api/v1/createBlock/${trainSymbol}`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cars),
    }).then(checkStatus);


export const getAllTrains = () =>
    fetch("api/v1/getAllTrains",{})
        .then(checkStatus);

export const addTrain = train =>
    fetch("api/v1/addTrain",{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(train)
    }).then(checkStatus);

export const deleteTrain = id =>
    fetch(`api/v1/deleteTrainById/${id}`,{
        method: 'DELETE'
    }).then(checkStatus);






