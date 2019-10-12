import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux'


import Posts from './components/Posts.jsx'
import PostForm from './components/postForm.jsx'


import store from './components/store.jsx'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
       <PostForm />
      <Posts />
     
    </div>
    </Provider>
  );
}

export default App;
