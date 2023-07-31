import {Drawer, Button, Divider} from 'antd';

import React, {useEffect, useState} from "react";

import CarTable from "../Tables/CarTable";
import {
    createBlock,
    getCarsByTrack
} from "../../Controller/controller";

import {MyException} from "../../Exceptions/MyException";
import {successNotification} from "../Notification";
import {useLocation} from "react-router-dom";


function CreateBlockDrawer({showCreateBlockDrawer, setShowCreateBlockDrawer, fetchTrains,trainSymbol}) {
    const [blockList, setBlockList] = useState([]);
    const [cars, setCars]= useState([]);
    const [trackNumber,setTrackNumber] = useState(1);
    const [submitting,setSubmitting] = useState(false);
    let [selectTrackValues,setSelectTrackValues] = useState([]);

    //Replace with db call
    const trackNumberValues = [
        {
            id: "1", trackNum: "1"
        },
        {
            id: "2", trackNum: "2"
        },
        {
            id: "3", trackNum: "3"
        },
        {
            id: "4", trackNum: "4"
        },
        {
            id: "5", trackNum: "5"
        },
        {
            id: "6", trackNum: "6"
        },
        {
            id: "7", trackNum: "7"
        },
        {
            id: "8", trackNum: "8"
        }
    ];
    const location = useLocation();

    const [select, setSelect] = useState({
        selectedRowKeys: [],
        loading: false,
    });

    useEffect(()=>{
        setSelectTrackValues(trackNumberValues);
        setCars([]);
        setTrackNumber(1)
    },[location])

    const fetchCars = (trackNumber) => {
        getCarsByTrack(trackNumber)
            .then(res=> res.json())
            .then(jsonData => setCars(jsonData));
    }
    const onCLose = () => {
        setSelect(false);
        setCars([]);
        setShowCreateBlockDrawer(false);
        fetchTrains();
    }
    function handleSearch (){
        fetchCars(trackNumber);
        setSelect(false);
    }

    const handleSubmit =() => {
        blockList.trainSymbol = ""
        createBlock(blockList,trainSymbol)
            .then(()=>{
                successNotification("Block successfully added")
            }).catch(err =>{
                MyException(err,"There was an issue @CarTable ");
        }).finally(()=>{
            setTrackNumber(1);
        });

        setSelect(false);
    }

    const onFinish = () => {
        setSubmitting(true);
    };

    const onFinishFailed = errorInfo => {
        alert(JSON.stringify(errorInfo, null, 2));
    };


    function trackMapper() {

        return <div>
            <select defaultValue={1}
                    className={"custom-select"}
                    onChange={e => setTrackNumber(e.target.value)}
                    onLoad={e => setTrackNumber(e.target.value)}
            >
                {
                    selectTrackValues.map((opts) => <option>{opts.trackNum}</option>)
                },

            </select>

            <Button style={{height: "40px"}}
                    onClick={() => handleSearch()}>SEARCH</Button>
        </div>;
    }

    return <div>
        <Drawer
            title="Create Block"
            width={1200}
            height={800}
            onClose={onCLose}
            open={showCreateBlockDrawer}
            bodyStyle={{paddingBottom: 80}}
            placement={'left'}
            onFinish={onFinish}
            onFinishFailed ={onFinishFailed}
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
            <Divider orientationMargin={0} orientation={"left"}>BLOCK FOR {trainSymbol}</Divider>
            <Divider orientationMargin={0} orientation={"left"}>SELECT TRACK</Divider>
            {trackMapper()}
            {CarTable(trainSymbol, cars, select, setSelect, blockList, setBlockList)}
            <Button onClick={handleSubmit} type={"primary"}>Submit</Button>
        </Drawer>
    </div>
}

export default CreateBlockDrawer;