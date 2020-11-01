import React from 'react';
import { Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class Searchscreen extends React.Component {
  constructor(){
    super();
      this.state = {
        search: '',
      }
  }
  updateSearch = (search) => {
    this.setState({ search });
  };
    render() {
      const { search } = this.state;
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <SearchBar style={{width:100}}
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
        </View>
      );
    }
  }