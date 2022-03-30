import React, {Component} from 'react';
import Photo from './Photo';
import NotFound from './NotFound';
class PhotoContainer extends Component{

    render(){
        return (
            <div className="photo-container">
            <h2>Results</h2>
            <ul>
              {this.props.photos.map((photo,index)=>
                <Photo {...photo} key={index}/>
              )}
              <NotFound />
            </ul>
          </div>
        )
    }
}
export default PhotoContainer;