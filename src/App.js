import React, {Component} from 'react';
import apiKey from './config';
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import {BrowserRouter} from 'react-router-dom';
class App extends Component {
  state = {
    photos:[]
  };
  handleSearch = (query = "sunset")=>{
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=24&format=json&nojsoncallback=1`; 
    fetch(url)
    .then(response=>response.json())
    .then(responseJson=>
      this.setState({photos:responseJson.photos.photo})  
    )
    .catch((err)=>console.log("Error while fetching and parsing response", err));
  }
  componentDidMount(){
    this.handleSearch();
  }
  
  render(){
    return (
      <BrowserRouter>
          <Search />
          <Nav />
          <PhotoContainer photos={this.state.photos}/>
      </BrowserRouter>
    );
  }
}

export default App;
