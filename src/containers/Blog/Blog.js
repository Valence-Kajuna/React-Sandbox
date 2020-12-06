import React, { Component } from 'react';
// import axios from 'axios';
import './Blog.css';
import Posts from '../Posts/Posts';
import { Route, NavLink, Switch } from "react-router-dom";
import NewPost from "../NewPost/NewPost";


class Blog extends Component {

    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink activeClassName="my-active" to="/" exact>Posts</NavLink></li>
                            <li><NavLink activeClassName="my-active" to={{
                                pathname: '/new-post'
                            }}>NewPost</NavLink></li>
                            
                        </ul>
                    </nav>
                </header>
                {/* <Route path ="/" exact render={() => <h1>Home</h1>} /> 
                <Route path ="/"  render={() => <h1>Home 2</h1>} />  */}
                {/* <Posts />   */}

                <Switch>
                <Route path="/new-post" component={NewPost} />
                <Route path="/"  component={Posts} />
                </Switch>
           
                
            </div>
        );
    }
}

export default Blog;