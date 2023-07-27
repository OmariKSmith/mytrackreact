import {Content} from "antd/lib/layout/layout";
import BannerImage from "../Components/images/train-pictures-40.jpg";
import {motion} from "framer-motion";
import ProtoGrid from "./YardGrid";
const MyYardView = ()=>{

    return  (
        <motion.div className={"content"}
                    style={{backgroundImage: `url(${BannerImage})`, backgroundRepeat: 'no-repeat', height: "1000px",width: "3000px"}}
                    resizemode="fill"
                    initial={{opacity: 0, width: 0}}
                    animate={{opacity: 1,width: "100%"}}

                    exit={{opacity: 0, width:"100%"}}
        >
            <Content style={{ margin: '16px' }}>
                <h1>Track Blocks</h1>
                <div className="carTable" style={{ padding: 2, minHeight: 1}}>
                    {ProtoGrid()}
                </div>

            </Content>
        </motion.div>
    );
}
export default MyYardView;