import {Badge,Tag} from "antd";

function TitleBar  (numberOfCars)  {
    return  <>
        <Tag color="cyan">Number of Trains</Tag>

        <Badge count={numberOfCars} className="site-badge-count-4"/>
        <br/><br/>

    </>
}
export default TitleBar;