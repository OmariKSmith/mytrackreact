import {Button} from "antd";
import {PlusOutlined} from "@ant-design/icons";

function MyAddButton(useState, setUseState,title) {
    return  <Button className={"css-button"}
                    onClick={() => setUseState(!useState)}
        type="default" shape="round" icon={<PlusOutlined />} size="small">
        {title}
    </Button>
}

export default MyAddButton;