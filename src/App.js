import React, { Component } from 'react';
// import logo from './logo.svg';
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
// import Header from "./comp"
// import Counter from "./components/Increment/Counter";
import images from "./images.json";
import './App.css';

class App extends Component {
  state = {
    images: images,
    score: 0,
    topScore: 0,
    clickedCards: [],
    count: 0
  }

  updateClickCount(id) {
    
    const newimages = this.state.images.slice();
    const newTopScore = this.state.topScore.valueOf();
    let newCount = this.state.count

    // console.log(images[id].count)
    // this.randomOrder()
     

    if (images[id].count !== 0){
      alert('you selected this already, so game over')
      // console.log(images)
     // this.resetCount()
      this.setState({
        score: 0
      })
      
      this.resetCount();
      // this.randomOrder();
    } 
    else if (images[id].count === 0) {
      //do stuff..
      this.setState({
        score: this.state.score+1,
        images: newimages,
        count: newCount
      })
      this.randomOrder();
    }  
    if (this.state.score >= newTopScore) {
      this.setState({
        topScore: this.state.topScore+1
      })
    }

    images[id].count++

    
  }

  randomOrder = () => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const images = shuffle(this.state.images)

    // Set this.state.friends equal to the new friends array
    this.setState({ images })

    function shuffle(array) {
      let currentIndex = array.length, temporaryValue, randomIndex
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue

      }
      return array
    }
  }

  
  resetCount = () => {
    images[0].count = 0;
    images[1].count = 0;
    images[2].count = 0;
    images[3].count = 0;
    images[4].count = 0;
    images[5].count = 0;
    images[6].count = 0;
    images[7].count = 0;
    images[8].count = 0;
    images[9].count = 0;
    images[10].count = 0;
    images[11].count = 0;

  }


  render() {
    return (
      <Wrapper>
        <div className="App">
            <header className="App-header">
              <nav className="navbar">
                <a href="/">Clicky Game</a>
                <p>Your Count: {this.state.score} | Top Score: {this.state.topScore}</p>
              </nav>
            </header>
        </div>
        <div className="container">
          <div className="row">
          {this.state.images.map(images => (
                <ImageCard
                key={images.id}
                id={images.id}
                image={images.image} 
                count={images.count}
                onClick={(id) => this.updateClickCount(id)}
                //CREATE REARRANGE CARD FUNCTION https://github.com/fredlintz5/reactMemory/blob/master/react_memory/src/App.js
                // rearrangeCard={() => {this.updateClickCount(images.id)}}
                />
              ))                
            }
            </div>
          </div>
      </Wrapper>
    );
  }
}

export default App;
