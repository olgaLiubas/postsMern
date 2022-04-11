import styles from './styles.module.scss';
import Post from '../Post'
import Comment from '../Comment'
import { useState } from 'react';
import CreateTextArea from '../common/CreateTextArea'

function PostWrapper({post, getPostsFromDB}) {
  const [activeCommentInput, setActiveCommentInput] = useState(false)
  return (
    <div className={styles.PostWrapper}>
      <Post
        post={post}
        getPostsFromDB={getPostsFromDB}
        setActiveCommentInput={setActiveCommentInput}
      />
      <div className={styles.commentsSection}>
        {post.comments.map(comment => 
          <Comment
            comment={comment}
            postId={post._id}
            getPostsFromDB={getPostsFromDB}
            setActiveCommentInput={setActiveCommentInput}
          />
        )}
        {activeCommentInput 
          ? <CreateTextArea
              getPostsFromDB={getPostsFromDB}
              postId={post._id}
              setActiveCommentInput={setActiveCommentInput}
            />
          : null
        }
      </div>
    </div>
  );
}

export default PostWrapper;
