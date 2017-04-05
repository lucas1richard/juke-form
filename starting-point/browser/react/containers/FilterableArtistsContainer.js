import React from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

class FilterableArtistsContainer extends React.Component {
  constructor(props) {
    super();

    this.state = { name: '' };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(ev) {
    this.setState({ name: ev.target.value });
  }

  render() {
    const { name } = this.state;
    const filteredArtists = this.props.artists.filter(artist => artist.name.match(name));
    return (
        <div>
          <FilterInput handleFilterChange={this.handleFilterChange} />
          <Artists artists={filteredArtists} />
        </div>
    );
  }
}

export default FilterableArtistsContainer;
