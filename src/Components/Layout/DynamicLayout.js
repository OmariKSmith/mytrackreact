import {Layout} from "antd";

import {useState} from "react";
import BannerImage from "../images/train-pictures-39.jpg";
import {motion} from "framer-motion";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "../../_Views/Home";

import Notfound from "../../Notfound";
import MyTrainView from "../../_Views/MyTrainView";

import MySider from "./MySider";
import MyYardView from "../../_Views/MyYardView";

const {Header, Footer} = Layout;

export const DynamicLayout = () => {

    const [collapsed,setCollapsed] = useState(false);
    const location = useLocation();

    return( <motion.div className={"layout"}
                       style={{backgroundImage: `url(${BannerImage})`, width: "3000px", height: "1000px", backgroundPositionX: "1900px"}}
                       initial={{opacity: 0}}
                       animate={{opacity: 1}}
                       transition={{delay: 2}}
                       exit={{opacity: 0}}
    >

    <Layout style={{ minHeight: '100vh' }}>

        {MySider(collapsed,setCollapsed)}

        <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Header className="site-layout-background" style={{ padding: 0 }} />

            <Routes location={location} key={location.pathname}>
                <Route path={"/"} element={Home()}></Route>
                <Route path={"/3"} element={MyTrainView()}></Route>
                <Route path ="/4" element={MyYardView()}></Route>
                <Route path ="*" element={<Notfound/>}></Route>
            </Routes>

            <Footer style={{ textAlign: 'center' }}>YARD CENTER ©2020 Created by O.K.Smith</Footer>
        </Layout>

    </Layout>
    </motion.div>
    );
}

