import {Drawer,Button, } from 'antd';

import {useState} from "react";

import {successNotification} from "../Notification";
import {CreateTrainForm} from "../Forms/CreateTrainForm";
import {MyException} from "../../Exceptions/MyException";
import {addTrain} from "../../Controller/controller";
function CreateTrainDrawer({showDrawer, setShowDrawer, fetchTrains}) {
    const onCLose = () => setShowDrawer(false);
    const [submitting,setSubmitting] = useState(false);


    const onFinish = train => {
        setSubmitting(true);

        addTrain(train)
            .then(()=>{
                console.log("Train added");
                onCLose();
                successNotification("Train successfully added");

                console.log(train.trainSymbol);
                fetchTrains();

            }).catch(err =>{
            MyException(err,"There was an issue @CreateTrain ");
        }).finally(()=>{
            setSubmitting(false);
        })
    };
    const onFinishFailed = errorInfo => {
        alert(JSON.stringify(errorInfo, null, 2));
    };

    return <Drawer
        title="Create New  Train"
        width={720}
        onClose={onCLose}
        open={showDrawer}
        bodyStyle={{paddingBottom: 80}}
        footer={
            <div
                style={{
                    textAlign: 'right',
                }}
            >
                <Button onClick={onCLose} style={{marginRight: 8}}>
                    Cancel
                </Button>
            </div>
        }
    >
        {CreateTrainForm(onFinish,onFinishFailed,submitting)}
    </Drawer>
}

export default CreateTrainDrawer;