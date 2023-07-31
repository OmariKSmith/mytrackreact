import {Menu} from "antd";
import {
    FileOutlined,
    HomeOutlined,
    TeamOutlined,
    UserOutlined
} from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
import SubMenu from "antd/es/menu/SubMenu";
import {Link} from "react-router-dom";


const MySider =(collapsed,setCollapsed)=>{

    return <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link to={'/'}/>
            </Menu.Item>

            <SubMenu key="sub1" icon={<UserOutlined />} title="Yard Ops">
                <Menu.Item key="3">
                    TrainView
                    <Link to={'/3'}/>
                </Menu.Item>

                <Menu.Item key="4">
                    Block View

                    <Link to={'/4'}/>

                </Menu.Item>

                <Menu.Item key="5">
                    Car View
                    <Link to={'/6'}/>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
                Files
            </Menu.Item>
        </Menu>
    </Sider>
}

export default MySider;