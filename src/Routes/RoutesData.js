import React from "react";

const HomeView = React.lazy(() => import('../Views/HomeView'));


const RoutesData = [
    { path: '/', element: HomeView, name: 'Homepage' },
]

export default RoutesData;