import React from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer";
import UserList from "./components/UserList";


const App = () => {
    return (
        // header and footer are child components of BrowserRouter
        <BrowserRouter>
            <UserList/>
            <Header/>
            <Footer/>
        </BrowserRouter>
    );
};


export default App;
