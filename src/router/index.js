/**
 * @author: 百米八秒的Rapper
 * @date: 2022-12-05 10:20:13
 * @fileName : index  description: 【  】
 **/
import Home from '../pages/Home'
import Article from '../pages/Article'
import Publish from '../pages/Publish'
import Lay from "@/pages/Layout/lay";
export const routes=[
    {
        path:'/',
        element:<AuthRoute element={<Lay />}/>,
        children:[
            {path:'/',element:<Home />},
            {path:'/article',element:<Article/>},
            {path:'/publish/*',element:<Publish />}

        ]
    }

]