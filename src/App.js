import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from 'universal-cookie';

// IMPORT PAGES
import Home from "./pages/Home";

// IMPORT COMPONENTS
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// IMPORT CSS
import './App.css'

const App = () => {
    const cookies = new Cookies(null, { path: '/' });
    const [isLogged, setIsLogged] = useState(false);
    
    useEffect(() => {
        const token = cookies.get('token');
        if(token === undefined)
        {
            setIsLogged(false);
            return;
        }
    }, []);

    return (
        <Router>
            <Header isLogged={isLogged} />
            <div className="app">
                <Routes>
                    <Route path="/" exact element={
                        <Home />
                    } />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;