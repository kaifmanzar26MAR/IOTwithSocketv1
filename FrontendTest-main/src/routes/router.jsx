import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main"
import Home from "../pages/Home"
import Logs2 from "../pages/Logs2"
import LogsLayout from "../layout/LogsLayout"
import Logs from "../pages/Logs"
import Setting from "../pages/Setting"
import ResponseView from "../pages/ResponseView"

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/alllogs',
                element:<Logs/>
            },
            {
                path:'/setting',
                element:<Setting/>
            },
            {
                path:'responseview',
                element:<ResponseView/>
            }
        ]
    },
    {
        path:'/',
        element:<LogsLayout/>,
        children:[
            {
                path:"/logs",
                element:<Logs2/>
            }
        ]
    },

])

export default router