import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// IMPORT PAGES
import Home from "./pages/Home";

// IMPORT COMPONENTS
import Header from "./components/Header/Header";

// IMPORT CSS
import './App.css'

const App = () => {
    return (
        <Router>
            <Header />
            <div className="app">
                <Routes>
                    <Route path="/" exact element={
                        <Home />
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;