import React, { Component } from 'react';
// import axios from 'axios';
import './Blog.css';
import Posts from '../Posts/Posts';
import { Route, NavLink } from "react-router-dom";
import NewPost from "../NewPost/NewPost";
import FullPost from "../FullPost/FullPost";

class Blog extends Component {

    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink activeClassName="my-active" to="/" exact>Home</NavLink></li>
                            <li><NavLink activeClassName="my-active" to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quich-submit=true'
                            }}>NewPost</NavLink></li>
                            
                        </ul>
                    </nav>
                </header>
                {/* <Route path ="/" exact render={() => <h1>Home</h1>} /> 
                <Route path ="/"  render={() => <h1>Home 2</h1>} />  */}
                {/* <Posts />   */}

                <Route path="/" exact component={Posts} />

                <Route path="/new-post" component={NewPost} />
                <Route path="/:id" component={FullPost} />
                
            </div>
        );
    }
}

export default Blog;