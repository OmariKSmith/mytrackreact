import {Divider, Table} from 'antd';
import React, {useEffect, useState} from "react";


import {motion} from "framer-motion";



function CarTable (trainSymbol, cars, select, setSelect, blockList, setBlockList){
    const [filteredInfo, setFilteredInfo] = useState(false);

    const columns =[

        {
            title: 'TRACK_SEQ',
            dataIndex: 'trackSeq',
            key: 'trackSeq',
            sorter: (a, b) => a.trackSeq -b.trackSeq,
        },
        {
            title: 'OWNER_ID',
            dataIndex: 'ownerID',
            key: 'ownerID',
            sorter: (a, b) => a.ownerID.localeCompare(b.ownerID),
            filters: [
                {text: "CN", value: "CN"},
                {text: "CP", value: "CP"},
                {text: "CSX", value: "CSX"},
                {text: "UP", value: "UP"},
            ],
            filteredValue: filteredInfo.ownerID || null,
            onFilter: (value, record) => String(record.ownerID).includes(value),
        },
        {
            title: 'SERIES_CODE',
            dataIndex: 'seriesCode',
            key: 'seriesCode',
            sorter: (a, b) => a.seriesCode -b.seriesCode,
        },
        {
            title: 'TYPE_CODE',
            dataIndex: 'typeCode',
            key: 'typeCode',
            sorter: (a, b) => a.typeCode.localeCompare(b.typeCode),
            filters: [
                {text: "BOX", value: "BOX"},
                {text: "GON", value: "GON"},
                {text: "TNK", value: "TNK"},
                {text: "FLT", value: "FLT"},
            ],
            filteredValue: filteredInfo.typeCode || null,
            onFilter: (value, record) => String(record.typeCode).includes(value),
        },

        {
            title: 'LENGTH',
            dataIndex: 'carLength',
            key: 'carLength',
            sorter: (a, b) => a.carLength -b.carLength,
        },

        {
            title: 'HEALTH_CODE',
            dataIndex: 'healthCode',
            key: 'healthCode',
            sorter: (a, b) => a.healthCode.localeCompare(b.healthCode),
            filters: [
                {text: "A", value: "A"},
                {text: "U", value: "U"},
                {text: "B", value: "B"},
            ],
            filteredValue: filteredInfo.healthCode || null,
            onFilter: (value, record) => String(record.healthCode).includes(value),
        },
        {
            title: 'TRACK_ID',
            dataIndex: "track",
            key: "track",
            sorter: (a, b) => a.track - b.track,
        }
    ];

    const { selectedRowKeys, loading } = select;

    useEffect(() => {

    },[]);


    const handleChange = (_,filter) => {
        setFilteredInfo(filter);
    }


    const rowSelection = {
        selectedRowKeys,
        onChange: (selectedRowKeys, ) => {
            setSelect({
                selectedRowKeys: selectedRowKeys
            });
        },
        onSelect:(record,selected, selectedRows)=>{
            setBlockList(selectedRows);

        },

        onSelectAll:(selected, selectedRows)=>{
            for (let i = 0; i < selectedRows.length; i++) {

            }

                if(selected){
                    setBlockList(selectedRows);
                }
                else{
                    setBlockList([]);
                }
        }
    };
    return (

        <div>
            <Divider orientationMargin={0} orientation={"left"}>SELECT CARS</Divider>
            <motion.div className={"content"}
                        initial={{opacity: 0, width: 0}}
                        animate={{opacity: 1,width: "100%"}}
                        transition={{delay: 1.7}}
                        exit={{opacity: 0, width:"100%"}}>
            <Table
                columns={columns}
                dataSource={cars}
                loading={loading}
                rowSelection={rowSelection}
                rowKey={(car) => car.id}
                onChange={handleChange}
            />
            </motion.div>

        </div>
    );

}
export default CarTable;