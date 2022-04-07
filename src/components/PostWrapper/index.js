import styles from './styles.module.scss';
import Post from '../Post'
import Comment from '../Comment'

function PostWrapper({post, getPostsFromDB}) {
  return (
    <div className={styles.PostWrapper}>
      <Post
        post={post}
        getPostsFromDB={getPostsFromDB}
      />
      <div className={styles.commentsSection}>
        {post.comments.map(comment => 
          <Comment
            comment={comment}
            postId={post._id}
            getPostsFromDB={getPostsFromDB}
          />
        )}
      </div>
    </div>
  );
}

export default PostWrapper;
