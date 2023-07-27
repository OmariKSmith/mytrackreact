import {createBrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import Home from "./Home";
import MyTrainView from "./MyTrainView";
import MyYardView from "./MyYardView";
import Notfound from "../Notfound";

const MyRouter = ()=> {

    const location = useLocation();
        createBrowserRouter(

            <Routes location={location} key={location.pathname} >
                <Route path='/' element={Home()}/>
                <Route path='/3' element={MyTrainView()}/>
                <Route path ='/4' element={MyYardView()}/>
                <Route path ='*' element={<Notfound/>}/>
            </Routes>
    );
}
export default MyRouter;