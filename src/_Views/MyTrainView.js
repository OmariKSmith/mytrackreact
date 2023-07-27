import React, {useEffect, useState} from "react";
import CountBar from "../Components/Layout/CountBar";
import MyAddButton from "../Components/Buttons/MyAddButton";
import {Content} from "antd/lib/layout/layout";

import CreateTrainDrawer from "../Components/Drawers/CreateTrainDrawer";

import BannerImage from "../Components/images/train-pictures-40.jpg";
import {motion} from "framer-motion";
import TrainTable from "../Components/Tables/TrainTable";

import {getAllTrains, getCarList} from "../Controller/controller";
import CreateBlockDrawer from "../Components/Drawers/CreateBlockDrawer";
import {useLocation} from "react-router-dom";

const MyTrainView = ()=>{
    const [showDrawer, setShowDrawer] = useState(false);
    const [showCreateBlockDrawer, setShowCreateBlockDrawer] = useState(false);
    const [cars, setCars]= useState([]);
    const [trains,setTrains] = useState([]);
    const [trainLength,setTrainLength] = useState(21);
    const [trainSymbol,setTrainSymbol] = useState('trainSymbol');

    const location = useLocation();
    const fetchTrains = () => {
        getAllTrains()
            .then(res=> res.json())
            .then(jsonData => setTrains(jsonData));
    }

    const fetchCars = () => {
        getCarList()
            .then(res=> res.json())
            .then(jsonData => setCars(jsonData));
    }

    useEffect(()=>{
        fetchTrains();
    },[location])

    return  (
        <motion.div className={"content"}
                    style={{backgroundImage: `url(${BannerImage})`, backgroundRepeat: 'no-repeat', height: "1000px",width: "3000px"}}
                    resizemode="fill"
                    initial={{opacity: 0, width: 0}}
                    animate={{opacity: 1,width: "100%"}}

                    exit={{opacity: 0, width:"100%"}}
        >
            <Content style={{ margin: '16px' }}>

                {CreateTrainDrawer({showDrawer, setShowDrawer,fetchTrains})}
                {CreateBlockDrawer({showCreateBlockDrawer, setShowCreateBlockDrawer, fetchTrains,trainSymbol})}

                <div className="carCounter" style={{ padding: 2, minHeight: 2 }}>
                    {CountBar(trains.length)}
                </div>

                <div className="createTrainButton" style={{ padding: 2, minHeight: 50 }}>
                    {MyAddButton(showDrawer, setShowDrawer, "Create train")}
                </div>

                <div className="carTable" style={{ padding: 2, minHeight: 1 }}>
                    {TrainTable(trains,fetchTrains,cars, setCars,showCreateBlockDrawer,setShowCreateBlockDrawer,trainSymbol, setTrainSymbol,trainLength, setTrainLength,fetchCars)}
                </div>

            </Content>
        </motion.div>
    );
}
export default MyTrainView;