import React, {Component} from 'react';
import Photo from './Photo';
import NotFound from './NotFound';
class PhotoContainer extends Component{

    render(){
        return (
            <div className="photo-container">
            <h2>Results for {this.props.keyword}</h2>
            <ul>
              {
                (this.props.photos.length) ?
                  this.props.photos.map((photo)=>
                    <Photo {...photo} key={photo.id}/>)
                  :
                  <NotFound />
              }
            </ul>
          </div>
        )
    }
}
export default PhotoContainer;