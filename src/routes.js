import About from "./About";
import Subtitle from "./Subtitle";

export default [
    {
        path: '/',
        component: Subtitle,
        exact: true
    },
    {
        path: '/about',
        component: About,
        exact: true,
    }
]