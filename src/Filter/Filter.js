import { Component } from 'react';
import { debounce } from 'debounce';

class Filter extends Component {
    debouncedFilterData = debounce(this.props.filterDataHandler, 500);
    
    handleChenge = (evt) => {
        const { value } = evt.target;

        this.debouncedFilterData(value);
    }

    render() {
        return (
        <input
          type='text'
          name="filter"
          onChange={this.handleChenge}
          /> 
    )}
}

export default Filter;

