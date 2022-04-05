import styles from './styles.module.scss';
import Post from '../Post'

function PostWrapper() {
  return (
    <div className={styles.PostWrapper}>
      <Post/>
      <div className={styles.commentsSection}>
        <Post/>
      </div>
    </div>
  );
}

export default PostWrapper;
