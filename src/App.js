import { useEffect } from 'react';
import styles from './App.module.scss';
import AddUpdatePostInput from './components/AddUpdatePostInput';
import PostWrapper from './components/PostWrapper'
import {createPost, getPosts }from './api'

function App() {

  useEffect(async()=> {
    // console.log(await createPost('http://localhost:4000/app/createPost', {name: "Ostap", text: 'g'}))
    // console.log(await createPost('http://localhost:4000/app/createComment', {name: "Ostap", text: 'firstComment', postId: '624be9a281d3307959a73bb6'}))
    console.log(await getPosts())
  }, [])
  return (
    <div className={styles.wall}>
      <PostWrapper/>
      <PostWrapper/>
      <AddUpdatePostInput/>
    </div>
  );
}

export default App;
