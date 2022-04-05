import styles from "./style.module.scss";
import LikePanel from './LikePanel/index.js';
import PostBody from './PostBody';
import PostHeader from './PostHeader';


function Post() {
  return (
    <div className={styles.Post}>
      <LikePanel/>
      <div className={styles.PostBodyWrapper}>
        <PostHeader/>
        <PostBody/>
      </div>
    </div>
  );
}

export default Post;
