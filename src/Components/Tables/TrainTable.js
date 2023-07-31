import React, {useState} from "react";

import {Table} from "antd";
import AddBlockButton from "../Buttons/AddBlockButton";
import {MyDeleteButton} from "../Buttons/MyDeleteButton";

const TrainTable = (trains,fetchTrains, cars,setCars,  showCreateBlockDrawer,setShowCreateBlockDrawer,trainSymbol, setTrainSymbol) =>{

    /* TABLE OPTIONS to be implemented later
    const [loading, setLoading] = useState(false);

    const [filteredInfo, setFilteredInfo] = useState(false);
    */
    const [sorted, setSorted] = useState(false);
    const columns = [


        {
            title: 'TRAIN SYMBOL',
            dataIndex: 'trainSymbol',
            key: 'trainSymbol',
            width: 150,
            sorter: (a, b) => a.trainSymbol -b.trainSymbol
        },
        {
            title: 'DEPART YARD CODE',
            dataIndex: 'departYardCode',
            key: 'departYardCode',
            width: 150,
            sorter: (z, b) => z.departYardCode - b.departYardCode,
        },

        {
            title: 'DEPARTURE DATE',
            dataIndex: 'departureDate',
            key: 'departureDate',
            width: 190,
            sorter: (a, b) => a.departureDate -b.departureDate,
        },
        {
            title: 'DEPARTURE TIME',
            dataIndex: 'departureTime',
            key: 'departureTime',
            width: 150,
            sorter: (a, b) => a.departureTime.localeCompare(b.departureTime)
        },
        {
            title: 'DESTINATION YARD CODE',
            dataIndex: 'destinationYardCode',
            key: 'destinationYardCode',
            width: 150,
            sorter: (a, b) => a.destinationYardCode -b.destinationYardCode,
        },
        {
            title: 'LENGTH',
            dataIndex: 'trainLength',
            key: 'trainLength',
            width: 150,
            sorter: (a, b) => a.trainLength.localeCompare(b.trainLength),
        },
        {
            title: 'CAR_COUNT',
            dataIndex: 'carCount',
            key: 'carCount',
            width: 150,
            sorter: (a, b) => a.carCount.localeCompare(b.carCount),
        },

        {
            title: 'OPTIONS',
            dataIndex: 'action',
            align: 'center',
            key: 'action',
            width: 150,
            render: (text, train) =>
                <>
                    {MyDeleteButton(train, fetchTrains)}
                </>
        },

        {
            title: 'BLOCK ACTIONS',
            dataIndex: 'action',
            align: 'center',
            key: 'action',
            width: 150,
            render: (text, train) =>
                <>
                    {AddBlockButton(showCreateBlockDrawer,setShowCreateBlockDrawer, train, trainSymbol,setTrainSymbol,"Add Block")}
                </>
        }
    ];

    function handleChange ()  {
        setSorted(!sorted);
    }

    return (
        <div>
            <Table className="dataTable"
                   dataSource={trains}
                   bordered
                   columns={columns}

                   onChange={()=>handleChange()}
                   rowKey={(train) => train.id}
            >
            </Table>
        </div>
    );
};

export default TrainTable;