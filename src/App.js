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
        toys,
        score: 0,
        totalscore: 0
    }

    endGame = () => {
        if (this.state.score > this.state.totalscore) {
          this.setState({totalscore: this.state.score})
        };
        this.state.toys.forEach(toy => {
          toy.count = 0;
        });
        alert(`You got ${this.state.score} in a row!`);
        this.setState({score: 0});
        return true;
      }
    
      scoreIncrement = id => {
        this.state.toys.find((o, i) => {
          if (o.id === id) {
            if(toys[i].count === 0){
              toys[i].count = toys[i].count + 1;
              this.setState({score : this.state.score + 1}, function(){
                console.log(this.state.score);
              });
              this.state.toys.sort(() => Math.random() - 0.5)
              return true; 
            } else {
              this.endGame();
            }
          }
        });
      }

    render() {
        return (
            <div className="main">
                
                <Navbar score={this.state.score} totalscore={this.state.totalscore}/>
                <Header >Clicky Game</ Header>
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