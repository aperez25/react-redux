import React from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';
import store from '../store';

class FilterableArtistsContainer extends React.Component {

  constructor (props) {
    super(props);
    this.state = Object.assign({
      inputValue: ''
    }, store.getState());
  }

  handleChange (evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value
    });
  }

  render () {
    console.log(this.props);
    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.artists.filter(artist =>
      artist.name.match(inputValue));

    return (
      <div>
        <FilterInput
          handleChange={this.handleChange}
          inputValue={inputValue}
        />
        <Artists artists={filteredArtists} />
      </div>
    );
  }
}

export default FilterableArtistsContainer;
