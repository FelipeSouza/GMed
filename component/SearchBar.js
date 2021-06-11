import * as React from 'react';
import { SearchBar } from 'react-native-elements';

function SearchBarList(){
    state = {
        search: '',
    };
    
    updateSearch = (search) => {
        this.setState({ search });
    };
    
    const { search } = this.state;
    
    return (
          <SearchBar
            placeholder="Digite aqui."
            onChangeText={this.updateSearch}
            value={search}
          />
    );
      
}
export default SearchBarList;