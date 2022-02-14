import { Component } from 'react';
import { debounce } from 'debounce';

class Filter extends Component {
    state = {
        filter: '',
    }

    handleChenge = (evt) => {
        const { value } = evt.target;
        this.setState({
            filter: value,
        });
        debounce(this.props.filterDataHandler(this.state.filter), 500);
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

