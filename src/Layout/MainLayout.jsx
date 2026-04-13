import React from 'react';
import Navbar from '../Components/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;