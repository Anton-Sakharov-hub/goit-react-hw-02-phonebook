import { Component } from 'react';
import { debounce } from 'debounce';

class Filter extends Component {
    state = {
        filter: '',
    }

    handleChenge = (evt) => {
        const { value } = evt.target;
        console.log(this.props.filterHandler);
        this.setState({
            filter: value,
        });
        debounce(this.props.filterHandler(this.state.filter), 500);
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

