import React from "react";

const HomeView = React.lazy(() => import('../Views/HomeView'));
const AboutView = React.lazy(() => import('../Views/AboutView'));


const RoutesData = [
    { path: '/', element: HomeView, name: 'Homepage' },
    { path: '/about', element: AboutView, name: 'About page' }
]

export default RoutesData;