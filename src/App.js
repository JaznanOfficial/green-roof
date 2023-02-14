import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            {/* <!-- navigation --> */}
            <Navbar />

            {/* <!-- search --> */}
            <Searchbar />

            <section class="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
                <div class="absolute inset-0">
                    <div class="bg-white h-1/3 sm:h-2/3"></div>
                </div>
                <div class="relative max-w-7xl mx-auto">
                    <Header />

                    {/* <!-- card grid  --> */}
                    <Blogs />
                </div>
            </section>

            {/* <!-- footer --> */}
            <Footer />
        </div>
    );
}

export default App;
