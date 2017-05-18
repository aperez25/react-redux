import React from 'react';
import store from '../store';
// import { incrementCounter } from '../action-creators';
import Lyrics from '../components/Lyrics';



// Stopped at handling input section
// https://learn.fullstackacademy.com/workshop/581353d9b659df00039f518d/content/583de3d52a0bab0004c14b90/text

class LyricsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount(){
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  // increment() {
  //   store.dispatch(incrementCounter());
  // }

  render() {
    const {counter} = this.state;
    return (
      <div>
        <h1>Just a container for now!</h1>
        <Lyrics counter={counter} increment={this.increment} />
      </div>
    );
  }
}

export default LyricsContainer;
