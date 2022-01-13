import './App.css';
import { useDispatch, useSelector } from 'react-redux'

/*
  Components to create:
  Posts
  Post
  Subreddits
  Subreddit
*/

function App() {
  const mystate = useSelector(state => state.posts)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>State: {mystate}</h1>
      <button onClick={() => dispatch({type: 'test'})}></button>
    </div>
  );
}

export default App;
