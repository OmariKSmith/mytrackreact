import {Col, Divider,  Row} from "antd";

const BlockGrid = () => {
    const style = {
        background: '#0092ff',
        padding: '8px 0',
    };


    return <div>
    <Divider orientation="left">Horizontal</Divider>
    <Row gutter={100}>
        <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
        </Col>

    </Row>

    </div>
}
export default BlockGrid;