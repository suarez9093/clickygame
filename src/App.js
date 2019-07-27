import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ToyCard from "./components/ToyCard";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import toys from "./toys.json";
import "./style.css";


class App extends Component {

    state = {
        toys
    }

    scoreIncrement = () => {
        const toys = this.state.toys.filter(toy => toy.id);
        console.log("Toys: " + toys);
        // alert(`${this.state.toys} was clicked!`)
    }

    render() {
        return (
            <div className="main">
                
                <Navbar />
                <Header />
                <Wrapper>
                    {this.state.toys.map(toy => (
                        <ToyCard
                            id={toy.id}
                            name={toy.name}
                            image={toy.image}
                            role={toy.role}
                            scoreIncrement={this.scoreIncrement}
                            
                        />
                    ))}
                    {/* <Footer /> */}
                </Wrapper>
            </div>
        );
    }

}



export default App;