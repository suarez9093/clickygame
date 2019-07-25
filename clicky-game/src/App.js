import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ToyCard from "./components/ToyCard";
import Footer from "./components/Footer";
import toys from "./toys.json";

class App extends Component {

    state = {
        toys
    }

    render() {
        return (
            <div>
                <Navbar />
                <Header />
                {this.state.toys.map(toy => (
                    <ToyCard
                        id={toy.id}
                        name={toy.name}
                        image={toy.image}
                        role={toy.role}
                    />
                ))}
                <Footer />
            </div>
        );
    }

}

export default App;