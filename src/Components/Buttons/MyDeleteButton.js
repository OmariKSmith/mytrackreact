import {Button, Popconfirm} from "antd";


import {deleteTrain} from "../../Controller/controller";
import {successNotification} from "../Notification";
import {MyException} from "../../Exceptions/MyException";
import {MinusOutlined} from "@ant-design/icons";

const removeTrain = (trainId, callback)=>{
    deleteTrain(trainId).then(()=>{
        successNotification("Train deleted",`Train with id of ${trainId} was deleted`);
        callback();
    }).catch(err => MyException(err,"There was an issue @DeleteTrain")
    )
}

export const MyDeleteButton = (train,fetchTrains) => {
    return  <Popconfirm
        placement='topRight'
        title={`Are your sure to delete ${train.trainSymbol}`}
        onConfirm={() => removeTrain(train.id, fetchTrains)}
        okText='Yes'
        cancelText='No'>

        <Button className={"css-button"}  type="default" icon={<MinusOutlined />} shape="round" size="small">
            Delete Train
        </Button>

    </Popconfirm>
}

