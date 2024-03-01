import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from 'universal-cookie';
import { axiosService } from "./services/axios";

// IMPORT PAGES
import Home from "./pages/Home";
import News from "./pages/News";
import Menus from "./pages/Menus";
import Contact from "./pages/Contact";
import Register from "./pages/Register";

// IMPORT COMPONENTS
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// IMPORT CSS
import './App.css'

const App = () => {
    const cookies = new Cookies(null, { path: '/' });
    const [isLogged, setIsLogged] = useState(false);
    const [allMenus, setAllMenus] = useState([]);
    const [allCategories, setAllCategories] = useState([]);
    
    // CHECK TOKEN
    useEffect(() => {
        const token = cookies.get('token');
        
        if(token === undefined)
        {
            setIsLogged(false);
            return;
        }
    }, []);

    // GET DATA
    useEffect(() => {
        const getData = async () => {
            try {
                const service = new axiosService();
                await service.get(`/menus/get/all`, {}).then((response) => {
                    if(response.status === 200 && response.data.message === 'OK')
                    {
                        setAllMenus(response.data.menus);
                    }
                });

                await service.get(`/categories/get/all`, {}).then(async (response) => {
                    if(response.status === 200 && response.data.message === 'OK')
                    {
                        const temp_categories = await Promise.all(response.data.categories.filter((element) => {
                            return element.id !== 0
                        }));

                        setAllCategories(temp_categories)
                    }
                });
            } catch (err) {
                console.log(err)
            }
        }

        getData();
    }, [])

    return (
        <Router>
            <Header isLogged={isLogged} />
                <div className="app">
                    <Routes>
                        <Route path="/" exact element={
                            <Home allMenus={allMenus} />
                        } />
                        <Route path="/news" exact element={
                            <News />
                        } />
                        <Route path="/menus" exact element={
                            <Menus allMenus={allMenus} allCategories={allCategories} />
                        } />
                        <Route path="/contact" exact element={
                            <Contact />
                        } />
                        <Route path="/register" exact element={
                            <Register />
                        } />
                    </Routes>
                </div>
            <Footer />
        </Router>
    );
}

export default App;