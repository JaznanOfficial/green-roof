import logo from "./logo.svg";
import "./App.css";
import TopNavigation from "./components/Navigation/TopNavigation";
import Routers from "./Routers/Routers";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <TopNavigation />
            <Routers />
            <Footer />
        </div>
    );
}

export default App;
