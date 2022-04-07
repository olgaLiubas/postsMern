import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import AddUpdatePostInput from './components/AddUpdatePostInput';
import PostWrapper from './components/PostWrapper'
import { getPosts } from './api'

function App() {
  const [posts, setPosts] = useState()

  const getPostsFromDB = async () => {
    const posts = await getPosts()
    setPosts(posts)
    console.log('called')
  }
  
  useEffect(()=> {
    getPostsFromDB()
  }, [])

  if(!posts) return (<div>LOADING</div>);

  return (
    <div className={styles.wall}>
      {posts.map(post => 
        <PostWrapper
          key={post._id}
          post={post}
          getPostsFromDB={getPostsFromDB}
        />
      )}
      <AddUpdatePostInput
        getPostsFromDB={getPostsFromDB}
      />
    </div>
  );
}

export default App;
