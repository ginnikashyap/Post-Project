import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
    
    state={
            loadedPost:null
          }

  

    render () {
        let post = <p style={{textAlign:"center"}}>Please select a Post!</p>;
        if(this.props.id)
        {
            post =  <p style={{textAlign:"center"}}>Loading!!</p>;
        }
        
        if(this.state.loadedPost)
        {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
       
        return post;
    }
    // We get id prior to loadedPost,because loadedPost is asynchronous.
    // And we render as soon as we get id.So me need to make the extra check for loadedPost after checking for id.

    componentDidUpdate() 
    {
        if (this.props.id) {
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !==this.props.id))
            {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                    .then(response => 
                        {
                            this.setState({loadedPost: response.data})
                        });
            }
        }
    }
}

export default FullPost;