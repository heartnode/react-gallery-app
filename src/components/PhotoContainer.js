import React, {Component} from 'react';
import Photo from './Photo';
import NotFound from './NotFound';
import {withRouter} from 'react-router-dom'
/**
 * PhotoContainer renders a list of Photo tags an empty list of photos will show NotFound instead
 */
class PhotoContainer extends Component{
    render(){
        return (
            <div className="photo-container">
            <h2>Results for {this.props.query}</h2>
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
export default withRouter(PhotoContainer);