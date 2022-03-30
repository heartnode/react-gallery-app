import React, {Component} from 'react';
import apiKey from './config';
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import {Route,Switch,Redirect} from 'react-router-dom';

class App extends Component {
  state = {
    isLoading: true,
    photos:[],
    cats:[],
    dogs:[],
    computers:[]
  };

  componentDidMount(){
    const builtinQuery =["cats","dogs","computers"];
    builtinQuery.map((query)=> this.handleSearch(query));
  }

  handleSearch = (query)=>{
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=24&format=json&nojsoncallback=1`; 
    this.setState((prevState)=>{
      const newState = {...prevState};
      newState.isLoading = true;
      return newState;
    });
    fetch(url)
    .then(response=>response.json())
    .then(responseJson=>{
      this.setState((prevState) =>{
        const newState = {...prevState};
        if (query === "cats"){
          newState.cats = responseJson.photos.photo;
        } else if (query === "dogs"){
          newState.dogs = responseJson.photos.photo;
        } else if (query === "computers"){
          newState.computers = responseJson.photos.photo;
        }
        else { 
          newState.photos = responseJson.photos.photo;
        }
        newState.isLoading = false;
        return newState;  
      })
    })
    .catch((err)=>console.log("Error while fetching and parsing response", err));
  }

  
  render(){
    return (
      <div>
        <Search onSearch={this.handleSearch}/>
        <Nav />
        {
          (this.state.isLoading) ? <h2>Loading ...</h2> :
          <Switch>
            <Route exact path="/" render={()=><Redirect to="/cats" />} />
            <Route path="/cats" render={()=>{
              return (<PhotoContainer photos={this.state.cats} keyword="Cats" />);}} />
            <Route path="/dogs" render={()=>{
              return (<PhotoContainer photos={this.state.dogs} keyword="Dogs" />);}} />
            <Route path="/computers" render={()=>{
              return (<PhotoContainer photos={this.state.computers} keyword="Computers" />);}} />
            <Route path="/search/:query" render={({match})=>{
              console.log(match.params.query);
              return (<PhotoContainer photos={this.state.photos} keyword={match.params.query}/>);}} />
            <Route render={()=><PhotoContainer photos={[]} />} />   
          </Switch>
        }
        
      </div>
    );
  }
}

export default App;
