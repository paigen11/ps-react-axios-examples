import React, { Component } from 'react';
// enables use of axios instance instead of standard interceptor set in index.js
// import axios from '../../axios';
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';
import './Blog.css';

// how to lazy load routes and components asynchronously
const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});

class Blog extends Component {
  state = {
    auth: true,
  };
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
          {/* a guarded way to control whether the user can access the route or not */}
          {this.state.auth ? (
            <Route path="/new-post" component={AsyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not found</h1>} />
          {/* <Redirect from="/" to="/posts" /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
