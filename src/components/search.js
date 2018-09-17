import React,{Component} from 'react';
import SearchResults from 'react-filter-search';
 
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: ''
    };
  }
  componentWillMount() {
    fetch('http://5b9e41b1133f660014c91950.mockapi.io/library')
      .then(response => response.json())
      .then(json => this.setState({ data: json }));
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  render() {
    const { data, value } = this.state;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <SearchResults
          value={value}
          data={data}
          renderResults={results => (
            <div>
              {results.map(el => (
                <div>
                  <span>{el.title}</span>
                  
                </div>
              ))}
            </div>
          )}
        />
      </div>
    );
  }
}
export default Search;