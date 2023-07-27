import {errorNotification} from "../Components/Notification";


export  const GetAllStudentsException =(err, message)=>{
    err.response.json().then(res => {
        console.log(res);
        errorNotification(message,
            `${res.message} ${res.status} ${res.error}`
        )
    });
}