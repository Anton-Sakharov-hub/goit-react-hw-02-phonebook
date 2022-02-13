import { Component } from 'react';
import { debounce } from 'debounce';

class Filter extends Component {
    state = {
        filter: '',
    }

    handleChenge = () => {
        debounce(this.props.filterHandler({ ...this.state }), 500);
    }

    render() {
        return (
        <input
          type='text'
          name="filter"
          onChange={this.handleChenge}
          value={this.state.filter}
          /> 
    )}
}

export default Filter;

