

import Home from "../Screens/Home";
import Accept from "../Screens/Accept";
import NotFound from "../Screens/NotFound";

const routes = [{
    path: "/",
    element: Home,
    isPrivate: true,
    exact: true
}, 
{
    path: "/accept",
    element: Accept,
    isPrivate: true,
    exact: true
},  
{
    path: "/*",
    element: NotFound,
    isPrivate: false
}];

export default routes;