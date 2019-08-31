import React, { Component } from 'react';
// enables use of axios instance instead of standard interceptor set in index.js
// import axios from '../../axios';
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: '#fa923f',
                    textDecoration: 'underline',
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink to={{ pathname: '/new-post' }}>New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts" component={Posts} />
          {/* <Redirect from="/" to="/posts" /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
