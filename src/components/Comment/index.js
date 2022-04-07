import styles from "./style.module.scss";
import LikePanel from './LikePanel/index.js';
import CommentBody from './CommentBody';
import CommentHeader from './CommentHeader';


function Comment({comment, postId, getPostsFromDB}) {
  return (
    <div className={styles.Post}>
      <LikePanel
        likes={comment.likes}
      />
      <div className={styles.PostBodyWrapper}>
        <CommentHeader
          username={comment.name}
          created={comment.date}
          id={comment._id}
          getPostsFromDB={getPostsFromDB}
        />
        <CommentBody
          text={comment.text}
        />
      </div>
    </div>
  );
}

export default Comment;
