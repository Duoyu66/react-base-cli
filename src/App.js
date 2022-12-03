import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Layout'
import Login from './pages/Login'
import {Button} from "antd";

function App() {
    return (
        <BrowserRouter>
            <div className="App">

                <Link to="/login" className="link">
                    <Button type="primary">登录</Button>
                </Link>
                <Link to="/home" className="link">
                    <Button type="primary">首页</Button>
                </Link>
            {/*    配置路由规则*/}
            <Routes>
                <Route path="*" element={<Home to="/"/>} />
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
            </Routes>

        </div>
</BrowserRouter>

)
    ;

}

export default App;
