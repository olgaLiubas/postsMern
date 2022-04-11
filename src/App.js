import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import CreateTextArea from './components/common/CreateTextArea';
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

  if(!posts) return (<div>LOADING, please check if server is working</div>);

  return (
    <div className={styles.wall}>
      {posts.map(post => 
        <PostWrapper
          key={post._id}
          post={post}
          getPostsFromDB={getPostsFromDB}
        />
      )}
      <CreateTextArea
        getPostsFromDB={getPostsFromDB}
        postId={false}
      />
    </div>
  );
}

export default App;
