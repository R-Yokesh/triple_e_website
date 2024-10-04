import React from "react";

const HomeView = React.lazy(() => import('../Views/HomeView'));
const AboutView = React.lazy(() => import('../Views/AboutView'));
const NewsView = React.lazy(() => import('../Views/NewsView'));
const EventView = React.lazy(() => import('../Views/EventView'));
const ContactView = React.lazy(() => import('../Views/ContactView'));




const RoutesData = [
    { path: '/', element: HomeView, name: 'Homepage' },
    { path: '/about', element: AboutView, name: 'About page' },
    { path: '/event', element: EventView, name: 'Event page' },
    { path: '/news', element: NewsView, name: 'News page' },
    { path: '/contact', element: ContactView, name: 'Contact page' }


]

export default RoutesData;