import React from "react";

const HomeView = React.lazy(() => import('../Views/HomeView'));
const AboutView = React.lazy(() => import('../Views/AboutView'));
const NewsView =  React.lazy(() => import('../Views/NewsView'));


const RoutesData = [
    { path: '/', element: HomeView, name: 'Homepage' },
    { path: '/about', element: AboutView, name: 'About page' },
    { path: '/news', element: NewsView, name: 'News page' }

]

export default RoutesData;