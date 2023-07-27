import {Button, Col, DatePicker, Form, Input, Row,  Spin, TimePicker} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

export const CreateTrainForm = (onFinish, onFinishFailed, submitting) => {

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    return  <Form layout="vertical"
                onFinishFailed={onFinishFailed}
                onFinish={onFinish}
            >
        <Row gutter={16}>
            <Col span={12}>
                <Form.Item
                    initialValue={"ZYCMXQB"}
                    name="trainSymbol"
                    label="trainSymbol"

                    rules={[{required: true, message: 'Please enter train call'}]}
                >
                    <Input  placeholder="Please enter train call"/>

                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    initialValue={"YARDCENTER"}
                    name="departYardCode"
                    label="ENTER DEPARTURE YARD"
                    rules={[{required: true, message: 'Please enter train departure yard'}]}
                >
                    <Input placeholder="Please enter train departure yard"/>
                </Form.Item>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col span={12}>
                <Form.Item

                    name="departureDate"
                    label="ENTER TRAIN DEPARTURE DATE"
                    rules={[{required: true, message: 'Please enter date in format yyyy-mm-dd'}]}
                >
                    <DatePicker placeholder="Please enter train departure date"/>
                </Form.Item>
            </Col>

            <Col span={12}>
                <Form.Item
                    name="departureTime"
                    label="ENTER TRAIN DEPARTURE TIME"
                    rules={[{required: true, message: 'Please enter time in format 00:00'}]}
                >
                    <TimePicker/>

                </Form.Item>
            </Col>

            <Col span={12}>
                <Form.Item
                    initialValue={"MAFORD202"}
                    name="destinationYardCode"
                    label="ENTER TRAIN DESTINATION YARD"
                    rules={[{required: true, message: 'Please enter train destination'}]}
                >
                    <Input placeholder="Please enter train destination"/>
                </Form.Item>
            </Col>
        </Row>
        <Row>
            <Col span={12}>
                <Form.Item >
                    <Button  type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Col>
        </Row>
        <Row>
            {submitting && <Spin indicator={antIcon} />}
        </Row>
    </Form>
}