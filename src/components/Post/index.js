import styles from "./style.module.scss";
import LikePanel from './LikePanel/index.js';
import PostBody from './PostBody';
import PostHeader from './PostHeader';


function Post({post, getPostsFromDB}) {
  return (
    <div className={styles.Post}>
      <LikePanel
        likes={post.likes}
      />
      <div className={styles.PostBodyWrapper}>
        <PostHeader
          username={post.name}
          created={post.date}
          id={post._id}
          getPostsFromDB={getPostsFromDB}
        />
        <PostBody
          text={post.text}
        />
      </div>
    </div>
  );
}

export default Post;
