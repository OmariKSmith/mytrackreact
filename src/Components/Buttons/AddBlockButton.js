import {Button} from "antd";
import {PlusOutlined} from "@ant-design/icons";



function AddBlockButton(showDrawer, setShowDrawer,train, trainSymbol,setTrainSymbol,title) {
      return  <Button className={"css-button"}
                      onClick={() =>
            {
                setShowDrawer(!showDrawer);
                setTrainSymbol(train.trainSymbol);
            }
        }

        type="default" shape="round" icon={<PlusOutlined />} size="small" >

        {title}
    </Button>
}


export default AddBlockButton;