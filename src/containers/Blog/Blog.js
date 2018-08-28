import React, { Component } from 'react';
// import axios from 'axios';
import './Blog.css';
import {Route,NavLink,Switch,Redirect} from 'react-router-dom';
import Posts from '../Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';


class Blog extends Component {
 
    postSelectedHandler=(id) => {
        this.setState({selectedPostId: id})
    }

    render () {
         return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                {/* <a href="/">Home</a> */}
                                    <NavLink exact 
                                    to="/posts/"
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color:'#fa923f',
                                        textDecoration: 'underline'
                                    }}>Home
                                </NavLink>

                            </li>
                            <li>
                                {/* <a href="/new-post">New Post</a> */}
                                <NavLink to={{
                                    pathname:'/new-post',
                                    hash: '#submit',
                                    search:'?quick-submit=true'
                                }}>
                                    New Post
                                </NavLink>
                            </li>     
                        </ul>
                        </nav>
                </header>          
                {/* <Route path="/"  exact render={()=><h1>Home</h1>}/>
                if we dont specify exact then route will then render home 2 for all the paths which starts with / 
                <Route path="/"   render={()=><h1>Home 2</h1>}/> */}
                    
                <Switch>
                    <Route path="/new-post" component={NewPost}></Route>
                    <Route path="/posts" component={Posts}></Route>
                    <Redirect from="/" to= "/posts"/>
                </Switch>
                {/* <Posts/>     */}
            </div>
        );
    }
}

export default Blog;