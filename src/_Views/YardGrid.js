import React, {useEffect, useState} from 'react';
import {Tag} from 'antd';
import {getYardBlocks} from "../Controller/controller";
import {useLocation} from "react-router-dom";

const YardGrid = () => {

    const blocks = [];
    const [trackBlocks,setTrackBlocks] = useState([]);
    const location = useLocation();
    let yardSize = 11; // number of tracks in yard

    const fetchTrackBlocks = () => {
        getYardBlocks()
            .then(res=> res.json())
            .then(jsonData => setTrackBlocks(jsonData));
    }

    useEffect(()=>{
        fetchTrackBlocks();
    },[location]);


    for (let i = 1; i < yardSize  ; i++) {
        displayBlocks(trackBlocks, blocks,i);
    }
    function displayBlocks(trackBlocks, blocks, index) {
        let trackArray = [];

        trackBlocks.forEach((block) => {
            const {carCount,track, trainSymbol} = block;

            if(track===index) {
                trackArray.push(
                    <Tag className={"css-block-view-list"}> {trainSymbol} {carCount}</Tag>
                );
            }
        });
            blocks.push(<ol>{<Tag className={"css-block-view-list"}>Track {index}</Tag>} {trackArray}</ol>)
    }

    return (
        <> {blocks} </>
    );
};





export default YardGrid;